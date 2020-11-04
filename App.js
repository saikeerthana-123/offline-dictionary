import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import {Header} from 'react-native-elements';
import db from './localdb.js';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {text:'',word:[],lexicalCategory:[],definition:[]}
  }
  getWord=(text)=>{
    var text = text.toLowerCase()
    try{
      var word = dictionary [text] ["word"]
      var lexicalCategory = dictionary [text] ["lexicalCategory"]
      var definition = dictionary [text] ["definition"]
      this.setState({
        "word":word,
        "lexicalCategory":lexicalCategory,
        "definition":definition
      })
    }
    catch{getWord()}
  }
  render(){
  
    return (
      <View style={styles.container}>
        <Image style={{width:100,height:100,marginLeft:750}} source ={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIEJpzw5cDTdIbD8f5TPwWp93knvkYzCrRXA&usqp=CAU'}}/>
        <Header 
          backgroundColor="purple"
          centerComponent={{text:'Dictionary App',style:{fontSize:40}}
        }/>
        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 5,width:200, alignSelf:'center' }}
          onChangeText={text =>{this.setState({text:text.toLowerCase()})}
        }/>
        <TouchableOpacity style={styles.go} onPress={()=>
        {db[this.state.text]? (this.setState({word:db[this.state.text].word}),
        this.setState({lexicalCategory:db[this.state.text].lexicalCategory,
          definition:db[this.state.text].definition})) : Alert.alert("word doesn't exist in our database")}
          
        }>
        <Text style={{fontSize:50}}>Search</Text>
        </TouchableOpacity>
        <View>{this.state.word.map((item,index)=>{
          return(
             getWord()
          )})}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chunkButton:{
    backgroundColor:"yellow",
    borderRadius:50,
    alignItems:'center',
    marginLeft:750,
    marginRight:400,
    width:100,
    height:100,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
    fontWeight: 'bold',
  },
  go:{
    borderRadius:5,
    alignItems:'center',
    borderColor:'black',
  },
});


