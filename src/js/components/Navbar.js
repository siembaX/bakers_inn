import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

export const Navbar = () =>{

 const  navLinkStyles = ({ isActive}) => {
         return{
            color: isActive ? '#261B6C' : '#261b6c8c',
         }

 }

    return (
        <div className="nav">
                <NavLink style={navLinkStyles} to="/"><img src={logo} alt="logo" /></NavLink>
            <div className="links">
                <NavLink style={navLinkStyles}  to="/about">About Us</NavLink>
                <NavLink style={navLinkStyles}  to="/products">Products</NavLink>
                <NavLink style={navLinkStyles}  to="/recipes">Recipes</NavLink>
                <NavLink style={navLinkStyles} to="/kids">Kids</NavLink>
                <NavLink to="/contact"><button>Contact</button></NavLink>
            </div>
        </div>
    )
}