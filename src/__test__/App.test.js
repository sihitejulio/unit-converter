import React from 'react';
import {render, screen} from '@testing-library/react';
import {App} from '../App';
import { Provider } from 'react-redux';
import store from '../store';

test('Mini Bank App',()=>{
    render(
    <Provider store={store}>
        <App />
    </Provider>);
    const title = screen.getByText(/Logo/);
    expect(title).toBeInTheDocument();
})