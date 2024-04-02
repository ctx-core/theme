import { id_be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	invert_theme$_,
	invert_theme_,
	invert_theme__set,
] = id_be_sig_triple_(
	'invert_theme',
	()=>false)
export { invert_theme$_ as invert_theme__ }
export function invert_theme__toggle(ctx) {
	invert_theme__set(ctx, !invert_theme_(ctx))
}
