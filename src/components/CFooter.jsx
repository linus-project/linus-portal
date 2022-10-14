import React from "react";

function Footer() {
    return (
        <>

            <div className="footer-basic">
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Sobre nós</a></li>
                    <li class="list-inline-item"><a href="#">Em alta</a></li>
                    <li class="list-inline-item"><a href="#">Principais distribuições</a></li>
                    <li class="list-inline-item"><a href="#">Contatos</a></li>
                </ul>
                <br />
                <br />
                <div class="social">
                    <a href="#"><i class="icon ion-social-instagram"></i></a>
                    <a href="#"><i class="icon ion-social-snapchat"></i></a>
                    <a href="#"><i class="icon ion-social-twitter"></i></a>
                    <a href="#"><i class="icon ion-social-facebook"></i></a>
                </div>
                <p class="copyright">LinUS © 2022</p>
            </div>
        </>
    );
}

export default Footer;