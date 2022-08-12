import { StyleSheet, ScrollView, View, FlatList } from 'react-native'
import React from 'react'
import CategoryList from './components/categoryListItems/categoryList'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      categories : [
        {id: 1, name: 'dung cu truot tuyet'},
        {id: 2, name: 'dung cu danh banh'},
        {id: 3, name: 'dung cu danh banh'},
        {id: 4, name: 'dung cu danh banh'},
        {id: 5, name: 'dung cu danh banh'},
        {id: 6, name: 'dung cu danh banh'},
        {id: 7, name: 'dung cu danh banh'},
        {id: 8, name: 'dung cu danh banh'},
        {id: 9, name: 'quan ao truot tuyet'}
      ]
    }
  }

  
  render(){
    const {categories} = this.state ;
    return (
      <View style={styles.container}>
        <FlatList 
          data ={categories}  /* duyệt từng phần tử trong list categories  */
          renderItem={({item}) =><CategoryList title = {item}/> }
          keyExtractor={(item)=>`${item.id}`}/>
{/* cách khác */}
        {/* <ScrollView style ={styles.ScrollView}>
          
          {categories.map((category) =>
           (<CategoryList key = {categories.id} title ={category}/>
           ))}
        </ScrollView> */} 

      </View>
    )
  } 
}

export default App

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    backgroundColor:'#c7ecee',
   
  },
  ScrollView:{
    paddingVertical:16,
  
  },
})
