import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export function subscribeToCollection<T>(
  collectionName: string,
  callback: (items: T[]) => void
) {
  const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    })) as T[];

    callback(items);
  });
}

export async function saveDocument<T extends Record<string, unknown>>(
  collectionName: string,
  id: string,
  data: T
) {
  await setDoc(doc(db, collectionName, id), data, { merge: true });
}

export async function deleteDocument(collectionName: string, id: string) {
  await deleteDoc(doc(db, collectionName, id));
}