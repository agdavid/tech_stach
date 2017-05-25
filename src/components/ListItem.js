import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // import all functions in actions

class ListItem extends Component {
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

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
          {this.renderDescription()}
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

// first argument is app state
// second argument is this.props of component
const mapStateToProps = (state, ownProps) => {
  // pre-calculate the props
  const expanded = state.selectedLibraryId === ownProps.library.id; //returns true/false
  return { expanded }; //now have this.props.expanded as true/false
};

// first argument is mapStateToProps to get access to state
// second arguments binds action creators
// passed into component as props
export default connect(mapStateToProps, actions)(ListItem);
