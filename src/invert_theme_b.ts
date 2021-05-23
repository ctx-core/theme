import { _b, assign } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { theme_Ctx } from './theme_Ctx'
const key = 'invert_theme'
export const invert_theme_b = _b<theme_Ctx, typeof key>(key, ()=>{
	const invert_theme = writable(false) as invert_theme_T
	return assign(invert_theme, {
		toggle_invert_theme,
		invert__theme: toggle_invert_theme,
	}) as invert_theme_T
	function toggle_invert_theme() {
		invert_theme.update($invert_theme=>!$invert_theme)
	}
})
export { invert_theme_b as b__theme__invert }
export type $invert_theme_T = boolean
export interface invert_theme_T extends Writable<$invert_theme_T> {
	invert_theme:()=>void
}
