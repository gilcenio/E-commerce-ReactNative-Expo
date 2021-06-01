import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from  'react-native'
import { Header } from  '../Components/Header'
import { Separator } from '../Components/Separator'
import { Offer } from '../Components/Offer'
import { BestSeller } from '../Components/bestSeller'
import { Modalize } from 'react-native-modalize'
import { useCart } from '../Context/Cart'
import { Cart } from './Cart'
import { useNavigation } from '@react-navigation/core'

export function Home (){
  const {cast, On, setOn, value} = useCart()
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = (): void => modalizeRef.current?.open();
  const accountant = Object.keys(cast).length
 
  if (accountant === 1){
    setOn(false)
  }else if(accountant === 0){
    setOn(true)
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header onpress={onOpen}/>
      </View>
      <View style={styles.separator}>
        <Separator title="Ofertas" />
      </View>
      <View style={styles.offer}>
        <Offer />
      </View>
      <View style={styles.separator}>
        <Separator title="Produtos Mais Vendidos" />
      </View>
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.bestSeller}>
        <BestSeller />
      </View>
      {On ? (
        <View></View>
      ):(
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
        >
          <View style={styles.cart}>
            <View style={styles.viewCount}>
              <Text style={styles.text}>{accountant}</Text>
            </View>
            <Text style={{...styles.text, fontWeight: 'bold'}}>Ver cesta</Text>
            <Text style={styles.text}>R$ {value.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      )}
      </View>
      </ScrollView>
      <Modalize ref={modalizeRef} snapPoint={600} >
        <Cart></Cart>
      </Modalize>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header:{
    width: '100%',
    height: 90
  },
  separator:{
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  offer:{
    height: 350,
  },
  bestSeller:{
    height: 180,
  },
  cart:{
    width: 350,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#6eaa5e',
    padding: 10,
    borderRadius: 8,
  },
  text:{
    color: '#fff',
    fontSize: 20
  },
  viewCount:{
    width: 40,
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  }
})