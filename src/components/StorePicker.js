import React from 'react';
import {getFunName}  from '../helpers';
import PropTypes from 'prop-types';
class StorePicker extends React.Component{
myInput = React.createRef();

goToStore= event => {
    // stop the form from submitting 
    event.preventDefault();
   
   //first grab the text from the box

   const storeName = this.myInput.current.value;
   // then we are going to transition from /to /store/:storeId
   this.props.history.push(`/store/${storeName}`)
};
    render(){
        return (
         <form className="store-selector" onSubmit={this.goToStore}>
           <h2>Please Enter a Store</h2>
           <input type="text" required placeholder="Store Name" 
               defaultValue={getFunName()} ref={this.myInput}/>
           <button type= "submit">Visit Store</button>
           </form>
        )
    }
}
StorePicker.propTypes ={
    router: PropTypes.object.isRequired
}
export default StorePicker;