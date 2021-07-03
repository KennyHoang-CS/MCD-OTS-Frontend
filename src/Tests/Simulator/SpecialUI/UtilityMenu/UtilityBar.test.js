import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UtilityBar } from '../../../../Simulator/SpecialUI/UtilityMenu/UtilityBar';
import store from '../../../store';


test('UtilityBar should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <UtilityBar />
            </Provider>
        </MemoryRouter>
    );
});

test('UtilityBar should display content', () => {
    let { getByText } = render(
        <MemoryRouter>
            <Provider store={store}>
                <UtilityBar />
            </Provider>
        </MemoryRouter>
    );

    expect(getByText('Clear Choice')).toBeInTheDocument();
    expect(getByText('Void Item')).toBeInTheDocument();
});