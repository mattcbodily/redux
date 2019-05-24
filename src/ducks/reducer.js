const initialState = {
    list: ['Code', 'Sleep', 'Eat']
}

const UPDATE_LIST = 'UPDATE_LIST';

export function updateList(listObj){
    console.log(listObj)
    return {
        type: UPDATE_LIST,
        payload: listObj
    }
}

export default function reducer(state = initialState, action){
    const{type, payload} = action;
    switch(type){
    case UPDATE_LIST:
        let list = [...state.list, payload.item]
        return {...state, list}
    default:
        return state;
    }
}