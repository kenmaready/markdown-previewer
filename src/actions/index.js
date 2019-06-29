const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = (text) => {
    return {type: UPDATE_INPUT, payload : { text : text }};
}