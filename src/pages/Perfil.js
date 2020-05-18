import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { Card, Icon } from "react-native-elements";
import {
  Image,
  ImageBackground,
  Linking,
  ListView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PropTypes from "prop-types";
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },
  placeIcon: {
    color: "white",
    fontSize: 26,
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  telContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  userCityRow: {
    backgroundColor: "transparent",
  },
  userCityText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  userImage: {
    borderColor: "black",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
  },
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

class Perfil extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired,
  };

  render() {
    const { navigation } = this.props;
    return (
      <>
        <View style={styles.headerContainer}>
          <ImageBackground
            style={styles.headerBackgroundImage}
            
            source={{
              uri:
                "data:image/jpeg;base64,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",
            }}
          >
            <View style={styles.headerColumn}>
              <Image
                style={styles.userImage}
                source={{
                  uri:
                    "https://instagram.fdiq1-1.fna.fbcdn.net/v/t51.2885-19/10986388_786801141427247_2109897975_a.jpg?_nc_ht=instagram.fdiq1-1.fna.fbcdn.net&_nc_ohc=mchPvrPdVqgAX-5eoFV&oh=0466d9b61b60d8323f770fcd92b6d58f&oe=5EEB7209",
                }}
              />
              <Text style={styles.userNameText}>Athena</Text>
              <View style={styles.userAddressRow}>
                <View>
                  <Icon
                    name="place"
                    underlayColor="transparent"
                    iconStyle={styles.placeIcon}
                    onPress={this.onPressPlace}
                  />
                </View>
                <View style={styles.userCityRow}>
                  <Text style={styles.userCityText}>BH, MG</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate("Cadastro", { Paciente: true });
            }}
          >
            <Text style={styles.loginText}>ADCIONAR MEMBRO DA FAMÍLIA</Text>
            {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              navigation.navigate("Familia");
            }}
          >
            <Text style={styles.loginText}>VIZUALIZAR MEMBRO DA FAMÍLIA</Text>
            {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Perfil;
