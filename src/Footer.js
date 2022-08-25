import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
         <div className="connect">
         <a href="https://www.instagram.com/tusharm1260/" target="_blank"><i id="ig" class="fab fa-2x fa-instagram"></i></a>
         <a href="https://www.facebook.com/profile.php?id=100015414132559" target="_blank"><i id="fb" class="fab fa-2x fa-facebook"></i></a>
         <a href="https://github.com/hunter1290" target="_blank"><i id="gh" class="fab fa-2x fa-github"></i></a>
         <a href="https://www.linkedin.com/in/tushar-mishra-6b91191bb/" target="_blank"><i id="ld" class="fab fa-2x fa-linkedin-in"></i></a>

         </div>
         <div className="copyright">
             <span>All right are reserved-2021</span>
             <br />
              <span>Devloped By-Tushar Mishra</span>
         </div>
        </>
    )
}

export default Footer
