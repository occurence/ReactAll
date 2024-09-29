const localeInitialState = {
    lang: "uk",
}

export const localeReducer = (state = localeInitialState, action) => {
    switch(action.type){
        case'locale/changeLang':
        return{
            ...state,
            lang: action.payload,
        }
        default:
            return state;
    }
    // if(action.type === 'locale/changeLang'){
    //     return{
    //         ...state,
    //         lang: action.payload,
    //     }
    // }else{
    //     return state;
    // }
}

export const changeLang = newLang => {
    return{
        type: 'locale/changeLang',
        payload: newLang,
    }
}