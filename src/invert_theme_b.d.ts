import { Writable } from '@ctx-core/store';
import type { theme_Ctx } from './theme_Ctx';
export declare const invert_theme_b: import("@ctx-core/object").Be<theme_Ctx, "invert_theme", invert_theme_T>;
export { invert_theme_b as b__theme__invert };
export declare type $invert_theme_T = boolean;
export interface invert_theme_T extends Writable<$invert_theme_T> {
    invert_theme: () => void;
}
