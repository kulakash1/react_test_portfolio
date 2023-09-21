import "./footer.css";
import "https://kit.fontawesome.com/15696a5f7b.js";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import 'https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap'


// import { profileImage } from "../../components/assets/Content/profileImage.js";
// const { id, home, imageName, link } = profileImage;

const Footer = () => {
  return (
    // <!-- Footer Latest -->
    <div className="footer-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="text-center text-md-left">
              <img
                src={require("../assets/image/Profile Pic/home/Profile Img.jpeg")}
                // src={require("../a")}
                // src={require({link})}
                // src={link}
                // src={require(`${link}`).default}
                // alt={imageName}
                alt="Profile Pic"
                className="footer-section-image"
              />
              <div className="d-flex flex-row justify-content-center justify-content-md-start mt-3 mb-3">
                {/* <!-- <div className="ecommerce-footer-section-icon-container">
                                <a href="">
                                    <i className="fab fa-google icon"></i>
                                </a>
                            </div> --> */}

                <div className="ecommerce-footer-section-icon-container text-center">
                  <a
                    href="https://github.com/kulakash1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-square-github iconColor"></i>
                  </a>
                </div>

                {/* <!-- <div className="ecommerce-footer-section-icon-container">
                                <a href="https://instagram.com/kulakash1" target="_blank">
                                    <i className="fab fa-instagram icon"></i>
                                </a>
                            </div> --> */}

                <div className="ecommerce-footer-section-icon-container">
                  <a
                    href="https://www.linkedin.com/in/kulakash1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin-square iconColor"></i>
                  </a>
                </div>

                <div className="ecommerce-footer-section-icon-container">
                  <a href="mailto:akashkulshrestha7@gmail.com?cc=&bcc=&subject=">
                    <i className="fa-solid fa-envelope-circle-check iconColor"></i>
                  </a>
                </div>
              </div>

              <p className="ecommerce-footer-section-address">
                Greater Noida, Uttar Pradesh, India.
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-3">
            <h1 className="ecommerce-footer-section-heading mb-3">
              Get to know me
            </h1>
            <ul className="ecommerce-footer-section-list">
              <li className="ecommerce-footer-section-list-item">About Me</li>
              <li className="ecommerce-footer-section-list-item">
                Career & Education
              </li>
              <li className="ecommerce-footer-section-list-item">
                Travel Blogs
              </li>
              {/* <!-- <li>
                            <a className="ecommerce-footer-section-list-item" href="mailto:akashkulshrestha7@gmail.com?cc=&bcc=&subject=">Drop a Mail</a>
                        </li> --> */}
              {/* <!-- <li className="ecommerce-footer-section-list-item">Gift a smile</li> --> */}
            </ul>
          </div>
          <div className="col-6 col-lg-3 mt-3">
            <h1 className="ecommerce-footer-section-heading mb-3">
              Connect with me on Social Media
            </h1>
            <ul className="ecommerce-footer-section-list">
              <a
                href="https://www.facebook.com/akash.kulshrestha3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="ecommerce-footer-section-list-item">Facebook</li>
              </a>

              <a
                href="https://twitter.com/kulakash1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="ecommerce-footer-section-list-item">Twitter</li>
              </a>

              <a
                href="https://instagram.com/kulakash1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="ecommerce-footer-section-list-item">
                  Instagram
                </li>
              </a>

              <a
                href="https://www.threads.net/@kulakash1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="ecommerce-footer-section-list-item">Threads</li>
              </a>
            </ul>
          </div>
          <div className="col-6 col-lg-3 mt-3">
            <h1 className="ecommerce-footer-section-heading mb-3">
              Services I can Provide
            </h1>
            <ul className="ecommerce-footer-section-list">
              <li className="ecommerce-footer-section-list-item">
                Website Integration & Deployment
              </li>
              <li className="ecommerce-footer-section-list-item">C++ Code</li>
              <li className="ecommerce-footer-section-list-item">
                Cinematography
              </li>
              <li className="ecommerce-footer-section-list-item">
                Video Post-Production
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-line" />

        <div className="footer-section-copyright-container">
          <i className="fa fa-copyright icon" aria-hidden="true"></i>
          <span className="footer-section-text">
            2023 Created by Akash Kulshrestha with{" "}
          </span>
          <i className="bi bi-balloon-heart-fill footer-heart"></i>
        </div>

        {/* <!-- <div className="text-center">
                <i className="fa fa-copyright icon" aria-hidden="true"></i>
                <span className="ecommerce-footer-section-copyright">
                    2020 by Rahul. Created with Bootstrap.
                </span>
            </div> --> */}
      </div>
    </div>
  );
};

export default Footer;
// export { Footer };
