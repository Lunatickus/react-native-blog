import { Pressable, StyleSheet } from "react-native";
import { PostsScreenNavigateIcon } from "./PostsScreenNavigateIcon";
import { CreatePostScreenNavigateIcon } from "./CreatePostScreenNavigateIcon";
import { ProfileScreenNavigateIcon } from "./ProfileScreenNavigateIcon";

export const TabBarButton = (props) => {
  const { onPress, route, accessibilityState } = props;
  let focused = accessibilityState.selected;
  let icon;
  const backgroundColor = focused ? "#FF6C00" : "#FFFFFF";
  const color = focused ? "#FFFFFF" : "#212121";

  switch (route.name) {
    case "Posts":
      icon = (
        <PostsScreenNavigateIcon
          backgroundColor={backgroundColor}
          color={color}
        />
      );
      break;
    case "CreatePost":
      icon = <CreatePostScreenNavigateIcon color={color} />;
      break;
    case "Profile":
      icon = (
        <ProfileScreenNavigateIcon
          backgroundColor={backgroundColor}
          color={color}
        />
      );
      break;
    default:
      break;
  }

  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}
    >
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 70,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginRight: 15,
  },
});
