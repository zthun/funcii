import { purge } from "@zthun/helpful-fn";

/**
 * Represents a type of a file system node.
 */
export enum ZFileSystemNodeType {
  File = "file",
  Folder = "folder",
}

export interface IZFileSystemNode {
  /**
   * The absolute path of the node.
   */
  path: string;

  /**
   * The type of the node (file or folder).
   */
  type: ZFileSystemNodeType;

  /**
   * The creation date of the node.
   */
  created?: string;

  /**
   * The modification date of the node.
   */
  updated?: string;

  /**
   * The size of the node in bytes.
   */
  size?: bigint;
}

/**
 * Represents a builder for a file system node.
 */
export class ZFileSystemNodeBuilder {
  private _node: IZFileSystemNode;

  public constructor() {
    this._node = {
      path: "/",
      type: ZFileSystemNodeType.Folder,
    };
  }

  public created(at?: Date | string | undefined) {
    this._node.created = at instanceof Date ? at.toJSON() : at;
    purge(this._node, "created");
    return this;
  }

  public updated(at?: Date | string | undefined) {
    this._node.updated = at instanceof Date ? at.toJSON() : at;
    purge(this._node, "updated");
    return this;
  }

  public size(bytes: bigint | number | undefined) {
    this._node.size = typeof bytes == "number" ? BigInt(bytes) : bytes;
    purge(this._node, "size");
    return this;
  }

  public path(path: string) {
    this._node.path = path;
    return this;
  }

  public type(type: ZFileSystemNodeType) {
    this._node.type = type;
    return this;
  }

  public file = this.type.bind(this, ZFileSystemNodeType.File);
  public folder = this.type.bind(this, ZFileSystemNodeType.Folder);

  public build() {
    return structuredClone(this._node);
  }
}
