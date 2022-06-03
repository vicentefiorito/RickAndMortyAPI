import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground, Alert, Modal, TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as Speech from "expo-speech";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

function Character({ route }) {
  //
  const { data } = route.params;
  const [char, setChar] = useState(null);
  const [modalVisible,setModalVisible] = useState(false);
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
    //console.log("hereee -->", char);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: char.image }}
          resizeMode="cover"
          style={styles.image}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.5 )"]}
            style={styles.background}
          >
            <Text style={styles.title}>{char.name}</Text>

            <View style={styles.row}>
              <Text style={styles.textRight}>{char.gender}</Text>
              <FontAwesome name="intersex" size={32} color="#2185d0" />
            </View>
            <View style={styles.row}>
              <Text style={styles.textRight}>{char.location.name}</Text>
              <Ionicons name="home" size={32} color="#2185d0" />
            </View>
            <View style={styles.row}>
              <Text style={styles.textRight}>{char.species}</Text>
              <Ionicons name="man" size={32} color="#2185d0" />
            </View>
            <View style={styles.row}>
              <Text style={styles.textRight}>{char.status}</Text>
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View>
            {/* <Text style={styles.textRight}>{char.episode[0]}</Text> */}
            {/* Has Additional Api */}

            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.rowText}>View Episodes</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default Character;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 42,
    width: "100%",
    // lineHeight: 84,
    padding: 8,
    fontWeight: "bold",
    textAlign: "left",
    // borderColor: "red",
    // borderWidth: 1,
    backgroundColor: "transparent",
  },
  textRight: {
    color: "white",
    fontSize: 24,
    // width: "100%",
    padding: 8,
    textAlign: "right",
    // borderBottomColor: "red",
    // borderBottomWidth: 1,
    backgroundColor: "transparent",
  },
  textLeft: {
    color: "white",
    fontSize: 24,
    // width: "100%",
    padding: 8,
    textAlign: "left",
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  row: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "transparent",
    margin: 8,
    paddingVertical: 8,
    borderRadius: 16,
  },
  buttonRow: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#2185d0",
    margin: 8,
    padding: 8,
    borderRadius: 16,
  },
  rowText: {
    color: "white",
    fontSize: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex:1,
    margin: 16,
    width:'90%',
    alignSelf:'center',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

