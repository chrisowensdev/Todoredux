import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/templateActions';

class Classes extends Component {
    render() {
        return (
            <>
                <h1>Classes</h1>
                <h2>{this.props.count}</h2>
                <button onClick={() => this.props.increment(5)}>
                    Click Me
                </button>
            </>
        );
    }
}

//maps global state to a prop
//count is our prop: this.props.count
const mapStateToProps = (state) => {
    return {
        count: state.counter,
    };
};

//increment is a prop: this.props.increment
const mapDispatchToProps = (dispatch) => {
    return {
        //callback accepts param and passes it to dispatch function
        increment: (n) => dispatch(increment(n)),
    };
};

//connect takes 2 functions,
//1st: pulling down state - mapStateToProps
//2nd: for updated state = mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Classes);
