import { html_class_ } from 'ctx-core/html'
import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { invert_theme_ } from '../invert_theme/index.js'
export const [
	invert_theme_class$_,
	invert_theme_class_,
] = id_be_memo_pair_(
	'invert_theme_class$_',
	ctx=>
		html_class_({ invert_theme: invert_theme_(ctx) }))
export { invert_theme_class$_ as invert_theme_class__ }
