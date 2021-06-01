import React, { useState } from 'react'
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useCart } from '../Context/Cart'

interface props{
  description?: string 
  image?: string
  price?: any
  date?: string
  item?: any  
  index?: any
  peso?: any
}

export function RenderItemModal({item, index}: props) {
  const { value, setValue, Remove} = useCart()
  const quantidades = item[6] + 1
  const [quantidade, setQuantidade] = useState(1)
  
  function Soma(){
      setQuantidade(quantidade + quantidades)
      setValue(item[3] + value)
  }


  function Subtracao(){
    setQuantidade(quantidade - quantidades)
    setValue(value - item[3])
  }

  return(
    <View style={styles.viewFlatlist}>
      <Image style={{width: 65, height: 70}} source={{uri: item[2]}}></Image>
      <View>
        <Text style={styles.textDescription}>{item[1]}</Text>
        <Text style={styles.textPesso}>{item[5]}</Text>
        <Text style={styles.textPesso}>R$ {item[3]}</Text>
      </View>
      <View
        style={styles.buttonNew}
      >
        <TouchableOpacity
          onPress={() => Subtracao()}
          style={{height: 50, width: 40, alignItems: 'center'}}
        >
          <Text style={{...styles.textButton, fontSize: 30}}>-</Text>
        </TouchableOpacity>
        <Text>{quantidade}</Text>
        <TouchableOpacity
          onPress={() => Soma()}
          style={{height: 50, width: 40, alignItems: 'center'}}
        >
          <Text style={{...styles.textButton, fontSize: 30}}>+</Text>
        </TouchableOpacity>
      </View>
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
  textDescription:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPesso:{
    fontSize: 18,
    color: 'grey',
  },
})