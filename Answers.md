1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, reduce, filter


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

reduver: The reducer is a pure function that takes the previous state and an action, and returns the next state
store: is the state in redux.
actions: functions that create actions.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. Component state lives within that specific component and it can only be updated within that component (temporary information).

1.  What is middleware?

Middleware is a software that acts as a bridge between an operating system or database and applications, especially on a network.



1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.



1.  Which `react-redux` method links up our `components` with our `redux store`?

The Provider is used to wrap the app.