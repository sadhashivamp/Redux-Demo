// //Example:-Cake and IceCream-Shop-App
    //Middleware
    const redux = require('redux')
    const reduxLogger = require('redux-logger')
    const createStore = redux.createStore
    const combineReducers = redux.combineReducers
    const applyMiddleware = redux.applyMiddleware
    const logger = reduxLogger.createLogger()
    
    
    //first we define in string constant that indicates the type of the Action
    const BUY_CAKE = 'BUY_CAKE'  
    const BUY_ICECREAM = 'BUY_ICECREAM'
    
    //we define our Action in function
    
    function buyCake() {
        return {
            type: BUY_CAKE,
            info: 'First redux action'
        }
    }
    function buyIceCream() {
        return {
            type: BUY_ICECREAM,
            info: 'Second redux action'
        }
    }
    //Now we define reducer
    //(previousState, action) => newState
    const initialCakeState = {   // state of our application in single object
        numOfCakes: 10,   
    }
    const initialIceCreamState = {   // state of our application in single object
        numOfIceCreams: 20
    }
    const cakeReducer = (state = initialCakeState, action) => {
        switch(action.type) {
            case BUY_CAKE: return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            default: return state
        }
    }
    
    const iceCreamReducer = (state = initialIceCreamState, action) => {
        switch(action.type) {
            case BUY_ICECREAM: return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
            default: return state
        }
    }
    // we define Redux store
    //combined two reducers with key names(cake, iceCream)
    const rootReducer = combineReducers({
        cake: cakeReducer,
        iceCream: iceCreamReducer
    })
    const store = createStore(rootReducer, applyMiddleware(logger))
    
    //for accessing the current state of the application
    console.log('Initial state', store.getState());
    
    
    //registers listners via subscribe(listner)
    const unsubscribe = store.subscribe(() => {})
    
    //Allows state to be updated via dispatch(action)
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyIceCream())
    store.dispatch(buyIceCream())
    store.dispatch(buyIceCream())
    
    unsubscribe()