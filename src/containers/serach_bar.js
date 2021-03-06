import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
        // hacemos override del metodo onInputChange
        this.onInputOnChange = this.onInputOnChange.bind(this);
        // hacemos override del metodo onFormSubmit
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputOnChange(e){
        //console.log(e.target.value);
        this.setState({term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit } className="input-group">
                <input 
                     placeholder="Search your city Weather ..."
                     className="form-control"
                     value={this.state.term}
                     onChange={this.onInputOnChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Serach</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);