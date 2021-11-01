import { useState, useEffect } from 'react';
import { MdOutlineHomeRepairService } from 'react-icons/md';

import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
      if (window.scrollY >=80) {
          setScrollNav(true);
      } else {
          setScrollNav(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
      scroll.scrollToTop();
  }


  

    return (
      <>
      <header>

      <a href="/" className="logo"> <MdOutlineHomeRepairService/>  SaJasa</a>
      <nav className="navbar">
          <a className="active" href="#home">home</a>
          <a href="#categories">Categories</a>
          <a href="#about">about</a>
          <a href="#team">Team</a>
          {/* <a href="#review">review</a> */}
          <a href="#order">Contact</a>
      </nav>

      <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" ></i>
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
      </div>

      </header>

      <form action="" id="search-form">
      <input type="search" placeholder="search here..." name="" id="search-box" />
      <label htmlFor="search-box" className="fas fa-search"></label>
      <i className="fas fa-times" id="close"></i>
    </form>

      </>
      
    
    )
}

export default Navbar
