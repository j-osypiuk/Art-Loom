export const Colors = Object.freeze({
    SECONDARY: "--clr-secondary",
    BG: "--clr-bg",
    TERTIARY: "--clr-tertiary",
    GRAY_200: "--clr-gray-200",
    GRAY_300: "--clr-gray-300",
    GRAY_400: "--clr-gray-400",
    GREEN_DARK: "--clr-green-dark",
    GREEN: "--clr-green",
    GREEN_LIGHT: "--clr-green-light",
    RED_DARK: "--clr-red-dark",
    RED: "--clr-red",
    RED_LIGHT: "--clr-red-light",
    BLUE_DARK: "--clr-blue-dark",
    BLUE: "--clr-blue",
    BLUE_LIGHT: "--clr-blue-light",
    YELLOW_DARK: "--clr-yellow-dark",
    YELLOW: "--clr-yellow",
    YELLOW_LIGHT: "--clr-yellow-light",
    PURPLE_DARK: "--clr-purple-dark",
    PURPLE: "--clr-purple",
    PURPLE_LIGHT: "--clr-purple-light",
})

export const getRandomDarkColor = () => {
    const darkKeys = Object.keys(Colors).filter(key => key.includes("DARK"));
    return Colors[darkKeys[Math.floor(Math.random() * darkKeys.length)]];
}

