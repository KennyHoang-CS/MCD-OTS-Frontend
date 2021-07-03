import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import UtilityButton from '../../../../Simulator/SpecialUI/UtilityMenu/UtilityButton';

test('UtilityButton should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <UtilityButton />
            </Provider>
        </MemoryRouter>
    );
});

test('UtilityButton should have text associated with it.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <UtilityButton name="random text"/>
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('random text')).toBeInTheDocument();
});

