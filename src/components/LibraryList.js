import React, { Component } from 'react';
import { ListView } from 'react-native';
// connect helper gives component access to redux state in provider store
import { connect } from 'react-redux';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
      />
    );
  }
}

const mapStateToProps = state => {
  // any object returned here is a prop for the component
  return { libraries: state.libraries };
};

//call connect function, which immediately returns another function
// include the LibraryList in the immediate call to other function
export default connect(mapStateToProps)(LibraryList);
