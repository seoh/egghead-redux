import { ADD_TODO, TOGGLE_TODO } from '../actions.js'

let nextTodoId = 0

export const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO: return {
        id: nextTodoId++,
        text: action.text,
        completed: false
    }
    case TOGGLE_TODO:
      if (state.id !== action.id) return state
      else return {
        ...state,
        completed: !state.completed
      }
    default: return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: return [
      ...state,
      todo(undefined, action)
    ]
    case TOGGLE_TODO: return state.map(_ => todo(_, action))
    default: return state
  }
}