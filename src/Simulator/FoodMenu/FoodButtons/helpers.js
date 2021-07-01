
// Function to check if item meet certain requirements. 
export function checkItemEligibility(isCombo, notComboAble, sizeState, sizeable, type) {
    if (type === 'Breakfast') {
        if (sizeState !== '' && notComboAble) {
            return true;
        }
        if ((isCombo && sizeState !== '') && checkComboSizeEligibility(sizeState, type)) {
            return true; 
        }
    } else if (type === 'Lunch') {
        
        // Is it a lunch combo item with the appropiate size? 
        if (isCombo && sizeState !== '') {
            if (checkComboSizeEligibility(sizeState, type)) {
                return true;
            }
        }
        
        // Did they add a size to a non-combo-able lunch item? 
        if (sizeable) {
            return false; 
        }
        if (sizeState !== '' && notComboAble) {
            return true;
        }
    }
}

// Function to check if the item meets combo requirements. 
function checkComboSizeEligibility(size, type) {
    
    // Eligible breakfast items combo only have the medium size. 
    if (type === 'Breakfast' && size !== 'M') {
        return true;  
    }   // Eligible lunch items combo only have medium and large size.
    else if (type === 'Lunch' && 
            (size === 'XS' || size === 'S' || size === 'XL' || size === 'Sr')) {
        return true; 
    }
}

// Function to give certain items' names flavorings. 
export function adjustItemName(name, sizeState, isCombo, sizeable) {
    
    let itemName; 
    
    // Some items like 'milk' do not have any sizes and only come in one size
    // while other items like french fries do have sizes.
    // Adjust combo item names.
    if (isCombo || sizeable) {
        if (sizeable) {
            itemName = `${sizeState} ${name}`;
        } else {
            itemName = `${name}`;
        }
    } else {
        itemName = `${name}`;
    }
    
    // Give items that have sizes like french fries the default size of medium
    // if they do not have any sizing selected. 
    if (sizeable && sizeState === '') {
        itemName = `M ${name}`;
    }

    return itemName;
}

// Function to adjust the combo items' name. 
export function adjustComboName(sizeState, type) {
    
    let newSizeState; 
    if (sizeState === 'L' && type !== 'Breakfast') {
        newSizeState = 'Ml-Lrg';
    }
    if (sizeState === 'M' || (sizeState && type === 'Breakfast')) {
        newSizeState = 'Ml-Md';
    } 

    return newSizeState;
}

// Function to check if dessert size meets requirements. 
export function checkDessertSizeEligibility(sizeState) {

    if (sizeState !== '') {
        return true;
    }
}