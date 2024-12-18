import logo from "assets/images/eco-logo.png";
import userIcon from "assets/images/user-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "styles/header.scss";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <Col>
            <div className="nav__wrapper">
              <div className="logo">
                <img src={logo} alt="" />
                <div>
                  <h1>Multimart</h1>
                </div>
              </div>
              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {nav__link.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav__icons">
                <span className="fav__icon">
                  <i className="ri-heart-line"></i>
                  <span className="badge">1</span>
                </span>
                <span className="cart__icon" onClick={navigateToCart}>
                  <i className="ri-shopping-bag-line"></i>
                  <span className="badge">{totalQuantity}</span>
                </span>
                <span>
                  <Link to="/login">
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={userIcon}
                      alt=""
                    />
                  </Link>
                </span>
                <div className="mobile__menu">
                  <span onClick={menuToggle}>
                    <i className="ri-menu-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
