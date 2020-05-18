import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View} from "react-native";
import Item from "../components/Item";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import { TextInput } from "react-native-gesture-handler";

const style = StyleSheet.create({
  title: {
    color: "#000000",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container1: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#DDD",
  },
  loginBtn: {
    width: "100%",
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
  inputText: {
    height: 50,
    color: "black",
  },
  inputView: {
    width: "98%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    alignSelf:"center",
    alignItems:"center",
    marginLeft:"1%",
    borderRadius: 25,
    height: 100,
    marginBottom: 15,
  },
});

class Diario extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired,
  };
  render() {
    const { navigation } = this.props;
    return (
      <>
        <View style={style.container1}>
          <Text style={style.title}>
            Qual(is) assistência(s) está precisando hoje?
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            backgroundColor: "#DDD",
          }}
        >
          <Item title="COMIDA, ÁGUA E LUZ" />

          <Item title="PRODUTOS DE HIGIENE" />

          <Item title="APOIO PARA SERVIÇOS EXTERNOS" />

          <Item title="APOIO COM FAMILIA DEPENDENTE DE CUIDADOS" />

          <Text style={{ padding: 10, fontWeight: "bold", fontSize: 15 }}>
            {" "}
            OUTRO:
          </Text>
          <View style={style.inputView}>
          <TextInput
            secureTextEntry
            style={style.inputText}
            placeholderTextColor="#003f5c"
           
          />
</View>
          <TouchableOpacity style={style.loginBtn}>
            <Text style={style.loginText}>CONFIRMAR</Text>
            {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Diario;
