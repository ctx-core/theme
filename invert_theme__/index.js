import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
export const invert_theme__ = be_('invert_theme__', ()=>{
	const invert_theme_ = atom_(false)
	return assign(invert_theme_, {
		toggle_invert_theme,
		invert__theme: toggle_invert_theme,
	})
	function toggle_invert_theme() {
		invert_theme_.$ = !invert_theme_.$
	}
})
export { invert_theme__ as invert_theme$_ }
