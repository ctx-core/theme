import { _b, assign } from '@ctx-core/object';
import { writable } from '@ctx-core/store';
const key = 'invert_theme';
export const invert_theme_b = _b(key, () => {
    const invert_theme = writable(false);
    return assign(invert_theme, {
        toggle_invert_theme,
        invert__theme: toggle_invert_theme,
    });
    function toggle_invert_theme() {
        invert_theme.update($invert_theme => !$invert_theme);
    }
});
export { invert_theme_b as b__theme__invert };
