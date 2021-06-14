import { B } from '@ctx-core/object';
import { Writable } from '@ctx-core/store';
import type { theme_Ctx } from './theme_Ctx';
declare const key = "invert_theme$";
export declare const invert_theme$_b: B<theme_Ctx, typeof key>;
export { invert_theme$_b as b__theme__invert };
export declare type invert_theme_T = boolean;
export interface invert_theme$_T extends Writable<invert_theme_T> {
    invert_theme: () => void;
}
