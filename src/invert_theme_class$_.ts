import { class_ } from '@ctx-core/html'
import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { invert_theme$_ } from './invert_theme$_.js'
export const invert_theme_class$_:B<invert_theme_class$_T> = be_('invert_theme_class$', ctx=>
	computed_(
		invert_theme$_(ctx),
		invert_theme=>
			class_({ invert_theme })))
export type invert_theme_class$_T = ReadableAtom_<string>
