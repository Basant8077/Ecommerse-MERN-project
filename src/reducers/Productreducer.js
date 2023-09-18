const Productreducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,

            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((items) => {
                return items.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureproducts: featureData
            }
        case "SINGLE_LOADING":
            return {
                ...state,
                singleloading: true,
            }
        case "SINGLE_DATA":
            return {
                ...state,
                singleloading: false,
                Singledata: action.payload
            }
        case "SINGLE_ERROR":
            return {
                ...state,
                singleloading: false,
                isError:true
            }
        default:
            return state;
    }
}
export default Productreducer;