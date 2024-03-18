import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export const CameraIcon = () => {
  return (
    <Svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
      <Defs>
        <ClipPath>
          <Rect
            width="24.000000"
            height="24.000000"
            fill="white"
            fill-opacity="0"
          />
        </ClipPath>
      </Defs>
      <G clip-path="url(#clip36_45)">
        <Path
          d="M15.19 12C15.19 13.76 13.76 15.2 12 15.2C10.23 15.2 8.79 13.76 8.79 12C8.79 10.23 10.23 8.79 12 8.79C13.76 8.79 15.19 10.23 15.19 12Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <Path
          d="M9 2L7.16 4L4 4C2.89 4 2 4.9 2 6L2 18C2 19.1 2.89 20 4 20L20 20C21.1 20 22 19.1 22 18L22 6C22 4.9 21.1 4 20 4L16.83 4L15 2L9 2ZM12 17C9.24 17 7 14.76 7 12C7 9.23 9.24 7 12 7C14.75 7 17 9.23 17 12C17 14.76 14.75 17 12 17Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </G>
    </Svg>
  );
};
