import { be_, assign, B } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { theme_Ctx } from './theme_Ctx'
const key = 'invert_theme$'
export const invert_theme$_b:B<theme_Ctx, typeof key> = be_(key, ()=>{
	const invert_theme = writable(false) as invert_theme$_T
	return assign(invert_theme, {
		toggle_invert_theme,
		invert__theme: toggle_invert_theme,
	}) as invert_theme$_T
	function toggle_invert_theme() {
		invert_theme.update($invert_theme=>!$invert_theme)
	}
})
export { invert_theme$_b as b__theme__invert }
export type invert_theme_T = boolean
export interface invert_theme$_T extends Writable<invert_theme_T> {
	invert_theme:()=>void
}