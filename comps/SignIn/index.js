import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./Comps/Title";
import GoogleButton from "./Comps/GoogleButton";
import Or from "./Comps/Or";
import FacebookButton from "./Comps/FacebookButton";

const SignIn = () => {
  return (
    <View>
      <View style={styles.signinCont}>
        <Title />
        <View style={styles.buttonCont}>
          <GoogleButton />
          <Or />
          <FacebookButton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signinCont: {
    flexDirection: "column"
  },
  buttonCont: {
    top: 50
  }
});

export default SignIn;