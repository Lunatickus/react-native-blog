import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export const ProfileScreenNavigateIcon = ({backgroundColor, color}) => {
  return (
    <Svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none">
      <Defs>
        <ClipPath>
          <Rect
            width="40.000000"
            height="40.000000"
            fill="white"
            fill-opacity="0"
          />
        </ClipPath>
      </Defs>
      <G clip-path="url(#clip12_119)">
        <Rect
          width="24.000000"
          height="24.000000"
          transform="translate(8.000000 8.000000)"
          fill={backgroundColor}
          fill-opacity="0"
        />
        <Path
          d="M28 29L28 27C28 24.7909 26.209 23 24 23L16 23C13.791 23 12 24.7909 12 27L12 29"
          stroke={color}
          stroke-opacity="0.800000"
          stroke-width="1.000000"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <Path
          d="M24 15C24 12.7909 22.209 11 20 11C17.791 11 16 12.7909 16 15C16 17.2091 17.791 19 20 19C22.209 19 24 17.2091 24 15Z"
          stroke={color}
          stroke-opacity="0.800000"
          stroke-width="1.000000"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
};
