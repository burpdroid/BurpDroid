// import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Home() {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <WebView
        ignoreSslError={true}
        originWhitelist={["*"]}
        source={{
          uri: "http://127.0.0.1:5000",
        }}
        scalesPageToFit={true}
      />
    </View>
  );
}
