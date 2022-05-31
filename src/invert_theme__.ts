import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { assign, B, be_ } from '@ctx-core/object'
export const invert_theme__:B<invert_theme__T> = be_('invert_theme__', ()=>{
	const invert_theme_ = atom_(false) as invert_theme__T
	return assign(invert_theme_, {
		toggle_invert_theme,
		invert__theme: toggle_invert_theme,
	}) as invert_theme__T
	function toggle_invert_theme() {
		invert_theme_.$ = !invert_theme_.$
	}
})
export interface invert_theme__T extends WritableAtom_<boolean> {
	invert_theme:()=>void
}
export { invert_theme__ as invert_theme$_ }
