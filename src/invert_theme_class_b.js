import { _b } from '@ctx-core/object';
import { _class } from '@ctx-core/html';
import { derived$ } from '@ctx-core/store';
import { invert_theme_b } from './invert_theme_b';
const key = 'invert_theme_class';
export const invert_theme_class_b = _b(key, ctx => derived$(invert_theme_b(ctx), invert_theme => _class({ invert_theme })));
export { invert_theme_class_b as b__class__theme__invert };
