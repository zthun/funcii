/**
 * The callback function type for an object that supports a PropertyChanged event.
 */
export type ZPropertyChangedCallbackFunction = (name: string | symbol, oldValue: any, newValue: any) => void;

/**
 * An event for when a property changes.
 */
export interface IZComponentPropertyChanged {
  /**
   * Occurs when a property declared with the {@link ZProperty} decorator changes it's value.
   *
   * @param name -
   *        The name of the property.
   * @param oldValue -
   *        The old value of the property.
   * @param newValue -
   *        The new value of the property.
   */
  propertyChangedCallback(name: string | symbol, oldValue: any, newValue: any): void;
}

/**
 * Gets whether an object implements an IZComponentPropertyChanged.
 *
 * @param x -
 *        The object to check
 *
 * @returns
 *        True if x implements the property change callback interface.
 *        False otherwise.
 */
export function implementsPropertyChanged(x: any): x is IZComponentPropertyChanged {
  return typeof x.propertyChangedCallback === 'function';
}

/**
 * Options for a web component property.
 */
export interface ZPropertyOptions<V> {
  /**
   * The initial value.
   */
  initial?: V;
}

/**
 * A decorator factory that marks a HTMLElement member as a property.
 *
 * If the target class containing the property implements IZComponentPropertyChanged,
 * then this will invoke that property.
 *
 * @param options -
 *        Options for the property.
 *
 * @returns
 *        The property decorator which wraps a property to invoke the
 *        property change event when it changes.
 */
export function ZProperty<V>(options?: ZPropertyOptions<V>): PropertyDecorator {
  return (target: object, propertyKey: string | symbol): void => {
    let _value: V = options?.initial as V;

    function get() {
      return _value;
    }

    function set(newValue: V) {
      const oldValue = _value;
      _value = newValue;

      if (implementsPropertyChanged(this) && oldValue !== newValue) {
        this.propertyChangedCallback(propertyKey, oldValue, newValue);
      }
    }

    Object.defineProperty(target, propertyKey, {
      get,
      set
    });
  };
}
