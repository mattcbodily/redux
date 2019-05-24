import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateList} from './../ducks/reducer';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: ''
        }
    }

    handleInput = (val) => {
        this.setState({
            item: val
        })
    }

    handleSubmit = () => {
        this.props.updateList({item: this.state.item})
        this.setState({
            item: ''
        })
    }

    render(){
        return(
            <div>
                Input Div
                <Link to='/'>List</Link>
                <input 
                    value={this.state.item}
                    onChange={(e) => this.handleInput(e.target.value)}/>
                <button onClick={this.handleSubmit}>Submit</button>    
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateList
}

export default connect(null, mapDispatchToProps)(Input);