import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import NumberCircleButton from '../../../Simulator/NumbersUI/NumberCircleButton';

test('NumbersButton should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <NumberCircleButton />
            </Provider>
        </MemoryRouter>
    );
});

test('NumbersButton should render with any number input.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <NumberCircleButton number="999"/>
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('999')).toBeInTheDocument();
});