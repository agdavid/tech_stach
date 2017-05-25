import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// reducer keys will be the keys in the app state (e.g., this.state.libraries)
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
