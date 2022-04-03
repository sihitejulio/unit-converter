import React from "react";
class Product extends React.Component {
    
    render() {
        // const {name, color} =this.props.data;
        const {name, color} = this.props.data;
        return (
        <div>
            Name :  {name}
            <br/>
            Color :  {color}
        </div>)
    }
}

export default Product;