import { class_ } from '@ctx-core/html'
import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { invert_theme__ } from './invert_theme__.js'
export const invert_theme_class__:B<ReadableAtom_<string>> = be_('invert_theme_class__', ctx=>
	computed_(
		invert_theme__(ctx),
		invert_theme=>
			class_({ invert_theme })))
export { invert_theme_class__ as invert_theme_class$_ }
