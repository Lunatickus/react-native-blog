import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export const PostsScreenNavigateIcon = ({backgroundColor, color}) => {
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
      <G clip-path="url(#clip12_105)">
        <Rect
          id="feather-icon / grid"
          width="24.000000"
          height="24.000000"
          transform="translate(8.000000 8.000000)"
          fill={backgroundColor}
          fill-opacity="1.000000"
        />
        <Path
          d="M18 11L18 18L11 18L11 11L18 11Z"
          stroke={color}
          stroke-opacity="0.800000"
          stroke-width="1.000000"
          stroke-linejoin="round"
        />
        <Path
          d="M29 11L29 18L22 18L22 11L29 11Z"
          stroke={color}
          stroke-opacity="0.800000"
          stroke-width="1.000000"
          stroke-linejoin="round"
        />
        <Path
          d="M29 22L29 29L22 29L22 22L29 22Z"
          stroke={color}
          stroke-opacity="0.800000"
          stroke-width="1.000000"
          stroke-linejoin="round"
        />
        <Path
          d="M18 22L18 29L11 29L11 22L18 22Z"
          stroke={color}
          stroke-opacity="0.800000"
          stroke-width="1.000000"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
};
