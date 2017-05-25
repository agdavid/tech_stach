import React, { Component } from 'react';
// connect helper gives component access to redux state in provider store
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  // any object returned here is a prop for the component
  return { libraries: state.libraries };
};

//call connect function, which immediately returns another function
// include the LibraryList in the immediate call to other function
export default connect(mapStateToProps)(LibraryList);
