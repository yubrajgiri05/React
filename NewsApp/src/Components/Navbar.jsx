
import logo from '../assets/logo.png'
const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#"  onClick={()=>setCategory("general")}> <img src={logo} alt=".." style={{height:"45px", width:"170px"}}/> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <a className="nav-link " onClick={()=>setCategory("technology")}>Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={()=>setCategory("bussiness")}>Bussiness</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={()=>setCategory("health")}>Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={()=>setCategory("sports")}>Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " onClick={()=>setCategory("entertainment")}>Entertainment</a>
                        </li>
                        
                       
                    </ul>
            
                </div>
            </div>
        </nav>

    )
}

export default Navbar
