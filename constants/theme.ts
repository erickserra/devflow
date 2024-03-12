export const THEMES = {
    light: 'light',
    dark: 'dark',
    system: 'system',
} as const;

export const displayThemes = [
    {
        value: THEMES.light,
        label: 'Light',
        icon: '/assets/icons/sun.svg'
    },
    {
        value: THEMES.dark,
        label: 'Dark',
        icon: '/assets/icons/moon.svg'
    },
    {
        value: THEMES.system,
        label: 'System',
        icon: '/assets/icons/computer.svg'
    },
]

export const ThemeLocalStorageKey = 'theme';

export type Themes = typeof THEMES[keyof typeof THEMES];