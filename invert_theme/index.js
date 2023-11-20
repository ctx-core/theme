import { be_atom_triple_ } from '@ctx-core/nanostores'
export const [
	invert_theme$_,
	invert_theme_,
	invert_theme__set,
] = be_atom_triple_(()=>
	false,
{ id: 'invert_theme' })
export { invert_theme$_ as invert_theme__ }
export function invert_theme__toggle(ctx) {
	invert_theme__set(ctx, !invert_theme_(ctx))
}
