import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from  'react-native'
import { Ionicons } from '@expo/vector-icons'

interface separatorProps{
  title: string
}

export function Separator ({title}: separatorProps){
  return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text  style={styles.text}>{title}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.content}>
            <Text style={{...styles.opacityText, marginBottom: 5}}>{"Ver mais"}</Text>
            <Ionicons 
              name="md-chevron-forward-outline"
              size={25}
              color="green"
            />
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    paddingLeft: 15,
    paddingRight: 15
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 20, 
    fontWeight: "bold",
    marginBottom: 5
  },
  opacityText:{
    color: 'green',
    fontSize: 16
  }
})