import React from "react";
import "./Footer.css";
import img1 from "./Icons/facebook.svg";
import img2 from "./Icons/instagram.svg";
import img3 from "./Icons/twiter.png";
import img4 from "./Icons/git.svg";
import img5 from "./Icons/ball.png";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="part1">
        <h1 className="title_grn">REACT.</h1>
        <p className="p_text_footet">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>

        <div className="part3">      
          <a href='https://www.facebook.com/'> < img src={img1} alt="facebook" className="facebook__img" /> </a>
          <a href="https://www.instagram.com/"><img src={img2} alt="facebook" className="facebook__img" /></a>
          <a href="https://twitter.com/"><img src={img3} alt="facebook" className="facebook__img" /></a>
          <a href="https://github.com/"><img src={img4} alt="facebook" className="facebook__img" /></a>
          <a href="https://github.com/"><img src={img5} alt="facebook" className="facebook__img" /></a>
        </div>
      </div>

      <div className="part2">
        <oll className='oll_1'>
          <p className="ol_title">Solutions</p>
          <li>Analytics</li>
          <li>Marketing</li>
          <li>Commerce</li>
          <li>Insights</li>
        </oll>
        <oll className='oll_2' >
          <p className="ol_title">Support</p>
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Guides</li>
          <li>API Status</li>
        </oll>
        <oll className='oll_3'>
          <p className="ol_title">Company</p>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Careers</li>
        </oll>
        <oll className='oll_4'>
          <p className="ol_title">Legal</p>
          <li>Claim</li>
          <li>Policy</li>
          <li>Terms</li>
        </oll>
      </div>
    </div>
  );
};

export default Footer;
