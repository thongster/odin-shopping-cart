import ShopHeader from "../components/ShopHeader";
import ShopGrid from "../components/ShopGrid";
import ProductAdded from "../components/ProductAdded";
import { useState, useEffect } from "react";

export default function Shop() {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!isAdded) return;

    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAdded]);

  return (
    <>
      <ShopHeader />
      <ShopGrid setIsAdded={setIsAdded} />
      <ProductAdded isAdded={isAdded} />
    </>
  );
}
