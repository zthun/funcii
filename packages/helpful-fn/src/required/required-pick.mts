export type RequiredPick<T, P extends keyof T> = T & Required<Pick<T, P>>;
