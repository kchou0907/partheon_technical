import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Dimensions, StyleSheet, Switch, Text, Pressable, SafeAreaView } from 'react-native';
import CustomCarousel from './assets/components/carousel';
import CustomSwitch from './assets/components/switch';

export default function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const toggleSwitch = () => setIsMonthly(prevState => !prevState);
  const green: string = '#1FCB64';
  const font: string = 'Sohne';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Pressable style={styles.x_button}><Text style={styles.p}>X</Text></Pressable>
      <Text style={styles.h1}>Financial coaching and education in your pocket</Text>
      <Text style={styles.p}>Upgrade to get the most out of Parthean</Text>
      <CustomSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly}/>
      <CustomCarousel/>
      <Pressable style={styles.button}>
        <Text style={styles.p}>Continue</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Dimensions.get('window').height * 0.1,
    paddingBottom: Dimensions.get('window').height * 0.1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    textAlign: 'center',
    color:'#FFFFFF',
    maxWidth: Dimensions.get('window').width * 0.8,

    fontSize: 24,
    lineHeight: 30,  
  },
  p: {
    textAlign: 'center',
    color: '#FFFFFF',
    maxWidth: Dimensions.get('window').width * 0.8,

    opacity: 0.75,
    fontSize: 16,
    lineHeight: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: Dimensions.get('window').width * 0.35,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1FCB64',
  },
  x_button: {
    backgroundColor: '#3E3E3E',
    width: 30,
    height: 30,
    borderRadius: 79,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 30
  },
  switch: {
    
  }
});
