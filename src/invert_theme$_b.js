import { be_, assign } from '@ctx-core/object';
import { writable } from '@ctx-core/store';
const key = 'invert_theme$';
export const invert_theme$_b = be_(key, () => {
    const invert_theme = writable(false);
    return assign(invert_theme, {
        toggle_invert_theme,
        invert__theme: toggle_invert_theme,
    });
    function toggle_invert_theme() {
        invert_theme.update($invert_theme => !$invert_theme);
    }
});
export { invert_theme$_b as b__theme__invert };
//# sourceMappingURL=src/invert_theme$_b.js.map