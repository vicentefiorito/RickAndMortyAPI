import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
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
        <ImageBackground source={{ uri: char.image }} style={styles.img} resizeMode="cover">
          <Text style={styles.charName}>{char.name} </Text>
          <Text style={styles.info}>General Info:</Text>
          <Text style={styles.misc}>Gender: {char.gender}</Text>
          <Text style={styles.misc}>Favorite Place: {char.location.name}</Text>
          <Text style={styles.misc}>Species:{char.species}</Text>
          <Text>Status: {char.status}</Text>
          </ImageBackground>
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

  info: {
    flex:1,
    color: "cyan",
    fontSize: 32,
  },

  charName: {
    flex: 1,
    textAlign: "left",
    width: "100%",
    color: "violet",
    marginTop: 32,
    paddingVertical: 8,
    fontSize: 48,
  },
  img: {
   flex:1,
   justifyContent:"center",
  },
  misc: {
    color: 'white',
  }
});
