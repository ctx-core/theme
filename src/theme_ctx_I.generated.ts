import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { invert_theme_T } from './invert_theme_b'
import { invert_theme_b } from './invert_theme_b'
import type { invert_theme_class_T } from './invert_theme_class_b'
import { invert_theme_class_b } from './invert_theme_class_b'
export interface theme_ctx_I {
	invert_theme?:invert_theme_T
	invert_theme_class?:invert_theme_class_T
	theme_b_h?:theme_b_h_T
}
export interface theme_b_h_T {
	get invert_theme():invert_theme_T
	get invert_theme_class():invert_theme_class_T
}
export function theme_b_h_b(ctx:theme_ctx_I):B<theme_ctx_I, 'theme_b_h'> {
	return _b('theme_b_h', ()=>{
		return {
			get invert_theme() { return invert_theme_b(ctx) },
			get invert_theme_class() { return invert_theme_class_b(ctx) }
		}
	})
}