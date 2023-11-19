import { class_ } from '@ctx-core/html'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { invert_theme$_ } from '../invert_theme/index.js'
export const [
	invert_theme_class$_,
	invert_theme_class_,
] = be_computed_pair_(()=>
	class_({ invert_theme: invert_theme$_() })
).config({ id: 'invert_theme_class$_' })
export { invert_theme_class$_ as invert_theme_class__ }
