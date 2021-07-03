import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import SpecialButton from '../../../Simulator/SpecialUI/SpecialButton';


test('SpecialButton should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <SpecialButton />
            </Provider>
        </MemoryRouter>
    );
});

test('SpecialButton SIZING and QUANTITY should render.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <SpecialButton name="Sizing" />
                <SpecialButton name="Quantity" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Sizing')).toBeInTheDocument();
    expect(getByText('Quantity')).toBeInTheDocument();
});

