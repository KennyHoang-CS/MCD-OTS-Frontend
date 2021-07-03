import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import UserIcon from '../../../Simulator/UserUI/UserIcon';
import store from '../../store';


test('UserIcon should render without crashing.', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <UserIcon />
            </Provider>
        </MemoryRouter>
    );
});
