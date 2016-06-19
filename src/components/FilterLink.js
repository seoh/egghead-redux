import React from 'react'
import { SET_VISIBILITY_FILTER } from '../actions'

const FilterLink = ({
  store,
  filter,
  currentFilter,
  children
}) => (
  filter === currentFilter
    ? <span>{children}</span>
    : <a href='#'
        onClick={e => {
          e.preventDefault()
          store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter
          })
        }}
      >
        {children}
      </a>
)

export default FilterLink