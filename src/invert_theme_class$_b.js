import { be_ } from '@ctx-core/object';
import { class_ } from '@ctx-core/html';
import { derived$ } from '@ctx-core/store';
import { invert_theme$_b } from './invert_theme$_b';
const key = 'invert_theme_class$';
export const invert_theme_class$_b = be_(key, ctx => derived$(invert_theme$_b(ctx), invert_theme => class_({ invert_theme })));
export { invert_theme_class$_b as b__class__theme__invert };
//# sourceMappingURL=src/invert_theme_class$_b.js.map