import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserBar from '../../../Simulator/UserUI/UserBar';
import store from '../../store';


test('UserBar should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <UserBar />
            </Provider>
        </MemoryRouter>
    );
});

test('UserBar should display content.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <UserBar />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('https://www.linkedin.com/in/kennyhoang-cs/')).toBeInTheDocument();
    expect(getByText('POS 27')).toBeInTheDocument();
    expect(getByText('FC')).toBeInTheDocument();
    expect(getByText('Open')).toBeInTheDocument();
});