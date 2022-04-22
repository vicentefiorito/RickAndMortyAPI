import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect,useState } from 'react';

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
      <View style={styles.container}>
        <Text style={styles.text}>Rick And Morty API</Text>
  
        {data.map((item,index) => {
          return (
            <Text style={styles.text} key={index}>
           {item.name} 
            </Text>
          )
        })}
  
        <StatusBar style="auto" />
      </View>
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
    flex: 1,
    backgroundColor: 'teal',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white'
  }
});
