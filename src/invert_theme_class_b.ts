import { _b } from '@ctx-core/object'
import { _class } from '@ctx-core/html'
import { derived$, Readable$ } from '@ctx-core/store'
import { invert_theme_b } from './invert_theme_b'
import type { theme_Ctx } from './theme_Ctx'
const key = 'invert_theme_class'
export const invert_theme_class_b = _b<theme_Ctx, typeof key>(key, ctx=>
	derived$(
		invert_theme_b(ctx),
		invert_theme=>
			_class({ invert_theme })))
export type $invert_theme_class_T = string
export interface invert_theme_class_T extends Readable$<$invert_theme_class_T> {}
export { invert_theme_class_b as b__class__theme__invert }
