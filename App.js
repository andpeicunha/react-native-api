import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';


export default function App() {
  return (
    <Container>
      <Text >Open up App.js to start working on your app!</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
`