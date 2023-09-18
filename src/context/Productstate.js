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
        products: [],
        featureproducts: [],
        Singledata:{},
        singleloading:false
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const API = "https://api.pujakaitem.com/api/products";

    const getproducts = async (url) => {

        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });

        } catch (error) {

            dispatch({ type: "API_ERROR" });
        }
    };

    const getSingleProduct = async (url) => {

        dispatch({ type: "SINGLE_LOADING" });
        
        try {
            const res = await axios.get(url);
            const Singledata = await res.data;

            dispatch({type:"SINGLE_DATA" , payload: Singledata });

        } catch (error) {
                dispatch({type:"SINGLE_ERROR"});
        }
    }

    useEffect(() => {
        getproducts(API);
    }, [])

    return (
        <>
            <Productcontext.Provider value={{ ...state , getSingleProduct}}>
                {props.children}
            </Productcontext.Provider>
        </>
    )
}

export default Productstate;
