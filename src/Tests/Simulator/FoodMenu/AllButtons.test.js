import React from 'react';
import { render } from '@testing-library/react';
import DessertButton from '../../../Simulator/FoodMenu/FoodButtons/DessertButton';
import FoodButton from '../../../Simulator/FoodMenu/FoodButtons/FoodButton';
import DrinkButton from '../../../Simulator/FoodMenu/FoodButtons/DrinkButton';
import LsmButton from '../../../Simulator/FoodMenu/FoodButtons/LsmButton';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

test('Dessert Button should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <DessertButton />
            </Provider>
        </MemoryRouter>
    );
});

test('Dessert Button props works', () => {
    let { getByText, getByAltText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <DessertButton name="Apple Pie" image="dessert image" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Apple Pie')).toBeInTheDocument();
    expect(getByAltText('Food Pic')).toBeInTheDocument();
});

test('Food button should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <FoodButton />
            </Provider>
        </MemoryRouter>
    );
});

test('Food button props works', () => {
    let { getByText, getByAltText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <FoodButton name="Big Mac" image="random image" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Big Mac')).toBeInTheDocument();
    expect(getByAltText('Food Pic')).toBeInTheDocument();
});

test('Drink button should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <DrinkButton />
            </Provider>
        </MemoryRouter>
    );
});

test('Drink button props works', () => {
    let { getByText, getByAltText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <DrinkButton name="Coke" image="random image" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Coke')).toBeInTheDocument();
    expect(getByAltText('Drink Pic')).toBeInTheDocument();
});

test('LSM button should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <LsmButton />
            </Provider>
        </MemoryRouter>
    );
});

test('LSM button props works', () => {
    let { getByText, getByAltText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <LsmButton name="BTS Meal" image="random image" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('BTS Meal')).toBeInTheDocument();
    expect(getByAltText('Food Pic')).toBeInTheDocument();
});