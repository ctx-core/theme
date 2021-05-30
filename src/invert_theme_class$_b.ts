import { _b } from '@ctx-core/object'
import { class_ } from '@ctx-core/html'
import { derived$, Readable$ } from '@ctx-core/store'
import { invert_theme$_b } from './invert_theme$_b'
import type { theme_Ctx } from './theme_Ctx'
const key = 'invert_theme_class$'
export const invert_theme_class$_b = _b<theme_Ctx, typeof key>(key, ctx=>
	derived$(
		invert_theme$_b(ctx),
		invert_theme=>
			class_({ invert_theme })))
export type invert_theme_class_T = string
export interface invert_theme_class$_T extends Readable$<invert_theme_class_T> {}
export { invert_theme_class$_b as b__class__theme__invert }
