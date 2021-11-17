import { class_ } from '@ctx-core/html'
import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { invert_theme$_b } from './invert_theme$_b.js'
import type { theme_Ctx } from './theme_Ctx.js'
const key = 'invert_theme_class$'
export const invert_theme_class$_b:B<theme_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		invert_theme$_b(ctx),
		invert_theme=>
			class_({ invert_theme })))
export type invert_theme_class_T = string
export interface invert_theme_class$_T extends Readable$<invert_theme_class_T> {}
export { invert_theme_class$_b as b__class__theme__invert }
