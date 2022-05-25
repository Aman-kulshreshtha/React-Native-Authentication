import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { React, useState } from "react";
import { auth } from "../firebase-config";
import { Alert } from "react-native";
import { provider } from "../firebase-config";
import { ActivityIndicator } from "react-native";
const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = () => {
    setIsLoading(true);

    if (isLogin) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          Alert.alert("Ooops!", err.message, [{ title: "Okay" }]);
        });
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          Alert.alert("Ooops!", error.message, [{ title: "Okay" }]);
        });
    }
  };

  const emailChangeHandler = (text) => {
    setEmail(text);
  };

  const passwordChangeHandler = (text) => {
    setPassword(text);
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
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={passwordChangeHandler}
          secureTextEntry
        />
      </View>

      <View style={styles.btnContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={"green"} />
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                handleAuth();
              }}
              style={styles.btn}
            >
              <Text style={styles.btnText}>
                {isLogin ? "Login" : "Sign Up"}
              </Text>
            </TouchableOpacity>

            <Text style={styles.separator}>Or</Text>
            <TouchableOpacity
              onPress={() => {
                setIsLogin(!isLogin);
              }}
              style={[styles.btn, styles.btnOutline]}
            >
              <Text style={styles.btnOutlineText}>
                {isLogin ? "Register a new account" : "Back to Log In"}
              </Text>
            </TouchableOpacity>

            {isLogin ? (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(":)", "we will implement it later!", [
                    { title: "okay" },
                  ]);
                }}
                style={[styles.btn, styles.btnOutline]}
              >
                <Text
                  style={styles.btnOutlineText}
                  onPress={() => {
                    navigation.navigate("ForgotPassword");
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            ) : null}
          </>
        )}
      </View>
    </View>
  );
};

export default AuthScreen;

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
