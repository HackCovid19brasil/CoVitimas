import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#F5FCFF",
    marginTop: 0,
  },
  perguntas: {
    fontWeight: "bold",
    fontSize: 20,
  },
  respostas: {
    marginTop: 10,
    fontSize: 20,
  },
  items: {
    marginTop: 10,
    fontSize: 20,
    color: "gray",
  },
  imagem: {
    marginTop: 40,
    width: "100%",
    padding: 8,
    height: 230,
    alignItems: "center",
    marginBottom: 20
  },
});

class Orientacoes extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.perguntas}>Como higienizar as mãos?</Text>
          <Image
            style={styles.imagem}
            source={{
              uri:
                "https://static.tuasaude.com/media/article/bc/dd/a-importancia-de-lavar-as-maos_21623_l.jpg",
            }}
          />

          <Text style={styles.perguntas}>
            O que posso fazer para me proteger e evitar transmitir para outras
            pessoas?
          </Text>

          <Text style={styles.respostas}>
            A maioria das pessoas infectadas experimenta uma doença leve e se
            recupera, mas pode ser mais grave para outras pessoas. Mantenha-se
            informado sobre os últimos desenvolvimentos a respeito do COVID-19 e
            faça o seguinte para cuidar da sua saúde e proteger a dos outros:
          </Text>
          <Text style={styles.items}>
            {" "}
            • Lave as mãos com água e sabão ou higienizador à base de álcool
            para matar vírus que podem estar nas suas mãos.
          </Text>
          <Text style={styles.items}>
            {" "}
            • Mantenha pelo menos 1 metro de distância entre você e qualquer
            pessoa que esteja tossindo ou espirrando. Quando alguém tosse ou
            espirra, pulveriza pequenas gotas líquidas do nariz ou da boca, que
            podem conter vírus. Se você estiver muito próximo, poderá inspirar
            as gotículas – inclusive do vírus da COVID-19 se a pessoa que tossir
            tiver a doença.
          </Text>
          <Text style={styles.items}>
            {" "}
            • Evite tocar nos olhos, nariz e boca. As mãos tocam muitas
            superfícies e podem ser infectadas por vírus. Uma vez contaminadas,
            as mãos podem transferir o vírus para os olhos, nariz ou boca. A
            partir daí, o vírus pode entrar no corpo da pessoa e deixá-la
            doente.
          </Text>
          <Text style={styles.items}>
            {" "}
            • Certifique-se de que você e as pessoas ao seu redor seguem uma boa
            higiene respiratória. Isso significa cobrir a boca e o nariz com a
            parte interna do cotovelo ou lenço quando tossir ou espirrar (em
            seguida, descarte o lenço usado imediatamente). Gotículas espalham
            vírus. Ao seguir uma boa higiene respiratória, você protege as
            pessoas ao seu redor contra vírus responsáveis por resfriado, gripe
            e COVID-19.
          </Text>
          <Text style={styles.items}>
            {" "}
            • Fique em casa se não se sentir bem. Se você tiver febre, tosse e
            dificuldade em respirar, procure atendimento médico. Siga as
            instruções da sua autoridade sanitária nacional ou local, porque
            elas sempre terão as informações mais atualizadas sobre a situação
            em sua área.
          </Text>
          <Text style={styles.items}>
            {" "}
            • Pessoas doentes devem adiar ou evitar viajar para as áreas
            afetadas por coronavírus. Áreas afetadas são países, áreas,
            províncias ou cidades onde há transmissão contínua – não áreas com
            apenas casos importados.
          </Text>
          <Text style={styles.items}>
            {" "}
            • Os viajantes que retornam das áreas afetadas devem monitorar seus
            sintomas por 14 dias e seguir os protocolos nacionais dos países
            receptores; e se ocorrerem sintomas, devem entrar em contato com um
            médico e informar sobre o histórico de viagem e os sintomas.
          </Text>
          <Text style={styles.perguntas}>
            Qual é a orientação da OPAS e da OMS no que diz respeito ao uso de
            máscaras?
          </Text>
          <Text style={styles.respostas}>
            A OPAS e a OMS recomendam que as máscaras cirúrgicas sejam usadas
            por:
          </Text>

          <Text style={styles.items}>
            {" "}
            • pessoas com sintomas respiratórios, como tosse ou dificuldade de
            respirar, inclusive ao procurar atendimento médico
          </Text>

          <Text style={styles.items}>
            {" "}
            • profissionais de saúde e pessoas que prestam atendimento a
            indivíduos com sintomas respiratórios
          </Text>

          <Text style={styles.items}>
            {" "}
            • profissionais de saúde, ao entrar em uma sala com pacientes ou
            tratar um indivíduo com sintomas respiratórios
          </Text>

          <Text style={styles.respostas}>
            {" "}
            O uso de máscaras não é necessário para pessoas que não apresentem
            sintomas respiratórios. No entanto, máscaras podem ser usadas em
            alguns países de acordo com os hábitos culturais locais. As pessoas
            que usarem máscaras devem seguir as boas práticas de uso, remoção e
            descarte, assim como higienizar adequadamente as mãos antes e após a
            remoção. Devem também lembrar que o uso de máscaras deve ser sempre
            combinado com as outras medidas de proteção.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Orientacoes;
