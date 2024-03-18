import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { CreatePostScreenTrashButton } from "../components/CreatePostScreenTrashButton";
import { TextInput } from "react-native-gesture-handler";
import { MapPointIcon } from "../components/MapPointIcon";
import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { CameraIcon } from "../components/CameraIcon";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/posts/postsOperations";

const CreatePostsScreen = () => {
  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const disabled = !name || !locality || !photo;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const askPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    };
    askPermission();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleRemovePost = () => {
    setName("");
    setLocality("");
    navigation.navigate("Posts");
    setPhoto(null);
  };

  const handleCreatePost = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const post = { photo, name, locality, coords, comments: [] };
    dispatch(addPost(post))
    navigation.navigate("Posts");
    setName("");
    setLocality("");
    setPhoto(null);
  };

  return (
    <Container>
      <View style={styles.container}>
        {photo ? (
          <ImageBackground
            style={styles.loadImage}
            source={{ uri: photo }}
            resizeMode="cover"
          >
            <TouchableOpacity
              style={styles.loadImageButton}
              onPress={() => setPhoto(null)}
            >
              <CameraIcon />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <Camera
            style={styles.loadImage}
            type={Camera.Constants.Type.back}
            ref={setCameraRef}
          >
            <TouchableOpacity
              style={styles.loadImageButton}
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();
                  setPhoto(uri);
                  await MediaLibrary.createAssetAsync(uri);
                }
              }}
            >
              <CameraIcon />
            </TouchableOpacity>
          </Camera>
        )}
        <Text style={styles.loadImageText}>Завантажте фото</Text>
        <KeyboardAvoidingView
          style={{ width: "100%", marginBottom: 32 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
        >
          <TextInput
            style={styles.nameInput}
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={setName}
          />
          <View style={{ width: "100%" }}>
            <TextInput
              style={styles.locationInput}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              value={locality}
              onChangeText={setLocality}
            />
            <MapPointIcon styles={{ position: "absolute", top: 13, left: 0 }} />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={disabled ? styles.disabledPublishButton : styles.publishButton}
          disabled={disabled}
          onPress={handleCreatePost}
        >
          <Text
            style={
              disabled
                ? styles.disabledPublishButtonText
                : styles.publishButtonText
            }
          >
            Опубліковати
          </Text>
        </TouchableOpacity>
        <CreatePostScreenTrashButton onPress={handleRemovePost} />
      </View>
    </Container>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  loadImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginBottom: 8,
  },
  loadImageButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  loadImageText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 32,
    alignSelf: "flex-start",
  },
  nameInput: {
    width: "100%",
    height: 50,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,
  },
  locationInput: {
    width: "100%",
    height: 50,
    color: "#212121",
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 28,
  },
  publishButton: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  publishButtonText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  disabledPublishButton: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  disabledPublishButtonText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
