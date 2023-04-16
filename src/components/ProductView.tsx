import { IProduct } from "../models/Product";
import heartOutlined from "../assets/images/heart-outlined.svg";

export const ProductView: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="book">
      <img src={product.thumbnail} alt="house 1" className="book__img" />
      <img className="book__like" src={heartOutlined} alt="book"></img>
      <h5 className="book__name">{product.title}</h5>
      <h6 className="book__author">{product.description}</h6>
      <h5 className="book__price">{product.price + "$"}</h5>
      <button className="btn book__btn">Add to bag</button>
    </div>
  );
};
