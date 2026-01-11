import { NavLink } from "react-router-dom"
const Header = () => {
    const navi =[
        { name: "home", link: "/" },
        { name: "about", link: "/about" }
    ];
  return (
    <header>
        <img src="./images/R.png" height={100}></img>
        <nav>
            <ul>
                
                {navi.map((na) => (
                    <li key={na.name}>
                        <NavLink to={na.link} className={({ isActive }) => isActive? "active-link" : ""}>
                            {na.name.toUpperCase()}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header
