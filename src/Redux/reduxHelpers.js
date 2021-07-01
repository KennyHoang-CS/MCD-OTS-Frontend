
// Handles the creation of a new item by using a function.
export function createItem(name, drinkAlert, count, hasCombo, id, type, comboSize) {
    return {
        name,
        drinkAlert,
        count,
        hasCombo,
        id,
        type,
        comboSize
    }
} 


// Handles name flavorings. 
export function hashBrownORFries(type, comboSize) {
    
    if (type === 'Lunch') {
        if (comboSize === 'Ml-Md') {
            return 'M Fries';
        } else {
            return 'L Fries';
        }
    }
    if (type === 'Breakfast') {
        return 'Hash Brown';
    }
}