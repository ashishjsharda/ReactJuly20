import React, { Component } from 'react';
class Shopping extends Component {
    state = {  }
    render() { 
        return (<div >
            <h1>Shopping List for {this.props.name}</h1>
            <h1>Instagram</h1>
            <h1>Facebook</h1>
            <h1>Whatsapp</h1>
        </div>  );
    }
}
 
export default Shopping;