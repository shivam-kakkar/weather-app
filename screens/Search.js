import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, Text} from 'react-native';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Search = ({navigation}) => {
  const [city, setCity] = useState('');

  const btnClick = async () => {
    await AsyncStorage.setItem('newcity', city);
    navigation.navigate('home', {city: city});
  };

  return (
    <View style={{flex: 1}}>
      <Header name="Search Screen" />
      <TextInput
        label="city name"
        theme={{colors: {primary: '#00aaff'}}}
        value={city}
        onChangeText={text => setCity(text)}
      />
      <Button
        icon="content-save"
        mode="contained"
        theme={{colors: {primary: '#00aaff'}}}
        style={{margin: 20}}
        onPress={() => btnClick()}>
        <Text style={{color: 'white'}}>Save Changes</Text>
      </Button>
    </View>
  );
};

export default Search;
