import React from 'react'
import { Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footer.css'

const Footer= () => {
    return (
        <footer className="footer">
          <div className="top">
            <div className="top-left">
              <h3 className="cl-blue">VeRoyalties</h3>
              <p>The real estate investment that uses blockchain to revolutionise the sector from as little as €10.
              </p>
            </div>
            <div className="top-middle">
              <div className="top-middle-left">
              <h3>Sitemap</h3>
              <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/MarketPlace">MarketPlace</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/Blogs">Blogs</Link></li>
              </ul>
              </div>
              <div className="top-middle-right">
              <h3>Informations</h3>
              <ul>
                <li><a href="https://veroyalties.gitbook.io/whitepaper">Whitepaper</a></li>
                <li><a href="/FAQ">Legal Notice</a></li>
                <li><a href="/FAQ">Privacy Policy</a></li>
              </ul>
              </div>
            </div>
            <div className="top-right">
            </div>
          </div>
          <div className="bottom">
            <p>&copy; Copyright - VeRoyalties</p>
            <div className="socials">
              <ul className="social">
                    <li>
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-f social-i"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram social-i"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/VeRoyalties"><i className="fab fa-twitter social-i"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in social-i"></i></a>
                    </li>
                    <li>
                        <a href="https://discord.gg/7nSF6DUkJA"><i className="fab fa-discord social-i"></i></a>
                    </li>
                </ul>
            </div>
          </div>
        </footer>
    )
}

export default Footer;