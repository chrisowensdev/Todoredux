import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../actions/templateActions';

import { DivSC } from './Styles';

const Hooks = () => {
    //getting global state
    const count = useSelector((state) => state.counter);

    // receive dispatch function
    const dispatch = useDispatch();

    return (
        <>
            <h1>Hooks</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment(4))}>Click Me</button>
            <DivSC bgc='red'>This is a styled component</DivSC>
        </>
    );
};

export default Hooks;
