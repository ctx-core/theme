import { be_computed_pair_ } from '@ctx-core/nanostores'
import { html_class_ } from 'ctx-core/html'
import { invert_theme$_ } from '../invert_theme/index.js'
export const [
	invert_theme_class$_,
	invert_theme_class_,
] = be_computed_pair_(
	ctx=>invert_theme$_(ctx),
	invert_theme=>html_class_({ invert_theme }),
	{ id: 'invert_theme_class$_' })
export { invert_theme_class$_ as invert_theme_class__ }
