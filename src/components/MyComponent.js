// can use : class component or function component
import React from 'react';

class MyComponent extends React.Component{
    state = {
        name : 'Van Phu Tin',
        address : 'Tin FullStack',
        age : 21
    }
    handleClick = (event) => { //dùng arowFunction để fix lỗi 
        console.log('click me my button');

        //merge state => react class
        this.setState({
            name : 'Tin Devoloper',
            age : Math.floor((Math.random() * 100) + 1)
        })

           
        
    }
    handOnMouseOver(event){
        console.log(event);
    }
    //JSX 
    render(){
        return(
            <div>
                My name is {this.state.name} and I {this.state.age} old
                <button onClick={this.handleClick}>click me</button>
                <button onMouseOver={this.handOnMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;