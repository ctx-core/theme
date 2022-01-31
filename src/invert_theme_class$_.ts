import { class_ } from '@ctx-core/html'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { invert_theme$_ } from './invert_theme$_.js'
const key = 'invert_theme_class$'
export const invert_theme_class$_:B<invert_theme_class$_T> = be_(key, ctx=>
	computed$(
		invert_theme$_(ctx),
		invert_theme=>
			class_({ invert_theme })))
export type invert_theme_class$_T = ReadableAtom$<string>
