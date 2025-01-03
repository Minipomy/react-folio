import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faInstagram, faLinkedin, faGithub);

const socialLinks = [
  {
    url: "https://www.instagram.com/maxiii.rivera/",
    name: faInstagram,
  },
  {
    url: "https://www.linkedin.com/in/maximiliano-rivera-mendes-579174139/",
    name: faLinkedin,
  },
  { url: "https://github.com/Minipomy", name: faGithub },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#hero" className="back-to-top" aria-label="go back to top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          {socialLinks.map(({ url, name }) => (
            <a
              key={name.iconName}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name.iconName}
            >
              <FontAwesomeIcon icon={name} />
            </a>
          ))}
        </div>
        <hr />
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Made with &hearts;
        </p>
      </div>
    </footer>
  );
}

export default Footer;
