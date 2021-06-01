import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet, ScrollView} from 'react-native'
import LottieView from 'lottie-react-native'
import '../services/server'

interface propsBestSeller{
  item?: any
  image?: any
}

export function BestSeller(){
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "/api/products",
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setisLoading(false);
      });
  }, []);
  
  const itemImage =  products.map((item: propsBestSeller) => {

    const data = item.image.toString();
    const newdata = data.replace('[]', '');

    return(
      <View style={styles.container}>
        <Image style={{width: 150, height: 150}} source={{uri: newdata}} />
      </View>
    )
  })
  

  return(
    <View style={styles.content}>
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
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {itemImage}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  content:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  viewLoading:{
    alignItems: 'center',
  }
})