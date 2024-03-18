import { Path, Rect, Svg } from "react-native-svg";

export const MapPointIcon = ({styles}) => {
  return (
    <Svg
      style={styles}
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Rect
        width="24.000000"
        height="24.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <Path
        d="M12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58154 3 12 3C16.4185 3 20 6.29681 20 10.3636C20 16.0909 12 21 12 21Z"
        stroke="#BDBDBD"
        stroke-opacity="1.000000"
        stroke-width="1.000000"
        stroke-linejoin="round"
      />
      <Path
        d="M15 11C15 9.34314 13.6567 8 12 8C10.3433 8 9 9.34314 9 11C9 12.6569 10.3433 14 12 14C13.6567 14 15 12.6569 15 11Z"
        stroke="#BDBDBD"
        stroke-opacity="1.000000"
        stroke-width="1.000000"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
