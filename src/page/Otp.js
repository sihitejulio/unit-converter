import React from "react";
import OtpInput from 'react-otp-input';

class OtpVer extends React.Component {
    state = { otp: '' };
    handleChange = otp => this.setState({ otp });

    render() {
        return (
            <div className="m-5 flex h-screen justify-center items-center flex-col">
                <label className="mb-10">Please Input Otp</label>
                <OtpInput
                    value={this.state.otp}
                    onChange={this.handleChange}
                    numInputs={6}
                    separator={<span>-</span>}
                    inputStyle="otp-width bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button className="h-12 w-full mt-5 px-6 font-semibold text-sm rounded-md bg-gray-400 text-white" type="submit">SUBMIT</button>
          </div>
        )
    }
}

export default OtpVer;