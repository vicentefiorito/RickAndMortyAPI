import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useEffect,useState } from 'react';
import Card from './components/Card';

export default function App() {
  //https://rickandmortyapi.com/api/character/?page=1

  const[data,setData] = useState(null);
  useEffect(() => {
    getData();

  },[])
  
  console.log('Here are results ',data);

   async function getData(){
    const req = await fetch('https://rickandmortyapi.com/api/character/?page=1');
    const res = await req.json();
    await setData(res.results);

    //console.log(res);
  }

  if(data !== null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Rick And Morty API</Text>
        <View>
        <ScrollView contentContainerStyle={{minHeight: 900, paddingVertical:24}}>
        {data.map((item,index) => {
          return (
            <Card style={styles.text} key={index} data={item}/>
          )
        })}
        </ScrollView>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return(
      <Text>
        loading...
      </Text>
    )
  }
 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    minHeight: 900,
  },

  text: {
    color: 'black'
  }
});
