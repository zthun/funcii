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
 *        a higher precedence than schema[1].
 *
 * @returns
 *        An error object that is the best evaluation of what the problem actually is.
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
