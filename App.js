import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/components/Navigator';

export default App = () => {
  useEffect(() => {

  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={`#24AE60`} />
      <Navigator />
    </NavigationContainer>
  );
};
