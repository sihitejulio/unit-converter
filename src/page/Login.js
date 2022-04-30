import React from "react";
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

class Login extends React.Component {
    render() {
        return (
            <div className="m-5 flex h-screen justify-center items-center flex-col">
                <label className="flex top-0">Logo</label>
               
                <Formik
                    initialValues={{
                        phone: '1',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
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

export default Login;