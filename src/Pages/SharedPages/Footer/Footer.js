import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
      <div className="bg-primary">
        <footer className="footer p-10 text-white max-w-6xl mx-auto lg:ml-24">
          <div>
            <Link className="normal-case px-2 flex items-center">
              <img src={logo} alt="" style={{ height: "30px" }} />
              <span className="font-bold text-black text-4xl ml-2 mt-1">
                Medico
              </span>
            </Link>
            <p>
              Medico is a online medicine shop. We are focused on getting your{" "}
              <br /> necessary medicine & giving you great healthcare support.
              <br />
              Find your required medicine at Medico.
            </p>
            <p className="mt-3">Mobile: 01321214124</p>
            <p>Email: Medico@gmail.com</p>
          </div>
          <div>
            <span className="footer-title text-black">Services</span>
            <Link className="link link-hover">Selling</Link>
            <Link className="link link-hover">Buying</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title text-black">
              Online Medicine Shop
            </span>
            <Link to="/">Home</Link>
            <Link to="/otc-drugs">OTC Drugs</Link>
            <Link to="/prediction">Prediction</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <span className="footer-title text-black">Social</span>
            <div className="grid grid-flow-col gap-4">
              <Link>
                <MdEmail size={26} />
              </Link>
              <Link>
                <FaTwitter size={26} />
              </Link>
              <Link>
                <FaFacebookF size={25} />
              </Link>
            </div>
          </div>
        </footer>
        <div className="text-center text-white pb-4">
          <p>Copyright © 2023 - All right reserved by Medico</p>
        </div>
      </div>
    )
};

export default Footer;