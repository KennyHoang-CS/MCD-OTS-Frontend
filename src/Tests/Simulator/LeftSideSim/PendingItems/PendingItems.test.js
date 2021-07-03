import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import PendingItems from '../../../../Simulator/LeftSideSim/PendingItems/PendingItems';


test('PendingItems should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <PendingItems />
            </Provider>
        </MemoryRouter>
    );
});

test('PendingItems should display its content', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <PendingItems />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Pending Customers')).toBeInTheDocument();
});