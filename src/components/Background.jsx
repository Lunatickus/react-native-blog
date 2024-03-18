import { ImageBackground, StyleSheet } from "react-native";
import BacckgroundImage from "../images/PhotoBG.jpeg";

export const Background = ({ children }) => {
  return (
    <ImageBackground
      source={BacckgroundImage}
      resizeMode="cover"
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
