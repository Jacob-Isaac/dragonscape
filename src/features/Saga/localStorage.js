const localStorageKey = "data";

export const saveThemeInLocalStorage = (lightMode) =>
localStorage.setItem(localStorageKey, JSON.stringify(lightMode));

// export const getThemeFromLocalStorage = () =>

// JSON.parse(localStorage.getItem(localStorageKey));


export const getThemeFromLocalStorage = () => {
    const item = localStorage.getItem(localStorageKey);
        try {
            const parsedItem = JSON.parse(item);
            if (typeof parsedItem === 'boolean') {
                return parsedItem;
            } else {
            return true; // Returning true if parsing fails or getItem returns null/undefined
        }
    }
    catch (error) {
        return true; // Returning true if parsing fails or getItem returns null/undefined
    }
};