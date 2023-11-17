import { access } from 'fs';
import { dirname, isAbsolute, resolve } from 'path';
import { promisify } from 'util';

/**
 * Options for where a directory walk starts.
 */
export interface ZWalkOptions {
  /**
   * The starting directory.
   *
   * The default is __dirname
   */
  start?: string;

  /**
   * The directory to stop at.
   *
   * The default is the root of the file system.
   */
  stop?: string;

  /**
   * The type of mode that the path must support in order
   * to be approved.
   *
   * The default is undefined and left up to the node api.
   */
  mode?: number;
}

/**
 * Walks up a directory tree for a given path.
 *
 * @param search -
 *        The path to search for.
 * @param options -
 *        The given options for the search.
 *
 * @returns
 *        The fully qualified path to the first path that matches the search
 *        starting at the options start or the current working directory if not
 *        specified.  Returns null if no such directory exists.
 */
export async function walk(search: string, options?: ZWalkOptions): Promise<string | null> {
  const start = options?.start || __dirname;
  const stop = options?.stop || '/';
  const mode = options?.mode;

  const _access = promisify(access);

  const _test = async (path: string) => {
    try {
      await _access(path, mode);
      return true;
    } catch (e) {
      return false;
    }
  };

  if (isAbsolute(search)) {
    return (await _test(search)) ? search : null;
  }

  let dir = start;
  do {
    const path = resolve(dir, search);
    const exists = await _test(path);

    if (exists) {
      return path;
    }

    dir = dir === stop ? '' : dirname(dir);
  } while (dir.length);

  return null;
}
