import { combineReducers } from 'redux';
import sections from './section-reducer';
import cards from './card-reducer';

// this is creating the object properties for the state...
// this is why the reducer can "vaugely" return a state obj
// and main will define the property it goes into here
// good naming on the imports really matters here
export default combineReducers({
  sections,
  cards,
});
