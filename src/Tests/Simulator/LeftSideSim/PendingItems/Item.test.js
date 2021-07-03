import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import Item from '../../../../Simulator/LeftSideSim/PendingItems/Item';


test('Item should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Item />
            </Provider>
        </MemoryRouter>
    );
});

