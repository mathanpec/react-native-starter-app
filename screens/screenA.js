import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


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

export default class ScreenA extends React.Component {

  goToScreenB = () => {
    this.props.navigation.navigate('ScreenB');
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>I am screen A</Text>
        <View>
          <Button
            style={styles.button}
            title='Go to Screen B'
            onPress={this.goToScreenB}
            color="#841584"
          />
          <Button
            style={styles.button}
            title='Open Drawer'
            onPress={this.openDrawer}
            color="#841584"
          />
        </View>
      </View>
    );
  }
}