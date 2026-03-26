import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getAllDocuments<T>(collectionName: string): Promise<T[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as T[];
}

export async function createDocument<T extends Record<string, unknown>>(
  collectionName: string,
  data: T
) {
  const { id, ...payload } = data as T & { id?: string };
  const ref = await addDoc(collection(db, collectionName), payload);
  return ref.id;
}

export async function upsertDocument<T extends Record<string, unknown>>(
  collectionName: string,
  id: string,
  data: T
) {
  await setDoc(doc(db, collectionName, id), data, { merge: true });
}

export async function removeDocument(collectionName: string, id: string) {
  await deleteDoc(doc(db, collectionName, id));
}