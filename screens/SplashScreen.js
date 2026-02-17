import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const run = async () => {
      // durasi splash (ms). 5000 = 5 detik
      await new Promise((r) => setTimeout(r, 3000));

      const userStr = await AsyncStorage.getItem("user");
      if (userStr) {
        navigation.reset({ index: 0, routes: [{ name: "Main" }] });
      } else {
        navigation.reset({ index: 0, routes: [{ name: "Login" }] });
      }
    };

    run();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff", // kalau mau putih ganti "#fff"
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 450,
    height: 450,
  },
});
