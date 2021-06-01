import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from  'react-native'
import { useCart } from '../Context/Cart'

interface props{
  description?: string 
  image?: string
  price?: any
  date?: string
  item?: any
  index?: any
  peso?: any
  quantidade?: any
}



export function RenderItem ({item, index}: props){
  const { Add, cast, Remove, setValue, value } = useCart();
  const accountant = Object.keys(cast).length;
  const [buttonNew, setButtonNew] = useState(false);
  const quantidades = item.quantidade + 1
  const [quantidade, setQuantidade] = useState(1)


  function Soma(){
    setQuantidade(quantidade + quantidades)
    setValue(item.price + value)
    Add(item)
  }

  function Subtracao(){
    setQuantidade(quantidade - quantidades)
    setValue(value - item.price)
    cast.shift(index)
  }

  useEffect(() => {
    if(quantidade === 0){
      Alert.alert(
        "Opss!",
        "Produto retirado do carrinho",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      setQuantidade(1)
      setButtonNew(false)
    }
  }, [quantidade])

  const discount = item.price + 0.50
  return(
    <View style={styles.container}>
      <View style={{...styles.content}}>
        <Image 
          style={styles.image}
          source={{uri: item.image}}
        />
      </View>
      <View style={styles.content}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.textPrice}>R${item.price}</Text>
          <Text style={styles.textDiscount}>R${discount}</Text>
        </View>
        <Text style={styles.textDescription}>{item.description}</Text>
        <Text style={{...styles.textDescription, color: '#bdbebd', paddingRight: 100}}>{item.peso}</Text>
        {buttonNew ? (
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
        ) : (
          <TouchableOpacity
            onPress={() => {
              setButtonNew(true)
              setValue(item.price + value)
              Add(item)
            }}
            style={styles.button}
          >
            <Text style={styles.textButton}>Adicionar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width: 200,
    margin: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: 140, 
    height: 140,
    marginTop: 20
  },
  button:{
    backgroundColor: '#fff',
    elevation: 6,
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 10
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
  textPrice:{
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 2,
  },
  textDiscount:{
    fontWeight: 'normal', 
    fontSize: 19,
    marginLeft: 8,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    color: '#bdbebd'
  },
  textDescription:{
    margin: 10,
    fontSize: 18,
    fontStyle: 'italic'
  }
})