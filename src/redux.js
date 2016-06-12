export const createStore = (reducer) => {
  let state
  let listeners = []

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(_ => _ !== listener)
    }
  }

  dispatch({}) // populate initial state

  return {
    getState,
    dispatch,
    subscribe
  }
}