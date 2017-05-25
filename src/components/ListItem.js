import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions'; // import all functions in actions

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

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

export default ListItem;
