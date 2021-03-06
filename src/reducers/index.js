import {
  UPDATE_SEARCHER,
  ADD_FILTER,
  REMOVE_FILTER
} from '../actions'
import addFilterReducer from './addFilterReducer'
import searcherReducer from './searcherReducer'
import removeFilterReducer from './removeFilterReducer'
import dataGenerator from '../data-generator'
const {forms, tags, people, colors} = dataGenerator()

const defaultData = {
  searcher: '',
  suggestedTags: [],
  suggestedPeople: [],
  filters: [],
  filteredForms: [],
  forms,
  tags,
  people,
  colors
}
console.log('defaultData', defaultData)
const reducers = (state = defaultData, action) => {
  switch (action.type) {
    case UPDATE_SEARCHER:
      return searcherReducer(state, action)
    case ADD_FILTER:
      return addFilterReducer(state, action)
    case REMOVE_FILTER:
      return removeFilterReducer(state, action)
    default:
      return state
  }
}
export default reducers
