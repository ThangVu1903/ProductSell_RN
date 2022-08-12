import { Image, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import sweter from '../images/sweter.png'
const CategoryList =(props) => {
  const {title} = props ;
   return (
    <TouchableOpacity>
      <View style ={styles.listCat}>
      <Text style = {styles.text}>{title.name}</Text>
      <Image style ={styles.listCatSweter} source={sweter}></Image>
    </View>
    </TouchableOpacity>
    
  )
}
export default CategoryList

