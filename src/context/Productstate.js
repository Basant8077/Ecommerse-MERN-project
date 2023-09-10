import React from 'react'
import Productcontext from './Productcontext'
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import reducer from '../Reducer/ProductReducer';

function Productstate(props) {



    return (
        <>
            <Productcontext.Provider value={{...state}}>
                {props.children}
            </Productcontext.Provider>
        </>
    )
}

export default Productstate;
