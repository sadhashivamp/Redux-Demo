//Example:-Cake-Shop-App

const redux = require('redux')
const createStore = redux.createStore
//first we define in string constant that indicates the type of the Action
const BUY_CAKE = 'BUY_CAKE'  

//we define our Action in function

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
//Now we define reducer
//(previousState, action) => newState
const initialState = {   // state of our application in single object
    numOfCakes: 10
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
// we define Redux store

const store = createStore(reducer)

//for accessing the current state of the application
console.log('Initial state', store.getState());


//registers listners via subscribe(listner)
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

//Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()

// Output:-
// Initial state { numOfCakes: 10, numOfIceCreams: 20 }
// Updated state { numOfCakes: 9, numOfIceCreams: 20 }
// Updated state { numOfCakes: 8, numOfIceCreams: 20 }
// Updated state { numOfCakes: 7, numOfIceCreams: 20 }
// Updated state { numOfCakes: 7, numOfIceCreams: 19 }
// Updated state { numOfCakes: 7, numOfIceCreams: 18 }
// Updated state { numOfCakes: 7, numOfIceCreams: 17 }
