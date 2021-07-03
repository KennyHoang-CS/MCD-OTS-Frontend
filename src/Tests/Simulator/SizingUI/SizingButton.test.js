import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import SizingButton from '../../../Simulator/SizingUI/SizingButton';

test('SizingButton should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <SizingButton />
            </Provider>
        </MemoryRouter>
    );
});

test('SizingButton should display with any text.', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <SizingButton abbreviation="RS" name="random-size" />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('random-size')).toBeInTheDocument();
    expect(getByText('RS')).toBeInTheDocument();
});
