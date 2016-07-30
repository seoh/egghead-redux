import React from 'react'
import { SET_VISIBILITY_FILTER } from '../actions'

const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => (
  filter === currentFilter
    ? <span>{children}</span>
    : <a href='#'
        onClick={e => {
          e.preventDefault()
          onClick(filter)
        }}
      >
        {children}
      </a>
)

export default FilterLink