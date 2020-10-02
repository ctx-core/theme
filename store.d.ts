import { Writable } from '@ctx-core/store';
export declare type $type__theme__invert = boolean;
export interface type__theme__invert extends Writable<$type__theme__invert> {
    invert__theme: () => void;
}
export declare const b__theme__invert: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__theme__invert;
export declare const __theme__invert: type__theme__invert;
export declare const invert__theme: () => void;
export declare const b__class__theme__invert: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("@ctx-core/store").Readable<string>;
export declare const __class__theme__invert: import("@ctx-core/store").Readable<string>;
