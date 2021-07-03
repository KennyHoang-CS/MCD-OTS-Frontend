import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import Breakfast2Menu from '../../../../Simulator/FoodMenu/Menus/Breakfast2Menu';
import BreakfastMenu from '../../../../Simulator/FoodMenu/Menus/BreakfastMenu';
import LunchMenu from '../../../../Simulator/FoodMenu/Menus/LunchMenu';
import Lunch2Menu from '../../../../Simulator/FoodMenu/Menus/Lunch2Menu';
import CondimentsMenu from '../../../../Simulator/FoodMenu/Menus/CondimentsMenu';
import Dessert2Menu from '../../../../Simulator/FoodMenu/Menus/Dessert2Menu';
import DessertMenu from '../../../../Simulator/FoodMenu/Menus/DessertMenu';
import DrinksMenu from '../../../../Simulator/FoodMenu/Menus/DrinksMenu';
import HappyMealMenu from '../../../../Simulator/FoodMenu/Menus/HappyMealMenu';
import LsmMenu from '../../../../Simulator/FoodMenu/Menus/LsmMenu';
import McValueMenu from '../../../../Simulator/FoodMenu/Menus/McValueMenu';
import McCafeMenu from '../../../../Simulator/FoodMenu/Menus/McCafeMenu';
import SaladMenu from '../../../../Simulator/FoodMenu/Menus/SaladMenu';
import Drinks2Menu from '../../../../Simulator/FoodMenu/Menus/SpecialDrinksMenu';


test('Breakfast2Menu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Breakfast2Menu />
            </Provider>
        </MemoryRouter>
    );
});

test('BreakfastMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <BreakfastMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('LunchMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <LunchMenu />
            </Provider>
        </MemoryRouter>
    );
});
test('Lunch2Menu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Lunch2Menu />
            </Provider>
        </MemoryRouter>
    );
});

test('CondimentsMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <CondimentsMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('DessertMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <DessertMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('Dessert2Menu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Dessert2Menu />
            </Provider>
        </MemoryRouter>
    );
});

test('DrinksMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <DrinksMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('Drinks2Menu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Drinks2Menu />
            </Provider>
        </MemoryRouter>
    );
});

test('HappyMealMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <HappyMealMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('LsmMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <LsmMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('McValueMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <McValueMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('McCafeMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <McCafeMenu />
            </Provider>
        </MemoryRouter>
    );
});

test('SaladMenu should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <SaladMenu />
            </Provider>
        </MemoryRouter>
    );
});