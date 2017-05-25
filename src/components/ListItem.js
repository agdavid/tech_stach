import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions'; // import all functions in actions

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    console.log(this.props);
    // this.props.library available from rendering ListItem in renderRow method
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// first argument is mapStateToProps to get access to state
// second arguments binds action creators
// passed into component as props
export default connect(null, actions)(ListItem);
