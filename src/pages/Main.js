import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MenuItem from "../components/MenuItem";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: "#DDD",
  },
  icon: {
    alignItems: "center",
  },
});

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired,
  };

  state = {
    Paciente: this.props.navigation.getParam("Paciente"),
  };

  render() {
    const { navigation } = this.props;
    const { Paciente } = this.state;

    return (
      <View style={style.container}>
        {Paciente ? (
          <>
            <MenuItem
              onPress={() => {
                navigation.navigate("Diario");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="entypo"
                  name="calendar"
                  color="#00b33c"
                  size={60}
                />
              }
              title="DIÁRIO DOS SINTOMAS"
            />

            <MenuItem
              onPress={() => {
                navigation.navigate("Orientacoes");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="entypo"
                  name="news"
                  color="#00b33c"
                  size={60}
                />
              }
              title="ORIENTAÇÕES"
            />
            <MenuItem
              onPress={() => {
                navigation.navigate("Perfil");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="entypo"
                  name="user"
                  color="#00b33c"
                  size={60}
                />
              }
              title="PERFIL"
            />
            <MenuItem
              onPress={() => {
                navigation.navigate("Assistente");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="ionicons"
                  name="people"
                  color="#00b33c"
                  size={60}
                />
              }
              title="PEDIR ASSISTÊNCIA"
            />
            <MenuItem
              onPress={() => {
                navigation.navigate("Chat");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="entypo"
                  name="chat"
                  color="#00b33c"
                  size={60}
                />
              }
              title="CONVERSE CONOSCO"
            />
            <MenuItem
              onPress={() => {
                navigation.navigate("Servicos");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="font-awesome"
                  name="map-marker"
                  color="#00b33c"
                  size={60}
                />
              }
              title="SERVIÇOS DE SAÚDE E ONGS MAIS PRÓXIMAS"
            />
          </>
        ) : (
          <>
            <MenuItem
              onPress={() => {
                navigation.navigate("Central");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="font-awesome"
                  name="search"
                  color="#00b33c"
                  size={60}
                />
              }
              title="OBSERVAR PACIENTE"
            />
            <MenuItem
              onPress={() => {
                navigation.navigate("PedidoAssistencia");
              }}
              image={
                <Icon
                  styleIcon={style.icon}
                  type="entypo"
                  name="v-card"
                  color="#00b33c"
                  size={60}
                />
              }
              title="SOLICITAÇÕES DE ASSISTÊNCIA"
            />
          </>
        )}
      </View>
    );
  }
}

export default Main;
