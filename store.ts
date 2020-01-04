import { writable, derived, Writable } from 'svelte/store'
// @ts-ignore
import { subscribe__debug } from '@ctx-core/store'
import { _b, assign } from '@ctx-core/object'
import { _class } from '@ctx-core/html'
import { not } from '@ctx-core/function'
export interface Writable__theme__invert extends Writable<boolean> {
	invert__theme:()=>void
}
export const b__theme__invert = _b<Writable__theme__invert>('__theme__invert', ()=>{
	const __theme__invert = writable(false)
	return assign(__theme__invert, {
		invert__theme,
	})
	function invert__theme() {
		__theme__invert.update(not)
	}
})
export const __theme__invert = b__theme__invert()
export const {
	invert__theme,
} = __theme__invert
export const b__class__theme__invert = _b('__class__theme__invert', ctx=>
	derived(
		b__theme__invert(ctx),
		theme__invert=>
			_class({ theme__invert })))
