import React,{ useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image,TouchableOpacity,TextInput} from 'react-native';
import {AntDesign, Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Screen03() {
  const [job,setJob] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.info}> 
          <Image source={require('./Rectangle.png')} style={styles.profileImage}/>
          <View style={styles.textHeader}>
            <Text style={styles.name}>Hi Twinkle</Text>
            <Text style={styles.description}>Have agrate day a head</Text>
          </View>
        </View>
        <TouchableOpacity> 
          <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate('Api_Screen_02')}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <View style={styles.inputContainer}> 
        <Fontisto name="nav-icon-list-a" size={24} color="green" />
        <TextInput style={styles.textInput} placeholder="input your job" value={job} onChangeText={setJob}/>
      </View>
      <TouchableOpacity style={styles.finishButton}>
        <Text style={styles.textButton}>Finish ➔</Text>
      </TouchableOpacity>

      <Image source={require('./Image_95.png')} style={styles.noteImage}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    marginTop:10,
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
  },
  info:{
    flexDirection:"row",
    alignItems:'center'
  },
  profileImage:{
    borderRadius:30,
    backgroundColor:'#D9CBF6',
  },
  textHeader:{
    marginLeft:10,
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  description:{
    fontWeight:'bold',
    color:'#9095A0',
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
    marginVertical:30,
  },
  inputContainer:{
    flexDirection:'row',
    borderWidth:1,
    borderRadius:5,
    alignItems:'center',
    padding:10,
    marginHorizontal:10,
    marginBottom:20,
  },
  textInput:{
    flex:1,
    fontSize:20,
    paddingLeft:10,
  },
  finishButton:{
    backgroundColor:'#00BDD6',
    alignItems:'center',
    borderRadius:10,
    paddingVertical:10,
    marginHorizontal:70,
  },textButton:{
    color:'#fff',
    fontSize:20,
  },
  noteImage:{
    marginTop:50,
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
