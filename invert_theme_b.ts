import { _b, assign } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const invert_theme_b = _b<invert_theme_type>('invert_theme', ()=>{
	const invert_theme = writable(false) as invert_theme_type
	return assign(invert_theme, {
		toggle_invert_theme,
		invert__theme: toggle_invert_theme,
	})
	function toggle_invert_theme() {
		invert_theme.update($invert_theme=>!$invert_theme)
	}
})
export { invert_theme_b as b__theme__invert }
export type $type__theme__invert = boolean
export interface invert_theme_type extends Writable<$type__theme__invert> {
	invert_theme:()=>void
}
export type { invert_theme_type as type__theme__invert }
