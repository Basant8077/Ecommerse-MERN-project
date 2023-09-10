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
            }
        case "SET_API_DATA":
            const featureData = action.payload.filter((items)=>{
                return  items.featured===true;
            })
            return{
                ...state,
                isLoading:false,
                products: action.payload,
                featureproducts:featureData
            }
        default:
            return state;
    }
}
export default Productreducer;