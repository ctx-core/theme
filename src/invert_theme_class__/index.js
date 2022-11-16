import { class_ } from '@ctx-core/html'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { invert_theme__ } from '../invert_theme__/index.js'
export const invert_theme_class__ = be_('invert_theme_class__', ctx=>
	computed_(invert_theme__(ctx), invert_theme=>class_({ invert_theme })))
export { invert_theme_class__ as invert_theme_class$_ }
