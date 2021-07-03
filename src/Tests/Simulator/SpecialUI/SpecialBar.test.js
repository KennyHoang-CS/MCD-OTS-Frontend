import React from 'react';
import { render, fireEvent, getAllByText, getByLabelText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import SpecialBar from '../../../Simulator/SpecialUI/SpecialBar';
import NumbersBar from '../../../Simulator/NumbersUI/NumbersBar';
import SizingBar from '../../../Simulator/SizingUI/SizingBar';


test('SpecialBar should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <SpecialBar />
            </Provider>
        </MemoryRouter>
    );
});

test('SpecialBar should display content.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <SpecialBar />
            </Provider>
        </MemoryRouter>
    );
    expect(getByText('Quantity')).toBeInTheDocument();
    expect(getByText('Sizing')).toBeInTheDocument();
});

test('Quantity should display from clicking number buttons.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <SpecialBar />
                <NumbersBar />
            </Provider>
        </MemoryRouter>
    );

    // Number button 1. 
    const number1 = getByText('1');
    // Number button 2. 
    const number2 = getByText('2');

    // Lets click on our number buttons. 
    fireEvent.click(number1);
    fireEvent.click(number2); 

    // Quantity should display 12 now. 
    expect(getByText('12')).toBeInTheDocument();

    fireEvent.click(number2); 
    // Quantity should display 122 now. 
    expect(getByText('122')).toBeInTheDocument();

});

test('Sizing should display from clicking size buttons.', () => {
    let { getByText, getAllByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <SpecialBar />
                <SizingBar />
            </Provider>
        </MemoryRouter>
    );
        
    // Get some size buttons.
    const mediumBtn = getByText('Medium');
    const largeBtn = getByText('Large');

    // Current there is only one 'M' the size button. 
    expect(getAllByText('M').length).toEqual(1);

    // Click the medium size button.
    fireEvent.click(mediumBtn);

    // 'M' should be 2 now, the sizing button and sizing state. 
    expect(getAllByText('M').length).toEqual(2);

    // Click the large size button.
    fireEvent.click(largeBtn);

    // 'M' is back to one now, since sizing state changed to L.  
    expect(getAllByText('M').length).toEqual(1);

    // 'L' should be 2 now, the sizing button and sizing state. 
    expect(getAllByText('L').length).toEqual(2);
});