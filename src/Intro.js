import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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

export default class Intro extends Component {

  state = {
    value: '',
  }

  static defaultProps = {
  }

  onEnter = () => {
    console.log('mouse enter');
    this.setState({ value: 'XYZ111' });
  }

  render() {
    const { value } = this.state;

    console.log(value);

    return (
      <View style={styles.container} onEnter={this.onEnter}>
        <Text style={styles.welcome}>
          {`Welcome to React Native! ${value}`}
        </Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>
      </View>
    );
  }
}
