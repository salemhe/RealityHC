// import React from 'react';
// import './Footer.css'; // Import CSS file for styling

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-column">
//                 {/* Company Logo and Text */}
//                 <div className="logo-container">
//                     <div className="logo">
//                         <i className="fas fa-hand-holding-heart"></i>
//                     </div>
//                     <div className="company-name">
//                         <span>RealityCare </span>
//                     </div>
//                 </div>
//                 {/* Social Media Icons */}
//                 <div className="social-icons">
//                     <a href="#"><i className="fab fa-facebook"></i></a>
//                     <a href="#"><i className="fab fa-twitter"></i></a>
//                     <a href="#"><i className="fab fa-instagram"></i></a>
//                 </div>
//                 <br />

//                 &copy; 2024 Designed by<span className='salem'>SalemHamis</span>
//             </div>
//             <div className="footer-column">
//                 {/* Payment Methods */}
//                 <h2 className="column-title">Payment Methods</h2>
//                 <div className="payment-icons">
//                     <i className="fab fa-paypal"></i>
//                     <i className="fab fa-cc-mastercard"></i>
//                     <i className="fab fa-cc-mastercard"></i>
//                     <i className="fab fa-cc-visa"></i>
//                 </div>
//             </div>
//             <div className="footer-column">
//                 {/* Navigation Links */}
//                 <nav>
//                     <h2 className="column-title">Quick Links</h2>
//                     <ul className="navigation-links">
//                         <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
//                         <li><a href="#"><i className="fas fa-shopping-cart"></i> Products</a></li>
//                         <li><a href="#"><i className="fas fa-info-circle"></i> About Us</a></li>
//                         <li><a href="#"><i className="fas fa-address-card"></i> Contact Us</a></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="footer-column">
//                 {/* Contact Information */}
//                 <h2 className="column-title">Contact Us</h2>
//                 <ul className="contact-info">
//                     <li><i className="fas fa-envelope"></i> info@example.com</li>
//                     <li><i className="fas fa-phone"></i> +1234567890</li>
//                 </ul>
//             </div>
//         </footer>
//     );
// }

// export default Footer;



import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <div className="logo">
                        <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    <h1 className="company-name">RealityCare</h1>
                </div>

                <div className="footer-info">
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                            <li><a href="#"><i className="fas fa-info-circle"></i> About Us</a></li>
                            <li><a href="#"><i className="fas fa-box"></i>Services</a></li>
                            <li><a href="#"><i className="fas fa-envelope"></i> Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Payment Methods</h3>
                        <div className="payment-methods">
                            <div className="payment-option">
                                <i className="fab fa-paypal"></i>
                                <span>PayPal</span>
                            </div>
                            <div className="payment-option">
                                <i className="fab fa-cc-mastercard"></i>
                                <span>MasterCard</span>
                            </div>
                            <div className="payment-option">
                                <i className="fab fa-cc-visa"></i>
                                <span>Visa</span>
                            </div>
                            <div className="payment-option">
                                <i className="fab fa-cc-amex"></i>
                                <span>American Express</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <ul className="contact-info">
                            <li><i className="fas fa-envelope"></i> info@example.com</li>
                            <li><i className="fas fa-phone"></i> 214 222 5201</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Designed by <span className='designer'>SalemHamis</span></p>
            </div>
        </footer>
    );
}

export default Footer;
