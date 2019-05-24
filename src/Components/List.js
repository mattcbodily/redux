import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const List = (props) => {
    const mappedList = props.list.map((item, i) => {
        return (
            <li key={i}>{item}</li>
        )
    })
    return (
        <div>
            List Component
            <Link to='/input'>Input</Link>
            <ul>
                {mappedList}
            </ul>
        </div>
    )
}

const mapStateToProps = reduxState => {
    const {list} = reduxState
    return {
        list
    }
}

export default connect(mapStateToProps, null)(List);