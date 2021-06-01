import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import { RenderItem } from '../Components/RenderItem'
import '../services/server'

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

export function Offer(){
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

  function Tempo() {
    setTimeout(() => {
      setisLoading(false);
    }, 60000);
  }
  
  function Render ({item, index, price, description, image, date, peso, quantidade,}: props){
    return(
      <RenderItem item={item} index={index} price={price} description={description}
        image={image} date={date} peso={peso} quantidade={quantidade}
      ></RenderItem>
    )
  }

  return(
    <View style={styles.container}>
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
            data={products.sort((item: any, b: any) => item.date.localeCompare(b.date))}
            renderItem={Render}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            onEndReached={Tempo}
            onEndReachedThreshold={0}
            refreshing={isLoading}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
          />
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
})