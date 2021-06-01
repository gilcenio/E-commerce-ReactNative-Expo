import React from 'react'
import { View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Text } from  'react-native'
import { Ionicons } from '@expo/vector-icons'
import Banner from '../Assets/banner.jpg'
import { useCart } from '../Context/Cart'

interface headerProps{
  onpress: any
  route?: any
}

export function Header ({onpress, route}: headerProps){
  const {cast, On, setOn} = useCart()
  const accountant = Object.keys(cast).length
  
  if (accountant === 1){
    setOn(false)
  }else if(accountant === 0){
    setOn(true)
  }

  return(
    <ImageBackground source={Banner} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.containerIocon}>
          <View style={styles.containerNewIocon} />
          <Ionicons 
              name="md-chevron-back-outline"
              size={35}
              color="#fff"
            />
        </View>
        <View>
          <TextInput 
            style={styles.textInput}
            placeholder={'🔍 Buscar produtos ou categorias'}
            autoCorrect={true}
          >
          </TextInput>
        </View>
        <View style={styles.containerIocon}>
          <View style={styles.containerNewIocon} />

          <TouchableOpacity
            onPress={onpress}
          >
            <Ionicons 
              name="ios-cart-outline"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
          <View style={{position: 'absolute', height: 65, width: 65, borderRadius: 60, alignItems: 'flex-end'}}>
            {On ? (
            <View></View>
            ):(
            <View style={{ backgroundColor: '#353839', width: 30, alignItems: 'center', borderRadius: 50}}>
              <Text style={{color: '#fff', fontSize: 20}}>{accountant}</Text>
            </View>
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage:{
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 90
  },
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  containerIocon:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  containerNewIocon:{
    backgroundColor: '#121214',
    borderRadius: 50,
    width: 50,
    height: 50,
    opacity: 0.5,
    position: 'absolute',
  },
  containerInput:{
    
  },
  textInput:{
    width: 250,
    height: 50,
    margin: 16,
    paddingLeft: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    color: '#000'
  }
})