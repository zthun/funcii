import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { trim } from "lodash-es";

/**
 * Represents a constraint that a string property is not pure white space.
 */
@ValidatorConstraint({ name: "white-space", async: false })
export class IsNotWhiteSpaceValidator implements ValidatorConstraintInterface {
  /**
   * Validates that value is a string and has 1 or more non white-space characters.
   *
   * @param value -
   *        The value to check.
   *
   * @returns
   *        True if value is a string and has 1 or more non white space characters.
   */
  public validate(value: any) {
    return typeof value === "string" && !!trim(value);
  }
}

/**
 * A constraint that a string property is not pure white space.
 *
 * @param options -
 *        The validation options.
 *
 * @returns
 *        A decorator that applies the constraint.
 */
export function IsNotWhiteSpace(options?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      validator: IsNotWhiteSpaceValidator,
    });
  };
}
