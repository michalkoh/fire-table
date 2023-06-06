import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/* <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li> */}
                <li><a href="https://www.instagram.com/fire__table_" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.youtube.com/channel/UCEri2ZRgjddzJBxfYIQApfQ" className="icon alt fa-youtube"><span className="label">YouTube</span></a></li>
            </ul>
            <ul className="copyright">
                <li>Copyright &copy; { new Date().getFullYear() } FIRETABLE</li>
            </ul>
        </div>
    </footer>
)

export default Footer
