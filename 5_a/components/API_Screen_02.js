import { Image,Text, SafeAreaView, StyleSheet, View, FlatList,TouchableOpacity, TextInput} from 'react-native';
import {AntDesign, Fontisto} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const tasks = [
    { id: '1', title: 'To check email' },
    { id: '2', title: 'UI task web page' },
    { id: '3', title: 'Learn JavaScript basic' },
    { id: '4', title: 'Learn HTML Advance' },
    { id: '5', title: 'Medical App UI' },
    { id: '6', title: 'Learn Java' },
  ];  

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <View style={styles.task}>
        <View style={styles.checkbox}>
          <Text style = {styles.checkmark}>✓</Text>
        </View>
        <Text style={styles.taskText}>
          {item.title}
        </Text>
      </View>
      <TouchableOpacity style={styles.editClick}>
        <AntDesign name="edit" size={24} color="red" />
      </TouchableOpacity>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <View style={styles.info}> 
            <Image source={require("./Rectangle.png")} style={{height:50,width:50,borderRadius:50,backgroundColor:"#D9CBF6"}}/>
            <View style={styles.textHeader}>
              <Text style={styles.username}> 
                Hi Twinkle
              </Text>
              <Text style={styles.greeting}>
                Have agrate day a head  
              </Text>
            </View>
        </View>
      </View>
      <View style={styles.boxSearch}>
        <Fontisto name="search" size={24} color="black" />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
      <View>
        <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        />
      </View>
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="plus" size={24} color="white" /> 
      </TouchableOpacity>
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
    justifyContent:'space-between',
  },
  info:{
    flexDirection:'row',
    alignItems:'center'
  },  
  textHeader:{
    justifyContent: 'center',
  },  
  username:{
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:5,
  },
  greeting:{
    fontSize:14,
    fontWeight:'bold',
    color:"#9095A0",
  },  
  boxSearch:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
    marginTop:20,
    marginBottom:30,
    flexDirection:'row',
    marginHorizontal:10,
  },  
  textInput:{
    flex:1,
    fontSize:16,
    paddingLeft:5,
  },
  taskContainer:{
    borderRadius:20,
    margin:6,
    backgroundColor: '#DEE1E678',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20,
    padding:5
  },
  task:{  
    flexDirection:'row',
    alignItems:'center',
  },
  checkmark:{
    color:"#14923E",
    fontWeight:'700',
  },
  checkbox:{
    borderWidth:2,
    borderColor:"#14923E", 
    alignItems:'center',
    justifyContent:'center',
    margin:5,
    padding:3,
  },
  taskText:{
    fontSize:16,
    fontWeight: 'bold',
    paddingLeft:10
  },
  editClick:{
    padding:5,
  },
  list: {
    paddingBottom: 20,
  },
  addButton:{
    backgroundColor:'#00BDD6',
    width:69,
    height:69,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
    alignSelf:'center',
  },
});
