// deep clone an array or object
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
// get size of element safely
export const size = (element) => {
    if (element) {
        if (Array.isArray(element)) {
            return element.length;
        } else {
            return Object.keys(element).length;
        }
    } else {
        return 0;
    }
};
