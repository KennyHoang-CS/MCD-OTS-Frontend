import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import Customer from '../../../../Simulator/LeftSideSim/Customers/Customer';

test('Customer should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Customer />
            </Provider>
        </MemoryRouter>
    );
});

test('Customer should render with prop', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <Customer id="1" image="myPicture" order="myOrder" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('myOrder')).toBeInTheDocument();
});