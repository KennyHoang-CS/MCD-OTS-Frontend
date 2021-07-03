import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SizingBar from '../../../Simulator/SizingUI/SizingBar';
import store from '../../store';

test('SizingBar should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <SizingBar />
            </Provider>
        </MemoryRouter>
    );
});

test('SizingBar should display its contents', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <SizingBar />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Small')).toBeInTheDocument();
    expect(getByText('Medium')).toBeInTheDocument();
    expect(getByText('Large')).toBeInTheDocument();
});