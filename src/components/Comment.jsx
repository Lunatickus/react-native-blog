import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectUserAvatar } from "../redux/auth/auth.selectors";

export const Comment = ({ comment }) => {
  const { data, timestamp } = comment;
  const avatar = useSelector(selectUserAvatar);

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <Text style={styles.comment}>{data}</Text>
        <Text style={styles.commentDate}>{timestamp}</Text>
      </View>
      <Image source={{ uri: avatar }} style={styles.commentAvatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
    marginBottom: 24,
  },
  commentContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopRightRadius: 0,
    padding: 16,
  },
  comment: {
    color: "#212121",
    fontFamily: "Roboto-Light",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 8,
  },
  commentDate: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Light",
    fontSize: 10,
    lineHeight: 12,
  },
  commentAvatar: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: "#212121",
  },
});
