import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    width: "100%",
    aspectRatio: 1,
    padding: 10,
  },
  view1: {
    backgroundColor: "#ffff56",
    width: "100%",
    height: "30%",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  view2: {
    backgroundColor: "#88ff56",
    width: "100%",
    height: "30%",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  view3: {
    backgroundColor: "#ff3e4f",
    width: "100%",
    height: "30%",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  avatar: {
    padding: 5,
    alignSelf: "center",
  },
  textos: {
    flexDirection: "column",
    marginTop: 30,
    marginLeft: 6,
  },
});

class Central extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container2}>
        <View style={styles.view1}>
          <Avatar
            size="large"
            rounded
            containerStyle={styles.avatar}
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
          />
          <View style={styles.textos}>
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              Carla, 25 anos. Belo Horizonte, MG
            </Text>
            <Text style={{ alignSelf: "center" }}>
              Início dos Sintomas: 16/05/2020
            </Text>
          </View>
        </View>

        <View style={styles.view2}>
          <Avatar
            size="large"
            rounded
            containerStyle={styles.avatar}
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            }}
          />
          <View style={styles.textos}>
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              Arthur, 30 anos. Belo Horizonte, MG
            </Text>
            <Text style={{ alignSelf: "center" }}>
              Início dos Sintomas: 05/05/2020
            </Text>
          </View>
        </View>

        <View style={styles.view3}>
          <Avatar
            size="large"
            rounded
            containerStyle={styles.avatar}
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
            }}
          />
          <View style={styles.textos}>
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              Marcos, 50 anos. Belo Horizonte, MG
            </Text>
            <Text style={{ alignSelf: "center" }}>
              Início dos Sintomas: 12/05/2020
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Central;
