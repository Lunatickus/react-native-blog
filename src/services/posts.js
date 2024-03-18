import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../config";
import { getCurrentUser } from "./authentication";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  timezone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export const writeDataToFirestore = async (post) => {
  try {
    const { uid } = await getCurrentUser();
    const docRef = await addDoc(collection(db, "posts"), {
      ...post,
      owner: uid,
    });
    return { id: docRef.id, ...post, owner: uid };
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getDataFromFirestore = async () => {
  try {
    const { uid } = await getCurrentUser();
    const snapshot = await getDocs(
      query(collection(db, "posts"), where("owner", "==", uid))
    );
    const posts = snapshot.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return { id, ...data };
    });
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateDataInFirestore = async (docId, data) => {
  try {
    const { uid } = await getCurrentUser();
    const ref = doc(db, "posts", docId);
    const posts = await getDataFromFirestore();
    const { comments } = posts.find((post) => post.id === docId);
    const timestamp = new Date().toLocaleString("uk-UA", options);

    await updateDoc(ref, {
      comments: [...comments, { data, timestamp }],
    });
    return { data, timestamp, owner: uid, postId: docId };
  } catch (error) {
    console.log(error);
  }
};
