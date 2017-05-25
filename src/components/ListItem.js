import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // import all functions in actions

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    // this.props.library available from rendering ListItem in renderRow method
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId
  };
};

// first argument is mapStateToProps to get access to state
// second arguments binds action creators
// passed into component as props
export default connect(mapStateToProps, actions)(ListItem);
