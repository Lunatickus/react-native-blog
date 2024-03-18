import { TouchableOpacity } from "react-native";
import { Path, Rect, Svg } from "react-native-svg";
import { useDispatch } from "react-redux";
import { LogOut } from "../redux/auth/authOperations";

export const LogOutButton = ({ styles }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles}
      onPress={() => {
        dispatch(LogOut());
      }}
    >
      <Svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
        <Rect
          width="24.000000"
          height="24.000000"
          fill="#FFFFFF"
          fill-opacity="0"
        />
        <Path
          d="M10 22L5 22C3.89551 22 3 21.1046 3 20L3 4C3 2.89545 3.89551 2 5 2L10 2"
          stroke="#BDBDBD"
          stroke-opacity="1.000000"
          stroke-width="1.000000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <Path
          d="M17 16L21 12L17 8"
          stroke="#BDBDBD"
          stroke-opacity="1.000000"
          stroke-width="1.000000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <Path
          d="M21 12L9 12"
          stroke="#BDBDBD"
          stroke-opacity="1.000000"
          stroke-width="1.000000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};
