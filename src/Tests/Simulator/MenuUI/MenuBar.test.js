import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MenuBar from '../../../Simulator/MenuUI/MenuBar';


test('MenuBar should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuBar />
            </Provider>
        </MemoryRouter>
    );
});


test('MenuBar should display its content', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuBar />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Breakfast')).toBeInTheDocument();
    expect(getByText('Lunch')).toBeInTheDocument();
    expect(getByText('Drinks')).toBeInTheDocument();
    expect(getByText('Happy Meal')).toBeInTheDocument();
});