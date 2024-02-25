import { ZIntrinsic, firstDefined } from '@zthun/helpful-fn';
import { kebabCase } from 'lodash-es';
import { mutateAttribute } from '../mutate-attribute/mutate-attribute.mjs';

/**
 * Options for an attribute property.
 */
export type IZAttributeOptions = {
  /**
   * The name of the attribute.  If this is undefined,
   * then the defined property name is used.
   */
  name?: string;

  /**
   * An optional fallback value in the case the an attribute value
   * is non existent.
   *
   * The default fallback depends on the actual type.  Note that
   * booleans cannot have a fallback as a null attribute immediately
   * results in false by its nature.
   */
  fallback?: bigint | number | string;

  /**
   * The property expected type.  If this is falsy, then a string is assumed.
   */
  type?: ZIntrinsic;
};

/**
 * A decorator that marks an HTMLElement property that is backed by an
 * attribute that represents an intrinsic value.
 *
 * @param options -
 *        The options for the attribute.
 *
 * @returns -
 *        A property decorator that turns a single property to be backed by
 *        an HTMLElement attribute.
 */
export function ZAttribute<V>(options?: IZAttributeOptions): PropertyDecorator {
  return <C extends HTMLElement>(target: C, propertyKey: string | symbol): void => {
    const $default = kebabCase(String(propertyKey));
    const attr = String(firstDefined($default, options?.name));
    const type = options?.type;
    const fallback = options?.fallback;

    function attrToIntr(
      value: string | null,
      type: ZIntrinsic | null | undefined,
      fallback: bigint | number | string | undefined
    ): bigint | number | string | boolean | null {
      if (type === 'function' || type === 'symbol' || type === 'object') {
        // Not supported for attributes.
        return null;
      }

      if (type === 'boolean') {
        return value != null && value !== 'false';
      }

      if (type === 'bigint') {
        return value == null ? firstDefined(null, fallback) : BigInt(value);
      }

      if (type === 'number') {
        return value == null ? firstDefined(NaN, fallback) : +value;
      }

      return value == null ? firstDefined('', fallback) : value;
    }

    function intrToAttr(value: any | null | undefined, type: ZIntrinsic | null | undefined): string | null {
      if (type === 'function' || type === 'symbol' || type === 'object') {
        throw new Error(`Type, ${type}, is not a supported value of an attribute.  Use a property instead.`);
      }

      return value == null ? value : String(value);
    }

    function get(this: C) {
      const value = this.getAttribute(attr);
      return attrToIntr(value, type, fallback);
    }

    function set(this: C, newValue: V) {
      const asText = intrToAttr(newValue, type);
      mutateAttribute(this, attr, asText);
    }

    Object.defineProperty(target, propertyKey, {
      get,
      set
    });
  };
}
