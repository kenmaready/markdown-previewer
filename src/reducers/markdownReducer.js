

const UPDATE_INPUT = 'UPDATE_INPUT';

const newInputReducer = (state = {text: ''}, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return { text: action.payload.text };
        default:
            return state;
    };
};

export default newInputReducer;