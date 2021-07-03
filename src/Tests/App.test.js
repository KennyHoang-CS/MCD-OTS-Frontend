import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

test('it should render without crashing', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    );
});