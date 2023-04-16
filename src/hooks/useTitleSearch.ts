import { useEffect, useState } from "react";
import { IProduct } from "../models/Product";

export default function useTitleSearch(products: IProduct[], title: string) {
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>();

  useEffect(() => {
    const searched = products.filter((el) => el.title.includes(title));
    if (!searched) return;
    setSearchedProducts(searched);
  }, [products, title]);

  return searchedProducts;
}
