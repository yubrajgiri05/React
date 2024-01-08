import logo from '../assets/logo.png'
import React from 'react'

const Footer =({setCategory}) => {
  return (
     <div className="footer mt-5 bg-dark">
        <div className="container">
            <div className="row g-5 py-5">
                <div className="col-sm-12 col-md-6 col-lg-4 text-light">
                <img src={logo} alt=".." style={{height:"60px", width:"170px"}}/>
                    <p className='footer-about pt-3'>The rise of  TV as leading news channel within a short span of its existence owes a lot to the vision of its chairman and editor-in-chief Rajat Sharma and the dedication and toil of its ever-growing team of bright news TV professionals Astronauts in the International Space Station said they found the rogue fruit, dispelling claims tha.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 text-light">
                <h2 className='pt-2'>Quick Link</h2>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
                <div className="col-sm-12 col-md-6 col-lg-4 text-light">
                <h2 className='pt-2'>Contack Us</h2>

                {/* <div className="text-light">
                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 30, color: "red" }} />
                <FontAwesomeIcon icon={faXmark}  style={{ fontSize: 30, color: "red" }}/>
                </div> */}
                </div>
            </div>
        </div>
     </div>
  )
}

export default Footer
