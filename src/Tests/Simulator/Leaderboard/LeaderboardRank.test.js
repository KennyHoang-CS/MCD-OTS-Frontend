import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import LeaderboardRank from '../../../Simulator/Leaderboard/LeaderboardRank';


test('LeaderboardRank should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <LeaderboardRank />
            </Provider>
        </MemoryRouter>
    );
});

test('LeaderboardRank should render with props', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <LeaderboardRank id="1" username="myName" formatted_time="12:34" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('myName')).toBeInTheDocument();
    expect(getByText('12:34')).toBeInTheDocument();
});

