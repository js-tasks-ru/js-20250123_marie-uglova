/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const arr = [];
    fields.forEach(el => {
        Object.entries(obj).forEach(i => {
            if(i[0] === el) {
                arr.push(i);
            }
        })
    })
    return Object.fromEntries(arr);
};
