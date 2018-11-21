import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginBottom: 15,
  }
});

export default class TabB extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>I am Tab B</Text>
      </View>
    );
  }
}