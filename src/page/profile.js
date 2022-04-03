import React from "react";
class Profile extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        console.log(this.props.data);
        return (<div>Test data-{this.props.data.page}</div>)
    }
}

export default Profile;