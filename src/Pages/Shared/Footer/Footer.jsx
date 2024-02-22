import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content footer-center ">
        <div className="md:flex gap-y-8 mb-8 gap-x-96 items-start">
          <nav>
            <header className="footer-title">Contact us</header>
            <div className="grid grid-flow-col gap-4"></div>
            <p>123 Abs Street, Uni 21, Bangladesh</p>
            <p>+880 1795-718198</p>
            <p>Mon-Fri: 8:00-22:00</p>
            <p>Sat-Sun: 10:00-23:00</p>
          </nav>
          <nav>
            <header className="footer-title">Follow Us</header>
            <div className="grid grid-flow-col gap-4"></div>
            <p>Join us social media</p>
            <div className="flex gap-4 justify-center mt-3 text-3xl">
              <a className="hover:text-blue-600" href="https://web.facebook.com/profile.php?id=100010907586352" target="blank">
                <FaFacebookF />
              </a>
              <a href="#"  target="blank">
                <FaInstagram />
              </a>
              <a href="#" target="blank">
                <FaTwitter />
              </a>
            </div>
          </nav>
        </div>
        <aside>
          <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
