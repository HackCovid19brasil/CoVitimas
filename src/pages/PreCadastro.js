import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#00b33c",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});

class PreCadastro extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("Cadastro", { Paciente: true });
          }}
        >
          <Text style={styles.loginText}>SOU PACIENTE</Text>
          {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("Cadastro", { Paciente: false });
          }}
        >
          <Text style={styles.loginText}>SOU DA CENTRAL</Text>
          {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
        </TouchableOpacity>
      </View>
    );
  }
}

export default PreCadastro;
