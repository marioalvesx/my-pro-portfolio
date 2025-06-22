import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export function useProjects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));

      setProjects(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchData();
  }, []);

  return { projects };
}
