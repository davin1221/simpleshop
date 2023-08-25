import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const navigate = useNavigate();

  // 햄버거 선택 여부
  const [burger, setBurger] = useState("burger-bar unclicked");
  const [menu, setMenu] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  
  const location = useLocation();

  // 메뉴 토글
  const UpdateMenu = () => {


    if (!isMenuClicked) {
      setBurger("burger-bar clicked");
      setMenu("menu visible");
    } else {
      setBurger("burger-bar unclicked");
      setMenu("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(()=> {
    if(isMenuClicked) { 
        setIsMenuClicked(false);
        UpdateMenu();
    } 
  },[window.location.pathname]);

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
        <div className="hamburger" onClick={UpdateMenu}>
          <div className={burger}></div>
          <div className={burger}></div>
          <div className={burger}></div>
        </div>
      </div>

      <div className={menu}>
        <div className="cart_area">
            <span onClick={()=> navigate('/cart')}><FontAwesomeIcon icon={faCartShopping} /></span>
            <span><FontAwesomeIcon icon={faEye} /></span>
        </div>
        
        <ul className="category_area">
          <li>NECKLACE</li>
          <li>EARRING</li>
          <li>BRACELET</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
