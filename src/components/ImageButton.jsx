import { TouchableOpacity, View } from "react-native";
import { Circle, Path, Svg } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { selectUserAvatar } from "../redux/auth/auth.selectors";
import { changeAvatar } from "../redux/auth/authOperations";

export const ImageButton = ({ style }) => {
  const dispatch = useDispatch();
  const avatar = useSelector(selectUserAvatar);

  const uploadImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    dispatch(changeAvatar(result.assets[0].uri));
  };

  return (
    <View style={style}>
      {!avatar && (
        <TouchableOpacity onPress={uploadImage}>
          <Svg width="25" height="25" viewBox="0 0 25 25">
            <Circle
              cx="12.500000"
              cy="12.500000"
              r="12.000000"
              fill="#FFFFFF"
              stroke="#FF6C00"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
            />
            <Path
              d="M13 6L12 6L12 12L6 12L6 13L12 13L12 19L13 19L13 13L19 13L19 12L13 12L13 6Z"
              clip-rule="evenodd"
              fill="#FF6C00"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </Svg>
        </TouchableOpacity>
      )}
      {avatar && (
        <TouchableOpacity onPress={() => dispatch(changeAvatar(''))}>
          <Svg
            width="36.000000"
            height="36.000000"
            viewBox="0 0 36 36"
            fill="none"
          >
            <Circle
              r="12.500000"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 17.5 17.5)"
              fill="#FFFFFF"
              fill-opacity="1.000000"
            />
            <Circle
              r="12.000000"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 17.5 17.5)"
              stroke="#E8E8E8"
              stroke-opacity="1.000000"
              stroke-width="1.000000"
            />
            <Path
              d="M13.2576 12.55L12.5505 13.2572L16.7932 17.4998L12.5505 21.7424L13.2576 22.4496L17.5002 18.2069L21.7429 22.4496L22.45 21.7424L18.2073 17.4998L22.45 13.2572L21.7429 12.55L17.5002 16.7927L13.2576 12.55Z"
              clip-rule="evenodd"
              fill="#BDBDBD"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </Svg>
        </TouchableOpacity>
      )}
    </View>
  );
};
