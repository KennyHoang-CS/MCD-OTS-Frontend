
// Handles validating the user inputted order and checks if their input is correct
// for that one customer. 
export function validateOrder(inputOrder, newId) {

    try {
        let id = --newId; 

        // Initial check: if input order length does not match the customer answers
        // length, then its INVALID. 
        if (inputOrder.length !== answers[id].length) {
            return false; 
        }

        let key;    // to hold the item's name like 'Big Mac' and etc.
        let countResult;    // to hold the item's quantity. 
        let drinkAlertResult = true;    // to determine if the item is a combo. 
    
        // Loop through the answers object to determine if its in the user input. 
        for (let i = 0; i < answers[id].length; i++) {
            
            key = answers[id][inputOrder[i].name];

            // Does the answer object key have that input item name?
            if (key) {

                // Is the input item quantity the same as in answers object? 
                countResult = key.count === inputOrder[i].count;
                
                // Is the drinkAlert same in input item and answers object? 
                if (key.drinkAlert) {
                    drinkAlertResult = key.drinkAlert === inputOrder[i].drinkAlert;
                }

                // Did any conditions failed? Return as false for input failure. 
                if (drinkAlertResult === false) {
                    
                    return false;
                }
                if (countResult === false) {
                    
                    return false; 
                }
                
            } else {    // if answers object key does not exist, the user input is wrong. 
                
                return false; 
            }
            
        }
    } catch (err) {

    }
    // If we didn't return false, the user input matches the answer object! 
    return true; 
}

