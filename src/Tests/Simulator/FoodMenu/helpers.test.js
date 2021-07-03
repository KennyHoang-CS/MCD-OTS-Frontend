import { checkItemEligibility, 
    checkDessertSizeEligibility,
    adjustComboName,
    adjustItemName } 
from '../../../Simulator/FoodMenu/FoodButtons/helpers';

test('checkItemEligibility() works', () => {

    let itemResult = checkItemEligibility(true, false, 'medium', false, 'Breakfast');
    expect(itemResult).toBe(true);

    itemResult = checkItemEligibility(false, false, 'medium', false, 'Breakfast');
    expect(itemResult).toBe(undefined);

    itemResult = checkItemEligibility(true, false, 'medium', true, 'Lunch');
    expect(itemResult).toBe(false);

});

test('checkDessertSizeEligibility() works', () => {

    let dessertResult = checkDessertSizeEligibility('M');
    expect(dessertResult).toBe(true);
    
    dessertResult = checkDessertSizeEligibility('');
    expect(dessertResult).toBe(false);
});

test('adjustComboName() works', () => {

    let comboNameResult = adjustComboName('L', 'Lunch');
    expect(comboNameResult).toBe('Ml-Lrg');

    comboNameResult = adjustComboName('M', 'Lunch');
    expect(comboNameResult).toBe('Ml-Md');

    comboNameResult = adjustComboName('M', 'Breakfast');
    expect(comboNameResult).toBe('Ml-Md');

    comboNameResult = adjustComboName('S', 'Lunch');
    expect(comboNameResult).toBe(undefined);

});

test('adjustItemName() works', () => {

    let itemNameResult = adjustItemName('Fries', '', false, true);
    expect(itemNameResult).toBe('M Fries');

    itemNameResult = adjustItemName('Fries', 'L', false, true);
    expect(itemNameResult).toBe('L Fries');

    itemNameResult = adjustItemName('Milk', '', false, false);
    expect(itemNameResult).toBe('Milk');
});

