export type RequiredDeep<T> = Required<{
  [K in keyof T]: RequiredDeep<T[K]>;
}>;
