/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Image
      style = {styles.image}
      source={require ('./react_native.jpg')}/>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.contactInfo}>Twitter: https://twitter.com/reactnative</Text>
      <Text style={styles.contactInfo}>Github: https://github.com/facebook/react-native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 24,
    justifyContent:'center',    
    flex: 1,
    backgroundColor: "#222222"
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  image:{
    width: 100,
    height: 100,
  },
  contactInfo:{
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  }
});

export default App;
