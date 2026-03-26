"use client"

import { useEffect, useState } from "react";
import {
  deleteDocument,
  saveDocument,
  subscribeToCollection,
} from "@/lib/firestoreCrud";

export function useFirestoreCollection<T extends { id: string }>(
  collectionName: string
) {
  const [items, setItems] = useState<T[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToCollection<T>(collectionName, (data) => {
      setItems(data);
      setIsLoaded(true);
    });

    return () => unsubscribe();
  }, [collectionName]);

  const saveItem = async (item: T) => {
    setIsSaving(true);
    try {
      await saveDocument(collectionName, item.id, item);
    } finally {
      setIsSaving(false);
    }
  };

  const removeItem = async (id: string) => {
    setIsSaving(true);
    try {
      await deleteDocument(collectionName, id);
    } finally {
      setIsSaving(false);
    }
  };

  return {
    items,
    isLoaded,
    isSaving,
    saveItem,
    removeItem,
  };
}