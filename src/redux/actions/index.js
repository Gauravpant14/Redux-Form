export const formVal = (value) => {
    return {
        type:'ALL_DATA',
        payload: value,
    }
}

export const isValidation = () => {
    return {
        type:'IS_VALID',
       
    }
}

export default formVal