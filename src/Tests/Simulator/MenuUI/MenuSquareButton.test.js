import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MenuSquareButton from '../../../Simulator/MenuUI/MenuSquareButton';
import MenuSquareButton2 from '../../../Simulator/MenuUI/MenuSquareButton2';


test('MenuSquareButton should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuSquareButton />
            </Provider>
        </MemoryRouter>
    );
});

test('MenuSquareButton2 should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuSquareButton2 />
            </Provider>
        </MemoryRouter>
    );
});


test('MenuSquareButton should render with any given name', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuSquareButton name1="random-text" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('random-text')).toBeInTheDocument();
});


test('MenuSquareButton2 should render with any two names', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <MenuSquareButton2 name1="random-text" name2="random-text-2" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('random-text')).toBeInTheDocument();
    expect(getByText('random-text-2')).toBeInTheDocument();
});
