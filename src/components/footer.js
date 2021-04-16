import FooterNavbar from "./footerNavbar"

export default function Footer() {
    return (
        <footer className="footer">
            <hr className="hr-footer-line" />
            <FooterNavbar />
            <p
                className="copyright">
                © 2018 塔吉特touched. All Rights Reserved..
            </p>
        </footer>           
    );
}