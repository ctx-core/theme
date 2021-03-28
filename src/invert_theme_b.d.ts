import { Writable } from '@ctx-core/store';
export declare const invert_theme_b: import("@ctx-core/object").Be<invert_theme_type, object>;
export { invert_theme_b as b__theme__invert };
export declare type $invert_theme_type = boolean;
export interface invert_theme_type extends Writable<$invert_theme_type> {
    invert_theme: () => void;
}
