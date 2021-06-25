
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

export function hashBrownORFries(type, comboSize) {
    
    console.log('hashBrownORFries', type)

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