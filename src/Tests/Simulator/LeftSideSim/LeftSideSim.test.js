import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import LeftSideSim from '../../../Simulator/LeftSideSim/LeftSideSim';
import Leaderboard from '../../../Simulator/Leaderboard/Leaderboard';

test('LeftSideSim should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <LeftSideSim />
            </Provider>
        </MemoryRouter>
    );
});

test('LeftSideSim should display its contents', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <LeftSideSim />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Pending Customers')).toBeInTheDocument();
    expect(getByText('Leaderboard')).toBeInTheDocument();
    expect(getByText('Start Game')).toBeInTheDocument();
});
