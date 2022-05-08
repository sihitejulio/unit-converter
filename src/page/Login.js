import React from "react";
import ReactDOM from 'react-dom';
import {userApi} from '../services/user.service';
import { connect } from 'react-redux';
import { UserActionCreators } from '../action/user.action';
import { Formik, Field, Form } from 'formik';

import {
    Navigate,
    useNavigate,
} from 'react-router-dom';
class Login extends React.Component {
    constructor(props){
        super(props);
    }
  
    async doLogin(mobileNumber){
        try {
            const response = await userApi.login(mobileNumber);
            localStorage.setItem('mini-bank-token',response.data.token);
            this.props.dispatch(UserActionCreators.login({type: 'LOGIN', token: response.data.token}));
        } catch (error) {   
            console.log(error);
        }
    }
    render() {
        return (
            <div className="m-5 flex h-screen justify-center items-center flex-col">
                <label className="flex top-0">Logo</label>
                <Formik
                    initialValues={{
                        phone: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        if(values.phone!=''){
                            await this.doLogin(values.phone);
                            return <Navigate to="/OtpVerify" />;
                        }else{
                            alert('Phone number tidak boleh kosong');
                        }
                    }}
                >
                    <Form className="flex flex-col w-full">
                        <label htmlFor="phone" className="text-sm">Phone Number</label>
                        <Field className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="phone" name="phone" placeholder="085360867334" />
                        <button className="h-12 px-6 font-semibold text-sm rounded-md bg-gray-400 text-white" type="submit">Login</button>
                    </Form>
                </Formik>
                
               
          </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return state;
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login }; 