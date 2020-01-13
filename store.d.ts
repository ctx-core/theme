import { Writable } from 'svelte/store';
export interface Writable__theme__invert extends Writable<boolean> {
    invert__theme: () => void;
}
export declare const b__theme__invert: (ctx?: any, opts?: any) => Writable__theme__invert;
export declare const __theme__invert: Writable__theme__invert;
export declare const invert__theme: () => void;
export declare const b__class__theme__invert: (ctx?: any, opts?: any) => import("svelte/store").Readable<string>;
export declare const __class__theme__invert: import("svelte/store").Readable<string>;