// answers object holds the answer for every customer, which will be used to 
// compare against user input. 
const answers = [
    {
        // Customer id #1
        'S Fries': {
            name: 'S Fries',
            count: 2,
            drinkAlert: ''
        },
        'Big Mac': {
            name: 'Big Mac',
            count: 1,
            drinkAlert: ''
        },
        'Filet-o-Fish': {
            name: 'Filet-o-Fish',
            count: 1,
            drinkAlert: ''
        },
        "McChicken": {
            name: 'McChicken',
            count: 1,
            drinkAlert: ''
        },
        "McDouble": {
            name: 'McDouble',
            count: 1,
            drinkAlert: ''
        },
        length: 5
    },
    // Customer Id #2
    {
        'Saus Muffin': {
            name: 'Saus Muffin',
            count: 2,
            drinkAlert: ''
        },
        'Saus Biscuit': {
            name: 'Saus Muffin',
            count: 1,
            drinkAlert: ''
        },
        'Hashbrown': {
            name: 'Hashbrown',
            count: 3,
            drinkAlert: ''
        },
        length: 3
    },
    // Customer Id #3
    {
        'L Blue Slush': {
            name: 'L Blue Slush',
            count: 1
        },
        'M MP Smoothie': {
            name: 'M MP Smoothie',
            count: 1
        }, 
        'S Strwbry Shake': {
            name: 'S Strwbry Shake',
            count: 1
        },
        length: 3
    },
    // Customer Id #4
    {
        'Big Mac Ml-Lrg': {
            name: 'Big Mac Ml-Lrg',
            count: 1,
            drinkAlert: 'M Crml Frappe'
        },
        length: 1
    },
    // Customer Id #5
    {
        'HM Hambrg': {
            name: 'HM Hambrg',
            drinkAlert: '',
            count: 1
        },
        'Ranch Salad': {
            name: 'Ranch Salad',
            drinkAlert: '',
            count: 1 
        },
        'Saus Burrito': {
            name: 'Saus Burrito',
            drinkAlert: '',
            count: 2
        },
        'L IC Crml Machi': {
            name: 'L IC Crml Machi',
            drinkAlert: '',
            count: 1
        },
        length: 4
    },
    // Customer Id #6
    {
        'SEC McGrid Ml-Md': {
            name: 'SEC McGrid Ml-Md',
            drinkAlert: 'L Coffee',
            count: 1
        },
        'Oatmeal': {
            name: 'Oatmeal',
            drinkAlert: '',
            count: 1
        },
        'BEC Biscuit Ml-Md': {
            name: 'BEC Biscuit Ml-Md',
            drinkAlert: 'L Coke',
            count: 1
        },
        length: 3
    },
    // Customer Id #7 
    {
        'S Fries': {
            name: 'S Fries',
            drinkAlert: '',
            count: 1
        },
        'M Fries': {
            name: 'M Fries',
            drinkAlert: '',
            count: 1
        },
        'L Fries': {
            name: 'L Fries',
            drinkAlert: '',
            count: 1
        },
        'Hashbrown': {
            name: 'Hashbrown',
            drinkAlert: '',
            count: 2
        },
        length: 4
    },
    // Customer Id #8
    {
        'Big Break w/HC': {
            name: 'Big Break w/HC',
            drinkAlert: '',
            count: 1
        },
        'Milk': {
            name: 'Milk',
            count: 1
        },
        length: 2
    },
    // Customer Id #9
    {
        'Hotcakes': {
            name: 'Hotcakes',
            count: 2
        },
        'Hotcakes&Sas': {
            name: 'Hotcakes&Sas',
            count: 1
        },
        'Hashbrown': {
            name: 'Hashbrown',
            count: 2
        },
        'M Fanta Orange': {
            name: 'M Fanta Orange',
            count: 1
        },
        'S Powerade': {
            name: 'S Powerade',
            count: 1
        },
        'M IC Crml Latte': {
            name: 'M IC Crml Latte',
            count: 1
        },
        length: 6
    },
    // Customer Id #10
    {
        'Bacon QPC Ml-Lrg': {
            name: 'Bacon QPC Ml-Lrg',
            drinkAlert: 'L Sprite',
            count: 1
        },
        length: 1
    },
    // Customer Id #11
    {
        'M Mocha Frappe': {
            name: 'M Mocha Frappe',
            count: 1
        },
        'Cinn Roll': {
            name: 'Cinn Roll',
            count: 1
        },
        'Cookie': {
            name: 'Cookie',
            count: 1
        },
        length: 3
    },
    // Customer Id #12
    {
        'Cone': {
            name: 'Cone',
            count: 1
        },
        'Fudge Sundae': {
            name: 'Fudge Sundae',
            count: 1
        },
        'Oreo Mcflry': {
            name: 'Oreo Mcflry',
            count: 1
        },
        length: 3
    },
    // Customer Id #13
    {
        'QPC': {
            name: 'QPC',
            count: 1
        },
        'Spicy Crispy Ml-Md': {
            name: 'Spicy Crispy Ml-Md',
            drinkAlert: 'M SB Smoothie',
            count: 1
        },
        'McChicken': {
            name: 'McChicken',
            count: 2
        },
        'McDouble': {
            name: 'McDouble',
            count: 2
        },
        'Big Mac Ml-Lrg': {
            name: 'Big Mac Ml-Lrg',
            drinkAlert: 'L Coke',
            count: 1
        },
        length: 5
    },
    // Customer Id #14
    {
        'BEC Biscuit Ml-Md': {
            name: 'BEC Biscuit Ml-Md',
            drinkAlert: "M Sweet Tea",
            count: 1
        },
        "Saus Biscuit Ml-Md": {
            name: "Saus Biscuit Ml-Md", 
            drinkAlert: "M Diet Coke", 
            count: 1
        },
        "Hotcakes": {
            name: "Hotcakes", 
            count: 1
        },
        length: 3
    },
    // Customer Id #15
    {
        "Triple Chs": {
            name: "Triple Chs", 
            count: 1
        },
        "McChicken": {
            name: "McChicken", 
            count: 2
        },
        "M Fries": {
            name: "M Fries", 
            count: 2
        },
        "Dbl Cheese": {
            name: "Dbl Cheese", 
            count: 1
        },
        "L Coke": {
            name: "L Coke", 
            count: 1
        },
        length: 5
    },
    // Customer Id #16
    {
        "HM Hambrg": {
            name: "HM Hambrg", 
            count: 1
        },
        "HM 4 Nuggets": {
            name: "HM 4 Nuggets", 
            count: 1
        },
        "HM 6 Nuggets": {
            name: "HM 6 Nuggets", 
            count: 1
        },
        "10 Nuggets Ml-Md": {
            name: "10 Nuggets Ml-Md", 
            drinkAlert: "M IC Mocha", 
            count: 1
        },
        "Filet-o-Fish Ml-Lrg": {
            name: "Filet-o-Fish Ml-Lrg", 
            drinkAlert: "L Dr. Pepper", 
            count: 1
        },
        length: 5
    },
    // Customer Id #17
    {
        "M Fries": {
            name: "M Fries", 
            count: 2
        },
        "Ranch Salad": {
            name: "Ranch Salad", 
            count: 1
        },
        "SW Salad": {
            name: "SW Salad", 
            count: 1
        },
        "Side Salad": {
            name: "Side Salad", 
            count: 1
        },
        "M Orange Juice": {
            name: "M Orange Juice", 
            count: 1
        },
        length: 5
    },
    // Customer Id #18
    {
        "20 Nuggets": {
            name: "20 Nuggets", 
            count: 5
        },
        length: 1
    },
    // Customer Id #19
    {
        "Choc Milk": {
            name: "Choc Milk", 
            count: 1
        },
        "Apple Juice": {
            name: "Apple Juice", 
            count: 1
        },
        "2 Apple Pies": {
            name: "2 Apple Pies", 
            count: 1
        },
        "2 Strwbry Pie": {
            name: "2 Strwbry Pie", 
            count: 1
        },
        length: 4
    },
    // Customer Id #20
    {
        "McChicken": {
            name: "McChicken", 
            count: 1
        },
        "McDouble": {
            name: "McDouble", 
            count: 1
        },
        "Saus McGrid": {
            name: "Saus McGrid", 
            count: 1
        },
        "Saus Muffin": {
            name: "Saus Muffin", 
            count: 1
        },
        "Big Mac Ml-Lrg": {
            name: "Big Mac Ml-Lrg", 
            drinkAlert: "L Diet Coke", 
            count: 1
        },
        "Dlx Spicy Ml-Md": {
            name: "Dlx Spicy Ml-Md", 
            drinkAlert: "M Fanta Orange", 
            count: 1
        },
        "Crml Sundae": {
            name: "Crml Sundae", 
            count: 1
        },
        length: 7
    }
]