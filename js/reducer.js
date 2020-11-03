//let state = {count: 0};
let state;
//At the top of the file, we declare but do not assign our state, so it starts off undefined.

function changeState(state = { count: 0 }, action) {
    switch (action.type) {

      case 'INCREASE_COUNT':
        return { count: state.count + 1 }

      default:
        return state;
    }
  }

  function dispatch(action){
  state = changeState(state, action)
  render()
}

function render(){
  document.body.textContent = state.count
}

dispatch({type: '@@INIT'})
//Then at the bottom the file, we dispatch an action of '@@INIT'. This calls our dispatch() function and passes through our initial action. dispatch() calls the changeState() reducer.


//Remember that our dispatch() function also calls our render() function.
//So, if we dispatch a meaningless action, our reducer will simply return the existing state
//(the default case in our switch), and then our render() function will be called.
//Let's try it by dispatching an action of type @@INIT.
//If you already have index.html open in browser, refresh the page and enter the following
//into the browser console:

//dispatch({ type: '@@INIT' })


//Note that we can dispatch an action of any type, so long as it doesn't hit our switch statement.
//We dispatch an action of type @@INIT by convention, but you could just as well choose something
//else and get the same result:

//dispatch({ type: 'beef' })
//The switch will return whatever state was passed into the changeState() function. Then render() will be called and that updated state will get applied to the DOM.

//Now, if we want our page to display 0 when it first loads, we can just add dispatch({ type: '@@INIT' }) at the end of the file.
