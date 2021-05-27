// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Linking,
} from "react-native";
import axios from "axios";
import { NativeRouter, Route, Link } from "react-router-native";
import Modal from "react-native-modal";
import Home from "./Home";
import Clipboard from "@react-native-clipboard/clipboard";

export default function App() {
  const [online, setOnline] = useState(false);
  const Checkstatus = () => {
    axios
      .get("http://127.0.0.1:5000")
      .then((res) => {
        setOnline(true);
      })
      .catch((err) => {
        setOnline(false);
      });
  };

  const init = ({}) => {
    return (
      <View style={{ flex: 1, overflow: "hidden" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18, color: "#1a1a1a", marginBottom: 20 }}>
            Proxy server is online
          </Text>
          <TouchableOpacity>
            <Link to="/Home" underlayColor="#1a1a1a">
              <Text
                style={{
                  color: "#1a1a1a",
                  borderWidth: 1,
                  borderColor: "#1a1a1a",
                  borderRadius: 0,
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  fontSize: 15,
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                connect to proxy
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
        <View
          style={{
            bottom: 0,
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("fdfgjg");
              Linking.openURL("https://www.hacksec.in/privacy/");
            }}
          >
            <Text style={{ margin: 10 }}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("fdfgjg");
              Linking.openURL("https://www.hacksec.in/terms/");
            }}
          >
            <Text style={{ margin: 10 }}>Terms and conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const setup_sh =
    "curl -s -L https://raw.githubusercontent.com/burpdroid/burpdroid-proxy/main/setup.sh | bash";

  const copyToClipboard = () => {
    Clipboard.setString(setup_sh);
    ToastAndroid.show("command copied successfully!", ToastAndroid.SHORT);
  };

  useEffect(() => {
    StatusBar.setHidden(true);
  }, [online]);
  useEffect(() => {
    Checkstatus();
  });
  if (online) {
    return (
      <NativeRouter>
        <Route exact path="/" component={init} />
        <Route exact path="/Home" component={Home} />
      </NativeRouter>
    );
  } else {
    return (
      <View style={{ flex: 1, overflow: "hidden" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#1a1a1a" }}>
            Proxy server is offline
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginBottom: 20,
              marginTop: 20,
              color: "#1a1a1a",
            }}
          >
            Please start the server first then press the connect to proxy
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                marginBottom: 10,
                color: "white",
                borderColor: "black",
                borderWidth: 2,
                paddingLeft: 15,
                paddingRight: 10,
                backgroundColor: "black",
                borderRadius: 15,
                paddingTop: 2,
              }}
              onPress={toggleModal}
            >
              Help
            </Text>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            <View
              style={{
                height: "30%",
                borderRadius: 15,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                color: "black",
                padding: 15,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: 3,
                  }}
                >
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontSize: 12 }}>
                      Install termux from F-Droid. copy the given command below
                      and paste it in your termux terminal.
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL("https://www.hacksec.in/burpdroid.pdf");
                      }}
                    >
                      <Text style={{ fontSize: 12 }}>
                        click here to see full setup tutorial
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_HpWmvT1J82KQo-76asIKr0bitg0gFd7XSdi_F3DJ8byPe3E5MoiPpx7mRW1ghjjz-k&usqp=CAU",
                    }}
                  />
                </View>
                <TouchableOpacity onPress={() => copyToClipboard()}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 7,
                      backgroundColor: "#b0b0b0",
                      padding: 3,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "bold",
                        marginLeft: 5,
                      }}
                    >
                      Click here to copy the command
                    </Text>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        borderLeftWidth: 2,
                        borderColor: "black",
                      }}
                      source={{
                        uri: "https://cdn.iconscout.com/icon/free/png-256/copy-197-1172885.png",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 12 }}>
                To start proxy server type{" "}
                <Text
                  style={{ fontSize: 12, color: "green", fontWeight: "bold" }}
                >
                  burpdroid
                </Text>{" "}
                in your termux terminal
              </Text>

              <Text
                onPress={toggleModal}
                style={{
                  backgroundColor: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Close
              </Text>
            </View>
          </Modal>
          <TouchableOpacity>
            <Button
              title="connect to proxy"
              color="#1a1a1a"
              onPress={() => {
                setOnline(true);
                setOnline(false);
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            bottom: 0,
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("fdfgjg");
              Linking.openURL("https://www.hacksec.in/privacy/");
            }}
          >
            <Text style={{ margin: 10 }}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("fdfgjg");
              Linking.openURL("https://www.hacksec.in/terms/");
            }}
          >
            <Text style={{ margin: 10 }}>Terms and conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
