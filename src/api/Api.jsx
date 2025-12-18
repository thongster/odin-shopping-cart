import { useState, useEffect } from "react";

const getAllProducts = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      fetch("", { signal })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};

const getFeaturedProducts = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  return <></>;
};

const getOneProduct = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  return <></>;
};

export { getAllProducts, getFeaturedProducts, getOneProduct };
