import React from 'react'
import Productcontext from './Productcontext'
import axios from 'axios';
import { useEffect } from 'react';
import { useReducer } from 'react';
import reducer from "../reducers/Productreducer";

function Productstate(props) {
    const initialState = {
        isLoading: false,
        isError: false,
        products:[],
        featureproducts:[]
    };
    const [state , dispatch] = useReducer(reducer , initialState);

    const API = "https://api.pujakaitem.com/api/products";

    const getproducts = async (url) => {

        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type: "SET_API_DATA", payload: products});

        } catch (error) {

            dispatch({type:"API_ERROR"});
        }
    };

    useEffect(() => {
        getproducts(API);
    }, [])

    return (
        <>
            <Productcontext.Provider value={{...state}}>
                {props.children}
            </Productcontext.Provider>
        </>
    )
}

export default Productstate;
