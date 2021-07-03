import { validateOrder } from '../../../../Simulator/LeftSideSim/Customers/customerHelpers';

test('validateOrder() should validate user inputs correctly', () => {
    let goodInput = [
        {
            name: 'S Fries',
            count: 2,
            drinkAlert: ''
        },
        {
            name: 'Big Mac',
            count: 1,
            drinkAlert: ''
        },
        {
            name: 'Filet-o-Fish',
            count: 1,
            drinkAlert: ''
        },
        {
            name: 'McChicken',
            count: 1,
            drinkAlert: ''
        },
        {
            name: 'McDouble',
            count: 1,
            drinkAlert: ''
        }
    ]

    expect(validateOrder(goodInput, 1)).toEqual(true);

    let badInput = [
        {
            name: 'S Fries',
            count: 2,
            drinkAlert: ''
        },
        {
            name: 'Big Mac',
            count: 1,
            drinkAlert: ''
        },
        {
            name: "I'm a bad input, hehehehe!",
            count: 1,
            drinkAlert: ''
        },
        {
            name: 'McChicken',
            count: 1,
            drinkAlert: ''
        },
        {
            name: 'McDouble',
            count: 1,
            drinkAlert: ''
        }
    ]

    expect(validateOrder(badInput, 1)).toEqual(false);

    // test empty user input.
    expect(validateOrder([], 1)).toEqual(false);
});