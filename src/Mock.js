import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Data from './Data';

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

  state = {
    data: null
  }

  componentDidMount() {
    const { data } = this.state;
    if (data === null) this.findData();
  }

  findData = async () => {
    console.log('watting');
    const data = await Data.find();
    console.log('data1', data);

    // console.log('data2', await Data.find());

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {data && data[0].name}
        </Text>
      </View>
    );
  }
}
