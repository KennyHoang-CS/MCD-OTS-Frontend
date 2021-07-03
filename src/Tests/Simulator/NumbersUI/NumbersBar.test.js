import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NumbersBar from '../../../Simulator/NumbersUI/NumbersBar';
import store from '../../store';

test('NumbersBar should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <NumbersBar />
            </Provider>
        </MemoryRouter>
    );
});

test('NumbersBar should display its content', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <NumbersBar />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
    expect(getByText('9')).toBeInTheDocument();
});

