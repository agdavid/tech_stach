// the action creator - a JS function that returns an action
export const selectLibrary = (libraryId) => {
  // the action - dispatched to reducers
  return {
    type: 'select_library',
    payload: libraryId
  };
};
