import { useEffect, useState } from "react";
import { getProducts } from "../api/product";
import { IProduct } from "../models/Product";

export default function useFetchProducts() {
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) <
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  const fetchData = async () => {
    setTimeout(async () => {
      const result = await getProducts(page * 10);
      setPage(page + 1);
      setProducts((prev) => [...prev, ...result.products]);
    }, 1000);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };

  return products;
}
