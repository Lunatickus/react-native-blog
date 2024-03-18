import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { CommentsIcon } from "./CommentsIcon";
import { MapPointIcon } from "./MapPointIcon";
import { ColoredCommentsIcon } from "./ColoredCommentsIcon";

export const Post = ({ post }) => {
  const { photo, name, locality, coords, comments, id } = post;
  const navigation = useNavigation();

  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: photo }} style={styles.postImage} />
      <Text style={styles.postText}>{name}</Text>
      <View style={styles.postContentWrapper}>
        <Pressable
          style={styles.postComments}
          onPress={() => navigation.navigate("Comments", { photo, id })}
        >
          {comments.length === 0 ? <CommentsIcon /> : <ColoredCommentsIcon />}
          <Text style={styles.postCommentsText}>{comments.length}</Text>
        </Pressable>
        <Pressable
          style={styles.postComments}
          onPress={() => navigation.navigate("Map", { coords, name, locality })}
        >
          <MapPointIcon />
          <Text style={styles.postLocationText}>{locality}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    height: 300,
    width: "100%",
    marginBottom: 32,
  },
  postImage: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postText: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  postContentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postComments: {
    display: "flex",
    gap: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  postCommentsText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  postLocationText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
