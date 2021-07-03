import React from 'react';
import { render } from '@testing-library/react';
import CentralSim from '../../../Simulator/CentralSim/CentralSim';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

test('CentralSim should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <CentralSim />
            </Provider>
        </MemoryRouter>
    );
});