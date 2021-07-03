import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Simulator from '../../Simulator/Simulator';

test('Simulator should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Simulator />
            </Provider>
        </MemoryRouter>
    );
});

test('Simulator should display the content from its children components.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <Simulator />
            </Provider>
        </MemoryRouter>
    );
    expect(getByText('Pending Customers')).toBeInTheDocument();
    expect(getByText('Leaderboard')).toBeInTheDocument();
    expect(getByText('Start Game')).toBeInTheDocument();

    expect(getByText('Quantity')).toBeInTheDocument();
    expect(getByText('Sizing')).toBeInTheDocument();
    expect(getByText('Lunch')).toBeInTheDocument();
});