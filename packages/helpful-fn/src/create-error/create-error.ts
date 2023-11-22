/**
 * A helper method to construct a JavaScript error object given a list of acceptable schema keys.
 *
 * @param problem -
 *        A generic representation of the problem that occurred.  This can be an Error object,
 *        another object representing some kind of error, or some message representing the error.
 *        If this is null or undefined, then a generic error is returned.
 * @param schema -
 *        The list of acceptable object keys to look into problem.  These will be recursively
 *        evaluated to strip out the real error message.  Note that this is in order of
 *        priority.  If schema[0] and schema[1] are both keys on problem, then schema[0] takes
 *        a higher precedence than schema[1].  By default, the schema will look for properties
 *        named, message, error, exception, and data, in that order.
 *
 * @returns
 *        An error object that is the best evaluation of what the problem actually is.
 *
 * @example
 *
 * ```ts
 * // All of these result an Error with the message, 'Something went wrong'
 * const errorWithStringProblem = createError('Something went wrong');
 * const errorWithObjectProblemInSchema = createError({ error: 'Something went wrong'});
 * const errorWithCustomSchema = createError({ issue: 'Something went wrong'}, ['issue']);
 * const errorRecursive = createError({ error: { message: 'Something went wrong' }});
 *
 * // This would result in '[Object object]' as there is no way to figure out how to deconstruct this problem.
 * const errorCannotBeFound = createError({ wut: 'Something went wrong' });
 * ```
 */
export function createError(problem: any, schema = ['message', 'error', 'exception', 'data']): Error {
  if (problem instanceof Error) {
    return problem;
  }

  if (problem == null) {
    return new Error();
  }

  for (let i = 0; i < schema.length; ++i) {
    const key = schema[i];

    if (Object.prototype.hasOwnProperty.call(problem, key)) {
      return createError(problem[key]);
    }
  }

  return new Error(String(problem));
}
