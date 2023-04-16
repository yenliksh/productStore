import basket from "../assets/images/shopping-basket.svg";
import searchIcon from "../assets/images/magnifying-glass.svg";
import { useState } from "react";
import { ProductView } from "../components/ProductView";
import { useNavigate } from "react-router-dom";
import useTitleSearch from "../hooks/useTitleSearch";
import useFetchProducts from "../hooks/useFetchProducts";

export const ProductCatalog: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const products = useFetchProducts();
  const searchResult = useTitleSearch(products, title);

  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      navigate("/book-catalog/" + title);
    }
  }

  return (
    <body className="container">
      <header className="header">
        <h1 className="header-logo">Store</h1>
        <form action="#" className="search header__search">
          <input
            type="text"
            className="search__input"
            placeholder="Search products"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button className="search__button">
            <img src={searchIcon} alt="search" className="search__icon" />
          </button>
        </form>
        <nav className="header-nav">
          <li className="header-nav__item">
            <a href="/" className="header-nav__link">
              Home
            </a>
          </li>
          <li className="header-nav__item">
            <a href={"/book-catalog/"} className="header-nav__link">
              Products
            </a>
          </li>
          <li className="header-nav__item">
            <a href="!#" className="header-nav__link">
              Pages
            </a>
          </li>
          <li className="header-nav__item">
            <a href="!#" className="header-nav__link">
              Shop
            </a>
          </li>
          <li className="header-nav__item">
            <a href="!#" className="header-nav__link">
              Article
            </a>
          </li>
          <li className="header-nav__item">
            <a href="!#" className="header-nav__link">
              Contact
            </a>
          </li>
        </nav>
        <button
          className="btn btn-card"
          onClick={() => {
            navigate("/basket");
          }}
        >
          <img src={basket} alt="basket"></img>
          Cart: 0$
        </button>
        <button className="btn nav-btn"></button>
      </header>
      <section className="books">
        {(searchResult ?? products).map((product, i) => {
          return <ProductView key={i} product={product}></ProductView>;
        })}
      </section>
    </body>
  );
};
