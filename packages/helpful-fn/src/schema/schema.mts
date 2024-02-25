/**
 * Intrinsic types for a schema.
 */
export type ZSchemaIntrinsic = 'bigint' | 'boolean' | 'function' | 'number' | 'string' | 'symbol';

/**
 * Represents a schema that describes the metadata for an object.
 *
 * @param T - The type of object that the schema is declared for.
 */
export type ZObjectSchema<T extends object> = {
  [K in keyof Required<T>]: ZObjectSchema<any> | ZSchemaIntrinsic;
};
