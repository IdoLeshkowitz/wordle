export const keyboardMiddleware = (store: any) => (next: any) => (action: any) => {
    const helperFunctions = {
        isKeyALetter: (key: string) => {
            return (/^[A-Z]$/.test(key))
        },
        isKeyBackspace: (key: string) => {
            return (key === "BACKSPACE")
        },
        isKeyEscape: (key: string) => {
            return (key === "ESCAPE")
        },
        isKeyEnter: (key: string) => {
            return (key === "ENTER")
        },
    }
    if (helperFunctions.isKeyALetter(action.payload)) {
        next(action);
    }

}

// create logger middleware that will work with configureStore