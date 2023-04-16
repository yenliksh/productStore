export const getProducts = async (skip: number = 0) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=10`
    );
    const json = await res.json();
    return json;
  } catch (e) {
    console.log("error", e);
  }
};
