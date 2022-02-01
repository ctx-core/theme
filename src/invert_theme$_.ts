import { assign, B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
export const invert_theme$_:B<invert_theme$_T> = be_('invert_theme$', ()=>{
	const invert_theme$ = atom$(false) as invert_theme$_T
	return assign(invert_theme$, {
		toggle_invert_theme,
		invert__theme: toggle_invert_theme,
	}) as invert_theme$_T
	function toggle_invert_theme() {
		invert_theme$.$ = !invert_theme$.$
	}
})
export interface invert_theme$_T extends WritableAtom$<boolean> {
	invert_theme:()=>void
}
