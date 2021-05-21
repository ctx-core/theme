import { _b } from '@ctx-core/object'
import { _class } from '@ctx-core/html'
import { derived$, Readable$ } from '@ctx-core/store'
import { invert_theme_b, invert_theme_Ctx } from './invert_theme_b'
const key = 'invert_theme_class'
export interface invert_theme_class_Ctx extends invert_theme_Ctx {
	invert_theme_class?:invert_theme_class_T
}
export const invert_theme_class_b = _b<invert_theme_class_Ctx, typeof key>(key, ctx=>
	derived$(
		invert_theme_b(ctx),
		invert_theme=>
			_class({ invert_theme })))
export type $invert_theme_class_T = string
export interface invert_theme_class_T extends Readable$<$invert_theme_class_T> {}
export { invert_theme_class_b as b__class__theme__invert }
