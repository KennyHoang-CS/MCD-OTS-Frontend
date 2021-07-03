import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import Timer from '../../../../Simulator/LeftSideSim/Customers/Timer';

test('Timer should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Timer />
            </Provider>
        </MemoryRouter>
    );
});

test('Timer should display its content', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <Timer />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('00')).toBeInTheDocument();
});

