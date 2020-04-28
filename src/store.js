import { createStore } from 'redux';

export default createStore(function(state, action) {
    if(state === undefined) {
        return { number: 0}
    }
    if(action.type === 'INCREMENT') {
        // ...state 는 기존의 state 값을 복제해서 뒤의 값에 합친다
        return { ...state, number: state.number + action.size }
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())