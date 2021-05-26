import React, { useState } from "react";
import { css } from "aphrodite/no-important";
import navStyle from "../Styles/NavbarStyle";
import logo from "../images/ms-icon.png";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    const target = e.target;
    setValue(target.value);
  };
  return (
    <header className={css(navStyle.navbar)}>
      <Container>
        <div className={css(navStyle.headerTop)}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <nav className={css(navStyle.HeaderNav)}>
            <div className={css(navStyle.headerIcon)}>
              <i class="fas fa-heart"></i>
            </div>
            <div className={css(navStyle.headerIcon)}>
              <i class="fas fa-history"></i>
            </div>
          </nav>
        </div>
        <form className={css(navStyle.headerSearchBlock)}>
          <input
            className={css(navStyle.headerSearch)}
            placeholder="Поиск"
            value={value}
            onChange={onChangeInput}
          />
          <div className={css(navStyle.searchLine)} />
        </form>
      </Container>
    </header>
  );
};

export default Navbar;
