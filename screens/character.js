import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function Character({ route }) {
  //
  const { data } = route.params;
  const [char, setChar] = useState(null);
  console.log(data);
  // console.log(navigation);

  useEffect(() => {
    helper();
  }, []);

  async function helper() {
    const req = await fetch(
      `https://rickandmortyapi.com/api/character/${data.id}`
    );
    const res = await req.json();
    console.log(res);
    await setChar(res);
  }

  if (char !== null) {
    return (
      <View style={styles.container}>
        <Text style={styles.charName}>{char.name} </Text>
        <Text>{char.gender}</Text>
        <Text>{char.location.name}</Text>
        <Image source={{uri: char.image}} style={styles.logo}/>
        <Text>Species:{char.species}</Text>
        <Text>Status: {char.status}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Not Found...</Text>
      </View>
    );
  }
}

export default Character;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  charName: {
      flex: 1,
      textAlign:"left",
      color: "violet",
      marginTop: 32,
      paddingVertical: 8,
      fontSize:32


  },
  logo: {
    flex: 5,
    width: "135%",
    height:"60%",
    alignItems:"flex-end",
    paddingLeft: 8
  },
});
