import { IProduct } from "../models/Product";

export const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="basket__item">
      <img
        src={product.thumbnail}
        alt="house 1"
        className="basket__item__img"
      />
      <div className="basket__item__details">
        <h5 className="basket__item__name">{product.title}</h5>
        <h6 className="basket__item__author">{product.description}</h6>
        <button className="btn basket__item__btn">Remove</button>
      </div>
      <h2 className="basket__item__price">{product.price + "$"}</h2>
    </div>
  );
};
