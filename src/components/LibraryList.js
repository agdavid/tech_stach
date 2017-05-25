import React, { Component } from 'react';
import { ListView } from 'react-native';
// connect helper gives component access to redux state in provider store
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    // initialize data source for ListView
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  // helper method to render each data item
  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      // pass data source to ListView
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
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
