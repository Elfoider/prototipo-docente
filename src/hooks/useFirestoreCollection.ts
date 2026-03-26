"use client";

import { useEffect, useState } from "react";
import {
  createDocument,
  getAllDocuments,
  removeDocument,
  upsertDocument,
} from "@/lib/firestoreCrud";

export function useFirestoreCollection<T extends { id: string }>(
  collectionName: string
) {
  const [items, setItems] = useState<T[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const load = async () => {
    try {
      const data = await getAllDocuments<T>(collectionName);
      setItems(data);
    } catch (error) {
      console.error(`Error cargando ${collectionName}:`, error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, [collectionName]);

  const saveItem = async (item: T) => {
    setIsSaving(true);
    try {
      if (item.id) {
        await upsertDocument(collectionName, item.id, item);
      } else {
        const newId = crypto.randomUUID();
        await upsertDocument(collectionName, newId, { ...item, id: newId });
      }
      await load();
    } finally {
      setIsSaving(false);
    }
  };

  const deleteItem = async (id: string) => {
    setIsSaving(true);
    try {
      await removeDocument(collectionName, id);
      await load();
    } finally {
      setIsSaving(false);
    }
  };

  return {
    items,
    isLoaded,
    isSaving,
    saveItem,
    deleteItem,
    reload: load,
  };
}