import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-elements";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
let { height, width } = Dimensions.get("window");
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5FCFF",
    marginTop: 0,
  },
  container2: {
    flex: 1,
    backgroundColor: "#FCFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    width: "70%",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 25,
  },
  text: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  loginBtn: {
    width: "70%",
    marginTop: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00b33c",
    backgroundColor: "#00b33c",
    borderRadius: 10,
    marginBottom:15,
    marginLeft: 5,
    height: "75%",
    padding: 10,
  },
  loginBtnTitle: {
    color: "white",
    width: "100%",
  },
  list: {
    width: "30%",
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 25,
  },
});

class Cadastro extends Component {
  state = {
    Paciente: this.props.navigation.getParam("Paciente"),
  };

  static propTypes = {
    navigation: PropTypes.any.isRequired,
  };

  render() {
    const { navigation } = this.props;
    const { Paciente } = this.state;

    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <>
              <Text style={styles.text}>Nome</Text>
              <TextInput
                placeholder=""
                style={styles.input}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={styles.text}>Idade</Text>
              <TextInput
                placeholder=""
                style={styles.input}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={styles.text}>Sexo</Text>
              <TextInput
                placeholder=" Feminino     ⋁"
                style={styles.list}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={styles.text}>Se feminino, está gestante?</Text>
              <TextInput
                placeholder=" Não             ⋁"
                style={styles.list}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={styles.text}>Telefone</Text>
              <TextInput
                placeholder=""
                style={styles.input}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={styles.text}>CPF</Text>
              <TextInput
                placeholder=""
                style={styles.input}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={styles.text}>CEP</Text>
              <TextInput
                placeholder=""
                style={styles.input}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />
              <Text style={styles.text}>Complemento</Text>
              <TextInput
                placeholder=""
                style={styles.input}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={{ fontSize: 20, marginLeft:10 }}>
                Dados laborais e de formação educacional
              </Text>

              <Text style={styles.text}>Trabalha de carteira assinada:</Text>
              <TextInput
                placeholder=" Não             ⋁"
                style={styles.list}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />

              <Text style={styles.text}>Trabalha como autônomo?</Text>
              <TextInput
                placeholder=" Não             ⋁"
                style={styles.list}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />
              <Text style={styles.text}>Está estudando?</Text>
              <TextInput
               placeholder=" Não             ⋁"
               style={styles.list}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />
              <Text style={styles.text}>Qual seu nível educacional? </Text>
              <TextInput
                placeholder=" Nunca estudei ⋁"
                style={styles.list}
                placeholderTextColor={"black"}
                numberOfLines={2}
              />
            </>

            {Paciente ? (
              <>
                <Text style={{ fontSize: 20, marginLeft:10 }}>Dados de saúde</Text>

                <Text style={styles.text}>
                  Você faz tratamento ou acompanhamento de saúde para qual (is)
                  dessa (s) doenças:
                </Text>
                <TextInput
                  placeholder=" HIpertensão  ⋁"
                  style={styles.list}
                  placeholderTextColor={"black"}
                  numberOfLines={2}
                />

                <Text style={styles.text}>Possui plano de saúde?</Text>
                <TextInput
                 placeholder=" Não             ⋁"
                 style={styles.list}
                  placeholderTextColor={"black"}
                  numberOfLines={2}
                />

                <Text style={{ fontSize: 20, marginLeft:10 }}>
                  Aspectos e condições de moradia e dos residentes
                </Text>

                <Text style={styles.text}>
                  Sobre os moradores da residência:
                </Text>
                <TextInput
                 placeholder=" Moro Sozinho ⋁"
                 style={styles.list}
                  placeholderTextColor={"black"}
                  numberOfLines={2}
                />
                <Text style={styles.text}>
                  Qual a área aproximada da sua residência?{" "}
                </Text>
                <TextInput
                  placeholder=" Menos de 30m2 ⋁"
                  style={{ width: "35%",
                  margin: 10,
                  borderColor: "black",
                  borderWidth: 1,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  borderBottomLeftRadius: 5,
                  height: 25,}}
                  placeholderTextColor={"black"}
                  numberOfLines={2}
                />

                <Text style={styles.text}>
                  Número de idosos acima de 65 anos na residência
                </Text>
                <TextInput
                  placeholder=" 1                      ⋁"
                  style={styles.list}
                  placeholderTextColor={"black"}
                  numberOfLines={2}
                />
                <Text style={styles.text}>
                  Número de crianças de 0 a 12 anos na residência{" "}
                </Text>
                <TextInput
                  placeholder=" 1                      ⋁"
                  style={styles.list}
                  placeholderTextColor={"black"}
                  numberOfLines={2}
                />
              </>
            ) : (
              <>
                <Text style={{ fontSize: 20, marginLeft:10 }}>
                  COLOQUE AQUI AS PERGUNTAS PARA O CADASTRO DA CENTRAL
                </Text>
                
              </>
            )}
            <View style={styles.container2}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  navigation.navigate("Main", { Paciente });
                }}
              >
                <Text style={styles.loginText}>CADASTRAR</Text>
                {/*dava para usar Button, mas com o TouchableOpacity dá para deixar mais bonito*/}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Cadastro;
