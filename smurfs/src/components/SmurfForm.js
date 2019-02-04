import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor() {
      super();
      this.state = {
        name: '',
        age: '',
        height: '',
      }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRegisterSmurf = () => {
        const newSmurf = this.state;
        this.props.addSmurf(newSmurf);
        this.setState({ 
            name: '', 
            age: '', 
            height: '' 
        })
    }



    render() {
        return (
            <div>
                <h2>ADD A NEW SMURF:</h2>
                <form>
                    <input 
                    name='name' 
                    value={this.state.name} 
                    onChange={this.handleInputChange} 
                    placeholder='ADD NAME...' />

                    <input 
                    name='age' 
                    value={this.state.age} 
                    onChange={this.handleInputChange} 
                    placeholder='ADD AGE...' />
                    
                    <input 
                    name='height' 
                    value={this.state.height} 
                    onChange={this.handleInputChange} 
                    placeholder='ADD HEIGHT...' />

                    <button onClick={this.handleRegisterSmurf}>ADD SMURF</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addSmurf })(SmurfForm);