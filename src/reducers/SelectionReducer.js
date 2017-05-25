// if state is undefined, return null to avoid error  
export default (state = null, action) => {
  // reducer boilerplate for responding to actions
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      // action comes through that reducer should not respond to
      // just return the previous state
      return state;
  }

};
