const localStorageKey = "portfolioList";

export const saveThemeInLocalStorage = (lightMode) =>
localStorage.setItem(localStorageKey, JSON.stringify(lightMode));

// export const getThemeFromLocalStorage = () =>

// JSON.parse(localStorage.getItem(localStorageKey));


export const getThemeFromLocalStorage = () => {
    const item = localStorage.getItem(localStorageKey);
        try {
            const parsedItem = JSON.parse(item);
            return parsedItem;
        } catch (error) {
            return false; // Returning true if parsing fails or getItem returns null/undefined
        }
};