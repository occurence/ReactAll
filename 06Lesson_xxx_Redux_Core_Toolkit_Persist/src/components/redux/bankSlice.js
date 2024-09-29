const balanceInitialState = {
    value: 50,
}

export const balanceReducer = (state = balanceInitialState, action) => {
    switch(action.type){
        case 'balance/withdraw':
            return{
                ...state,
                value: state.value - action.payload
            }
        case 'balance/deposit':
            return{
                ...state,
                value: state.value + action.payload
            }
        default:
            return{
                state
            }
    }
}

export const withdraw = value => {
    return{
        type: 'balance/withdraw',
        payload: value,
    }
}

export const deposit = value => {
    return{
        type: 'balance/deposit',
        payload: value,
    }
}