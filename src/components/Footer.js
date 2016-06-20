import React from 'react'
import FilterLink from './FilterLink'

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions.js'

const Footer = ({
  store,
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    Show:
    {' '}
    <FilterLink store={store} currentFilter={visibilityFilter}
                onClick={onFilterClick} filter={SHOW_ALL}>
      All
    </FilterLink>
    {' '}
    <FilterLink store={store} currentFilter={visibilityFilter}
                onClick={onFilterClick} filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    {' '}
    <FilterLink store={store} currentFilter={visibilityFilter}
                onClick={onFilterClick} filter={SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)


export default Footer