import { html_class_ } from 'ctx-core/html'
import { be_memo_pair_ } from 'ctx-core/rmemo'
import { invert_theme_ } from '../invert_theme/index.js'
export const [
	invert_theme_class$_,
	invert_theme_class_,
] = be_memo_pair_(
	ctx=>
		html_class_({ invert_theme: invert_theme_(ctx) }),
	{ id: 'invert_theme_class$_' })
export { invert_theme_class$_ as invert_theme_class__ }
