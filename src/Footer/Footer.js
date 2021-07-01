import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Logo from "../Images/logo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__logo">
        <Link to="home" spy={true} smooth={true}>
          <img
            className="footer__elements__color footer__hover"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="footer__navbar">
        <ul>
          <li className="footer__elements__color footer__hover">
            <Link activeClass="active" to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>

          <li className="footer__elements__color footer__hover">
            <Link to="testimonials" spy={true} smooth={true}>
              Service
            </Link>
          </li>

          <li className="footer__elements__color footer__hover">
            <Link to="" spy={true} smooth={true}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__social">
        <a
          href="https://upload.wikimedia.org/wikipedia/commons/4/42/07_05_2021_Cerim%C3%B4nia_de_Inaugura%C3%A7%C3%A3o_da_ponte_sobre_o_Rio_Madeira%2C_BR-364%2C_Distrito_de_Abun%C3%A3_%2851164250821%29_%28cropped%29.jpg"
          target="_blank"
        >
          <FacebookIcon
            className="footer__elements__color footer__hover footer__icon__margin"
            fontSize="small"
          />
        </a>
        <a
          href="https://portalcontexto.com/wp-content/uploads/2020/10/Pit-Dog.jpg"
          target="_blank"
        >
          <PinterestIcon
            className="footer__elements__color footer__hover footer__icon__margin"
            fontSize="small"
          />
        </a>
        <a
          href="https://pbs.twimg.com/media/DaVps_UXkAE-6qs.jpg"
          target="_blank"
        >
          <TwitterIcon
            className="footer__elements__color footer__hover footer__icon__margin"
            fontSize="small"
          />
        </a>
        <a
          href="https://image.shutterstock.com/image-photo/wild-american-mustang-horse-black-600w-1100305949.jpg"
          target="_blank"
        >
          <InstagramIcon
            className="footer__elements__color footer__hover"
            fontSize="small"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
