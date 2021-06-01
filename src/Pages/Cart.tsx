import React, { useState } from 'react'
import { FlatList, Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import { useCart } from '../Context/Cart'
import { RenderItemModal } from '../Components/RenderItemModal'
import rappiprime from '../Assets/rappiprime.png'
import maps from '../Assets/maps.jpg'
import '../services/server'

interface props{
  description?: string 
  image?: string
  price?: any
  date?: string
  item?: any
  index?: any
  peso?: any
}

export function Cart(){
  const { cast, value, RemoveAll } = useCart()
  const [isLoading, setisLoading] = useState(false);
  const arrayMap = cast.map(Object.values);

  function Tempo() {
    setTimeout(() => {
      setisLoading(false);
    }, 60000);
  }

  function RenderIntem({item, index}: props){
    return(
      <RenderItemModal item={item} index={index} />
    )
  }
  

  return(
    <View style={styles.container}>
        <View style={styles.viewSubtotal}>
          <Text style={styles.textSubtotal}>SUBTOTAL</Text>
          <Text style={styles.textAccountant}>R$ {value.toFixed(2)}</Text>
        </View>
        <View style={styles.viewRappiPrime}>
          <View >
            <Image style={{width: 80, height: 50}} source={rappiprime} />
          </View>
          <Text style={{...styles.textRappiPrime, fontSize: 10}}>{`Taxa de entrega com RappiPrime\nR$ 0,00`}</Text>
          <Text style={{...styles.textRappiPrime, textDecorationLine: 'underline'}}>Inscreva-se aqui</Text>
        </View>
        <View style={styles.viewMap}>
          <View>
            <Text style={styles.textMap}>ENDEREÇO DE ENTREGA</Text>
            <Text style={{...styles.textMap, color: '#000', fontWeight: 'bold'}}>Condomínio do Edfício Tk Tower-...</Text>
            <Text style={styles.textMap}>Trabalho 💼</Text>
          </View>
          <Image style={{width: 100, height: 100}} source={maps}></Image>
        </View>
        {isLoading ? (
            <View style={styles.viewLoading}>
              <LottieView
                resizeMode="contain"
                style={{width: 80, height: 80}}
                source={require('../Animations/scan-products.json')}
                autoPlay
              />
            </View>
        ) : (
          <FlatList 
            data={arrayMap}
            renderItem={RenderIntem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={Tempo}
            onEndReachedThreshold={0}
            refreshing={isLoading}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
          />
        )}
      {value ? (
      <View style={styles.esvaziar}>
      <TouchableOpacity
        onPress={RemoveAll}
      >
        <Text style={styles.textEsvaziar}>Esvaziar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContinuar}>
        <Text style={styles.textContinuar}>Continuar</Text>
      </TouchableOpacity>
      </View>
      ):(
        <View></View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  viewLoading:{
    alignItems: 'center',
  },
  viewSubtotal:{
    width: '100%',
    height: 90,
    justifyContent: 'center',
    marginLeft: 30,
  },
  textSubtotal:{
    fontSize: 18,
    color: 'grey'
  },
  textAccountant:{
    fontWeight: 'bold', 
    fontSize: 25
  },
  viewRappiPrime:{
    width: '100%', 
    height: 60, 
    backgroundColor: '#ff3354',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 4
  },
  textRappiPrime:{
    color: '#fff',
    margin: 10,
  },
  viewMap:{
    width: '100%',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5
  },
  textMap:{
    fontSize: 15,
    margin: 3,
    color: 'grey',
  },
  viewFlatlist:{
    width: 400,
    height: 150,
    elevation: 5,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  buttonNew:{
    backgroundColor: '#fff',
    elevation: 6,
    height: 50,
    width: 160,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-around',
    borderRadius: 10
  },
  textButton:{
    fontSize: 17,
    color: 'green'
  },
  buttonContinuar:{
    width: '100%',
    height: 60,
    backgroundColor: '#55c66a',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 10
  },
  textContinuar:{
    color: '#fff',
    fontSize: 20
  },
  esvaziar:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textEsvaziar:{
    marginBottom: 10,
    fontSize: 20,
    color: 'grey',
    textDecorationLine: 'underline'
  }
})