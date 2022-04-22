import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { useEffect,useRef,useState } from 'react';
import Card from './components/Card';

export default function App() {
  //https://rickandmortyapi.com/api/character/?page=1

  const[data,setData] = useState(null);
  const counter = useRef(1);
  useEffect(() => {
    reset()
  },[])
  
  console.log('Here are results ',data);

   async function getData(){
    const req = await fetch(`https://rickandmortyapi.com/api/character/?page=${counter.current}`);
    const res = await req.json();
    await setData(res.results);
    counter.current++
    //console.log(res);
  }

  async function reset(){
    counter.current = 1;
    getData();
  }

  if(data !== null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{marginTop:32}}>Rick And Morty API</Text>
          <Button
              onPress={getData}
              title="Next Page"
              color="#841584"
            />
            <Button
              onPress={reset}
              title="Reset"
              color="#841584"
            />
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
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    minHeight: 900,
    marginTop:24
  },

  text: {
    color: 'black'
  }
});
