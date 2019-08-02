const initialState = {
    isSwitchOn: false
};

const reducer = (state = initialState, action) => {

    if (action.type === 'SWITCH_TOGGLE') {
        return {
            ...state,
            isSwitchOn: !action.value
        };
    }

    return state;

};

export default reducer;