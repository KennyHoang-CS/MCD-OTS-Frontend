import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Routes from '../../Routes/Routes';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

test('Routes should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Routes />
            </Provider>
        </MemoryRouter>
    );
});

test('Routes should be able to go to HOME PAGE and show content from there.', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </MemoryRouter>
    );

    const leaderboard = getByText('Leaderboard');
    expect(leaderboard).toHaveClass('Leaderboard-Btn');
    expect(leaderboard).toBeInTheDocument();

    // Do we have content from home page? 
    expect(getByText('Pending Customers')).toBeInTheDocument();
    expect(getByText('Start Game')).toBeInTheDocument();
    expect(getByText('https://www.linkedin.com/in/kennyhoang-cs/')).toBeInTheDocument();
    expect(getByText('Quantity')).toBeInTheDocument();
    expect(getByText('Sizing')).toBeInTheDocument();
    expect(getByText('Breakfast')).toBeInTheDocument();
    expect(getByText('McValue')).toBeInTheDocument();
    expect(getByText('Dessert')).toBeInTheDocument();
    expect(getByText('Condiments')).toBeInTheDocument();
    expect(getByText('Clear Choice')).toBeInTheDocument();
    expect(getByText('Void Item')).toBeInTheDocument();

    // While on home page, by clicking the leaderboard button, does it redirect
    // to the leaderboards? 
    fireEvent.click(getByText('Leaderboard'));
    expect(leaderboard).not.toBeInTheDocument();
});

test('Routes should be able to go to LEADERBOARD and show content from there.', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/leaderboard']}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </MemoryRouter>
    );
    expect(getByText('McDonalds OTS Leaderboards')).toBeInTheDocument();
    expect(getByText('Loading ...')).toBeInTheDocument();
});
