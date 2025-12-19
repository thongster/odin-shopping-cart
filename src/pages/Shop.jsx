import { useOutletContext } from "react-router";
import ShopHeader from "../components/ShopHeader";
import ShopGrid from "../components/ShopGrid";

export default function Shop() {
  return (
    <>
      <ShopHeader />
      <ShopGrid />
    </>
  );
}
