import { useNavigate } from "react-router-dom";

const NavBar = () => { 

    const navigate = useNavigate();

    return  <nav>
                <span className="logo" onClick={()=>{navigate('/')}}>
                BYCHARI
                </span>

                <div className="nav_menus">
                </div>
            </nav>
    
}

export default NavBar;