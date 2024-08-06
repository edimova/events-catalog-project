import { useEffect, useState } from "react";
import categoriesAPI from "../api/categories-api";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await categoriesAPI.getAll();
      setCategories(result);
    })();
  }, []);

  return [categories, setCategories];
}

export function useGetOneCaregory(categoryID) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    (async () => {
      const result = await categoriesAPI.getOne(categoryID);
      setCategory(result);
    })();
  }, [categoryID]);

  return [category, setCategory];
}
