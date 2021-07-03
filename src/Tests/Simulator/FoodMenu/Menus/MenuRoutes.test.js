import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import MenuRoutes from '../../../../Simulator/FoodMenu/MenuRoutes/MenuRoutes';
import Routes from '../../../../Routes/Routes';

test('MenuRoutes should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuRoutes />
            </Provider>
        </MemoryRouter>
    );

});

test('MenuRoutes should display its content', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuRoutes />
            </Provider>
        </MemoryRouter>
    );

    // The sizing bar. 
    expect(getByText('X-Small')).toBeInTheDocument();
    expect(getByText('Small')).toBeInTheDocument();
    expect(getByText('Medium')).toBeInTheDocument();
    expect(getByText('Large')).toBeInTheDocument();
    expect(getByText('X-Large')).toBeInTheDocument();
    expect(getByText('Senior')).toBeInTheDocument();
    
    // The utility bar. 
    expect(getByText('Clear Choice')).toBeInTheDocument();
    expect(getByText('Void Item')).toBeInTheDocument();
});

test('Menus should be able to switch around', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <Routes />
            </Provider>
        </MemoryRouter>
    );

    // Breakfast 1
    const BreakfastBtn = getByText('Breakfast');
    fireEvent.click(BreakfastBtn);
    expect(BreakfastBtn).toHaveClass('Subname-1 active');

    // Breakfast 2
    const Breakfast2Btn = getByText('Breakfast-2');
    fireEvent.click(Breakfast2Btn);
    expect(Breakfast2Btn).toHaveClass('Subname-2 active');

    // Lunch 1
    const LunchBtn = getByText('Lunch');
    fireEvent.click(LunchBtn);
    expect(LunchBtn).toHaveClass('Subname-1 active');

    // Lunch 2
    const Lunch2Btn = getByText('Lunch-2');
    fireEvent.click(Lunch2Btn);
    expect(Lunch2Btn).toHaveClass('Subname-2 active');

    // McValue
    let menuBtn = getByText('McValue');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('Subname-1 active');

    // Drinks
    menuBtn = getByText('Drinks');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('active');

    // Salad 
    menuBtn = getByText('Salad');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('Subname-2 active');

    // McCafe
    menuBtn = getByText('McCafe');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('active');

    // Dessert
    menuBtn = getByText('Dessert');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('Subname-1 active');

    // Dessert 2
    menuBtn = getByText('Dessert-2');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('Subname-2 active');

    // Happy Meal
    menuBtn = getByText('Happy Meal');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('active');

    // LSM
    menuBtn = getByText('LSM');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('active');

    // Condiments
    menuBtn = getByText('Condiments');
    fireEvent.click(menuBtn);
    expect(menuBtn).toHaveClass('active');

    // With all the switching around, sizing bar and utility bar should still remain.
    expect(getByText('X-Small')).toBeInTheDocument();
    expect(getByText('Small')).toBeInTheDocument();
    expect(getByText('Clear Choice')).toBeInTheDocument();
    expect(getByText('Void Item')).toBeInTheDocument();
});