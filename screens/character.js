import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
    const res = await res.json();
    console.log(res);
  }

  if (char !== null) {
    return (
      <View>
        <Text>Character</Text>
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
    justifyContent: "center",
  },
});
