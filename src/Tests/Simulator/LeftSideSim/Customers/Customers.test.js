import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import Customers from '../../../../Simulator/LeftSideSim/Customers/Customers';


test('Customers should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Customers />
            </Provider>
        </MemoryRouter>
    );
});

test('Customers should display its content', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <Customers />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Start Game')).toBeInTheDocument();
});

