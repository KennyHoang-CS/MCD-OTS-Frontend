import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Leaderboard from '../../../Simulator/Leaderboard/Leaderboard';


test('Leaderboard should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Leaderboard />
            </Provider>
        </MemoryRouter>
    );
});

test('Leaderboard should display its contents', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <Leaderboard />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Go Back')).toBeInTheDocument();
    expect(getByText('McDonalds OTS Leaderboards')).toBeInTheDocument();
    expect(getByText('Loading ...')).toBeInTheDocument();
});
