import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className='container mb-5'>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        LOGO
          </Link>
                    <a role="button" className="navbar-burger burger" aria-label="menu"
                        aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to='/Uz' className="navbar-item">
                            Ўзбекистон
            </Link>

                        <Link to='/jahon' className="navbar-item">
                            Жаҳон
            </Link>
                        <Link to='/ecnom' className="navbar-item">
                            Иқтисодиёт
            </Link>
                        <NavLink to='/jamiyat' className="navbar-item">
                            Жамият
            </NavLink>
                        <Link to='/texnolog' className="navbar-item">
                            Технология
            </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to='/register' className="button is-primary">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link to='/login' className="button is-light">
                                    Log in
               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
