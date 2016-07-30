import React from 'react'
import FilterLink from './FilterLink'

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions.js'
import store from '../store'

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    Show:
    {' '}
    <FilterLink currentFilter={visibilityFilter}
                onClick={onFilterClick}
                filter={SHOW_ALL}>
      All
    </FilterLink>
    {' '}
    <FilterLink currentFilter={visibilityFilter}
                onClick={onFilterClick}
                filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    {' '}
    <FilterLink currentFilter={visibilityFilter}
                onClick={onFilterClick}
                filter={SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)


export default Footer