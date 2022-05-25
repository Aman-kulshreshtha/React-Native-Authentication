import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { React, useState } from "react";
import { auth } from "../firebase-config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailChangeHandler = (text) => {
    setEmail(text);
  };

  const resetPassword = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        Alert.alert("Success ", "Sent a password reset link to " + email, [
          { title: "okay" },
        ]);
      })
      .catch(function (error) {
        Alert.alert("Error", error.message, [{ title: "Okay" }]);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={emailChangeHandler}
        />
      </View>

      <View style={styles.btnContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"green"} />
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                resetPassword();
              }}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Send Password Reset Link</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    color: "#99cfe0",
    fontWeight: "700",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    marginTop: 50,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#99cfe0",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnContainer: {
    flex: 1,
    width: "60%",

    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  btnOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#99cfe0",
    borderWidth: 2,
  },
  btnText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  btnOutlineText: {
    color: "#99cfe0",
    fontWeight: "700",
    fontSize: 16,
  },
});
