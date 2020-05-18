import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Assistente from "./pages/Assistente";
import Cadastro from "./pages/Cadastro";
import Central from "./pages/Central";
import Diario from "./pages/Diario";
import EsqueciSenha from "./pages/EsqueciSenha";
import Perfil from "./pages/Perfil";
import Orientacoes from "./pages/Orientacoes";
import Chat from "./pages/Chat";
import PreCadastro from "./pages/PreCadastro";
import Servicos from "./pages/Servicos";
import PedidoAssistencia from "./pages/PedidoAssistencia";
import Familia from "./pages/Familia";
const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Diario: {
        screen: Diario,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Diário",
        },
      },
      Perfil: {
        screen: Perfil,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Meu Perfil",
        },
      },
      Familia: {
        screen: Familia,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Familiar",
        },
      },
      Cadastro: {
        screen: Cadastro,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Cadastro",
        },
      },
      Main,
      Assistente: {
        screen: Assistente,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Assistentes Sociais",
        },
      },
      PedidoAssistencia: {
        screen: PedidoAssistencia,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Pedido de Assistência",
        },
      },
      Chat: {
        screen: Chat,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Chat",
        },
      },
      EsqueciSenha: {
        screen: EsqueciSenha,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Esqueci Senha",
        },
      },
      Central: {
        screen: Central,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Observar Pacientes",
        },
      },
      Orientacoes: {
        screen: Orientacoes,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Orientações",
        },
      },
      PreCadastro: {
        screen: PreCadastro,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },
          headerTitle: "Cadastro",
        },
      },
      Servicos: {
        screen: Servicos,
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
          },

          headerTitle: "Serviços",
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTitle: "CoVitimas",
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
          alignSelf: "center",
          textAlign: "center",
          margin: 70,
        },
        headerStyle: {
          backgroundColor: "#00b33c",
        },
      },
    }
  )
);

export default Routes;
