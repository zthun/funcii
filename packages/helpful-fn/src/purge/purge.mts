export function purge<T>(obj: T, property: keyof T) {
  if (obj[property] === undefined) {
    delete obj[property];
  }
}
