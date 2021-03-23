const validationReducer = (state = false, action) => {
    switch(action.type){
        case 'IS_VALID' :
            return !state
            default :
            return state
    }
}

export default validationReducer