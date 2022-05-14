import React from 'react';
import {render, screen,fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {App} from '../App';
import { Provider } from 'react-redux';
import store from '../store';

test('test login button',async ()=>{
    render(
    <Provider store={store}>
        <App />
    </Provider>);
    const value = screen.getByTitle('errorPhoneNumber');
    userEvent.click(screen.getByRole('button', {name: 'Login'}))
    await waitFor(() => {
      expect(value.textContent).toBe('Phone number tidak boleh kosong')
    })
    
})