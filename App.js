import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#00b33c" />
        <Routes />
      </>
    );
  }
}
