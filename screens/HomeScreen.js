import { StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";
import { Button } from "react-native";
import { auth } from "../firebase-config";
import { ActivityIndicator } from "react-native";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const logoutHandler = () => {
    setIsLoading(true);
    auth
      .signOut()
      .then(() => {
        setIsLoading(false);
        console.log("logged Out");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  };
  return (
    <View>
      <Text>HomeScreen</Text>

      {isLoading ? (
        <ActivityIndicator size={"large"} color="green" />
      ) : (
        <Button title="Log Out" onPress={logoutHandler} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
