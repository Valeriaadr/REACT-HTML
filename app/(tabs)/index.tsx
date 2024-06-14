import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomeScreen() {

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  
  const [pokimons, setPokimons] = useState([])

  useEffect(() => {

  }, [isLoading])

  function handleUsernameChange({nativeEvent}){
    setUsername(nativeEvent.text)
  }

  function handlePasswordChange({nativeEvent}){
    setPassword(nativeEvent.text)
  }
  
  function handleLogin(){
    setIsLoading(true)

    setTimeout(() => {   
      if(username === 'Brayan' && password === 'admin'){
        alert('Welcome Brayan!')
        setPokimons([1])
      }else{
        alert('Who tf are u?')
      }

    setIsLoading(false)
  }, 1000)


  }

  return (
    <View style={styles.mainContainer} >
      <View  style={styles.loginCointainer} >
      <Text style={styles.loginTitle} >Login</Text>

        <View style={styles.loginInnerContainer}>
          <Text style={styles.loginText} > Username </Text>
          <TextInput style={styles.loginInput} onChange={ (value) => handleUsernameChange(value)} />
        </View>

        <View style={styles.loginInnerContainer}>
          <Text style={styles.loginText}> Password </Text>
          <TextInput style={styles.loginInput} onChange={ (value) => handlePasswordChange(value)} />
        </View>

        <View style={styles.loginSubmitContainer}>
          <Button title='Log in' onPress={handleLogin} disabled={isLoading} />
        </View>
      </View>

      {pokimons.length > 0 && (
      <View  style={styles.loginCointainer} >
        <Text style={styles.loginTitle} >Login</Text>

          <View style={styles.loginInnerContainer}>
            <Text style={styles.loginText} > Username </Text>
            <TextInput style={styles.loginInput} onChange={ (value) => handleUsernameChange(value)} />
          </View>

          <View style={styles.loginInnerContainer}>
            <Text style={styles.loginText}> Password </Text>
            <TextInput style={styles.loginInput} onChange={ (value) => handlePasswordChange(value)} />
          </View>

          <View style={styles.loginSubmitContainer}>
            <Button title='Log in' onPress={handleLogin} disabled={isLoading} />
          </View>
      </View>) }
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '100%'
  },

  loginCointainer: {
    backgroundColor:'pink',
    height:300,
    width:400,
    borderRadius:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

  loginInnerContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  loginInput: {
    backgroundColor: 'white',
    textAlign:'center',
    borderRadius: 5,
  },

  loginText: {
    fontSize:20
  },

  loginTitle: {
    fontSize:40,
    alignSelf:'auto',
    top:-20
  },
  loginSubmitContainer: {
    top:20
  }

});
