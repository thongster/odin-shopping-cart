import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      fetch("https://fakestoreapi.com/products", { signal })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((data) => setProducts(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchData();
    return () => {
      //   controller.abort();
    };
  }, []);

  return { products, error, loading };
};

export { useProducts };
