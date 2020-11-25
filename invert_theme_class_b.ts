import { _b } from '@ctx-core/object'
import { _class } from '@ctx-core/html'
import { derived } from '@ctx-core/store'
import { invert_theme_b } from './invert_theme_b'
export const invert_theme_class_b = _b('invert_theme_class', ctx=>
	derived(
		invert_theme_b(ctx),
		theme__invert=>
			_class({ theme__invert })))
export { invert_theme_class_b as b__class__theme__invert }
