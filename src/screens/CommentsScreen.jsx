import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Container } from "../components/Container";
import { useRoute } from "@react-navigation/native";
import { SendCommentButton } from "../components/SendCommentButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../redux/posts/posts.selectors";
import { Comment } from "../components/Comment";
import { addComment } from "../redux/posts/postsOperations";

const CommentsScreen = () => {
  const {
    params: { photo, id },
  } = useRoute();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const posts = useSelector(selectPosts);
  const currentPost = posts.find((post) => post.id === id);

  const handleSendComment = () => {
    if (!comment) {
      return;
    }

    dispatch(addComment({ id, comment }));
    setComment('');
  };

  return (
    <Container>
      <View style={styles.container}>
        <Image source={{ uri: photo }} style={styles.image} />
        <FlatList
          style={{width: '100%'}}
          data={currentPost.comments}
          renderItem={({ item }) => <Comment comment={item} />}
          keyExtractor={(item) => item.timestamp}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ position: "relative" }}
        >
          <TextInput
            style={styles.input}
            placeholder="Коментувати..."
            placeholderTextColor={"rgb(189, 189, 189)"}
            value={comment}
            onChangeText={setComment}
          />
          <SendCommentButton sendComment={handleSendComment} />
        </KeyboardAvoidingView>
      </View>
    </Container>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "rgb(232, 232, 232)",
    backgroundColor: "rgb(246, 246, 246)",
    borderRadius: 100,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
  },
});
