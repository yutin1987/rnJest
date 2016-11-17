import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { find } from './Data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Mock extends Component {

  static state = {
    data: null
  }

  componentDidMount() {
    const { data } = this.state;
    if (data === null) this.findData();
  }

  findData = async () => {
    const data = await find();
    this.setState({ data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.data}
        </Text>
      </View>
    );
  }
}
