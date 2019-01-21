import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import Login from './components/Login'

const climberAPI = 'https://capstone-climb-db.herokuapp.com/climbers'

export default class App extends React.Component {
    state = {
    placeName: ''
  }

  placeNameChangeHandler = (event) => {
    alert(event)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Login placeName={this.state.placeName} placeNameChangeHandler={this.placeNameChangeHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});