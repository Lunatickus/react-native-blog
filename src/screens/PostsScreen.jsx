import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserAvatar,
  selectUserEmail,
  selectUserLogin,
} from "../redux/auth/auth.selectors";
import { selectPosts } from "../redux/posts/posts.selectors";
import { useEffect } from "react";
import { fetchPosts } from "../redux/posts/postsOperations";

const PostsScreen = () => {
  const dispatch = useDispatch();
  const login = useSelector(selectUserLogin);
  const email = useSelector(selectUserEmail);
  const avatar = useSelector(selectUserAvatar);
  const posts = useSelector(selectPosts);
  const reversedPosts = [...posts].reverse();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {avatar ? (
          <Image style={styles.image} source={{ uri: avatar }} />
        ) : (
          <View style={styles.image} />
        )}
        <View style={styles.textWrapper}>
          <Text style={styles.textLogin}>{login}</Text>
          <Text style={styles.textEmail}>{email}</Text>
        </View>
      </View>
      <FlatList
        data={reversedPosts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#212121CC",
  },
  textWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 32,
  },
  textLogin: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  textEmail: {
    color: "#212121CC",
    fontFamily: "Roboto-Light",
    fontSize: 11,
    lineHeight: 13,
  },
});
