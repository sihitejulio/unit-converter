import React from "react";
import Index from './page/index';
import Profile from './page/profile';
import Product from './page/product';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            page: 'Hellow React',
            fakeProduct: null
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){
        fetch("https://reqres.in/api/products/3")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
            //   isLoaded: true,
              fakeProduct: result.data
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            // this.setState({
            //   isLoaded: true,
            //   error
            // });
          });
        this.setState({page: 'This page rendered'});
    }

    handleInput(value){
        this.setState({page: value})
    }

    render(){
        console.log(this.state.fakeProduct);
        return (
            <div className="App">
                Page Name {this.state.page}
                <br/>
                <input type="text"  onKeyUp={(e)=>this.handleInput(e.target.value)}/>
              {/* <Index/> */}
              <br/>
              {this.state.fakeProduct?<Product data={this.state.fakeProduct}/>: <></>}
            </div>
        );
    }
}

export default App;