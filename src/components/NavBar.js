import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();

  // 햄버거 선택 여부
  const [burger, setBurger] = useState("burger-bar unclicked");
  const [menu, setMenu] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // 메뉴 토글
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurger("burger-bar clicked");
      setMenu("menu visible");
    } else {
      setBurger("burger-bar unclicked");
      setMenu("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav>
      <span
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        BYCHARI
      </span>

      <div className="hamburger_area">
        <div className="hamburger" onClick={updateMenu}>
          <div className={burger}></div>
          <div className={burger}></div>
          <div className={burger}></div>
        </div>
      </div>

      <div className={menu}>
        <div className="cart_a">
            <span>Cart</span>
            <span>Recently view products</span>
        </div>
        
        <ul className="nav_category">
          <li>NECKLACE</li>
          <li>EARRING</li>
          <li>BRACELET</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
