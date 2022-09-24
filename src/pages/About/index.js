import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
        <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default About