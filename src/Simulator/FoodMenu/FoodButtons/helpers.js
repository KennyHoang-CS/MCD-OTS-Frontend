

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

function checkComboSizeEligibility(size, type) {
    
    if (type === 'Breakfast' && size !== 'M') {
        return true;  
    }
    else if (type === 'Lunch' && 
            (size === 'XS' || size === 'S' || size === 'XL' || size === 'Sr')) {
        return true; 
    }
}

export function adjustItemName(name, sizeState, isCombo, sizeable) {
    
    let itemName; 
    if (isCombo || sizeable) {
        if (sizeable) {
            itemName = `${sizeState} ${name}`;
        } else {
            itemName = `${name}`;
        }
    } else {
        itemName = `${name}`;
    }
    
    if (sizeable && sizeState === '') {
        itemName = `M ${name}`;
    }

    return itemName;
}

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

export function checkDessertSizeEligibility(sizeState) {

    if (sizeState !== '') {
        return true;
    }
}