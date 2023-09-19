/* spacing
2/4/8/12/16/24/32/48/64/80/96/128*/
/* font-size
10/12/14/16/18/20/24/30/36/44/52/62/74/86/98*/
/*****************/
/* Desktop tablets*
1345px==1345/16=75em/
/*****************/
@media (max-width: 84.07em) {
    /* below size: 1200px  1200px/16px*/
    /* rem===em  */
    /* 84*16=1344  smaller desktop*/
    .grid {
      column-gap: 4.8rem;
    }
    .btn--left:link,
    .btn--left:visited {
      margin-left: 2rem;
    }
    .btn,
    .btn:link {
      padding: 1.6rem 3.6rem;
    }
    .images-container {
      gap: 2.4rem;
    }
    .logo-hide {
      display: block;
    }
  }
  
  /*****************/
  /* Landscape tablets*
  1124px==1124/16=70.25em/
  /*****************/
  /* Now if we change the font size of default,
  every value we define in html based on our defince 62.5%,
  will reduce based on this value*/
  @media (max-width: 70.25em) {
    html {
      font-size: 56.25%;
    }
    .images-container {
      gap: 1.8rem;
    }
    .btn--left:link,
    .btn--left:visited {
      margin-left: 1.6rem;
    }
    .btn,
    .btn:link {
      padding: 1.2rem 2.4rem;
    }
    .logo-hide {
      display: block;
    }
  }
  /*****************/
  /* Landscape tablets*
  960px==960/16=60em/
  /*****************/
  @media (max-width: 60em) {
    html {
      font-size: 50%;
    }
    .hero {
      max-width: 120rem;
    }
    .grid {
      column-gap: 0;
    }
    .images-container {
      gap: 1.2rem;
    }
    .main-navigation-list {
      gap: 3.2rem;
    }
    .logo-hide {
      display: block;
    }
  }
  /*****************/
  /* Landscape tablets*
  776px==776/16=50.62em/
  /*****************/
  
  @media (max-width: 50.62em) {
    /* mobile navigation  */
    .mobile--slide {
      display: block;
    }
    .main-navigation {
      background-color: hsl(0, 0%, 100%);
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100vh;
      display: flex;
      display: none;
      /* hiding element without using disply:none */
    }
  
    .logo {
      margin-left: 9.6rem;
    }
  
    .main-navigation-link:link,
    .main-navigation-link:visited {
      color: hsl(0, 0%, 0%);
      font-weight: 600;
      font-size: 2.8rem;
    }
    .main-navigation-list {
      flex-direction: column;
      gap: 4.6rem;
      padding-top: 9.6rem;
      padding-left: 6.2rem;
    }
    .header {
      justify-content: space-between;
      align-items: center;
    }
  
    .navigation-btn .fa-bars {
      display: inline-block;
    }
    .logo--bars {
      display: block;
    }
    .hero-text-box {
      max-width: 100%;
    }
    .hero-images {
      max-width: 85%;
      /* pointer-events: none; */
    }
    .images-container {
      gap: 0.2rem;
    }
    .add_to {
      padding-left: 0.8rem;
    }
    .btn,
    .btn:link {
      padding: 0.8rem 1.6rem;
    }
    .logo-hide {
      display: none;
    }
  }
  /* *****************/
  /* Landscape tablets*
  576px==576/16=36em/
  /*****************/
  @media (max-width: 50.62em) {
    html {
      overflow: auto;
    }
    .cart--container {
    }
    .main-navigation {
      height: 100vh;
      z-index: 1;
    }
    .showCart {
      z-index: 99999;
    }
  
    .header {
      padding: 0 2.4rem;
      justify-content: space-between;
      height: 6rem;
    }
    .navigation-btn {
      font-size: 2.4rem;
      padding-top: 2rem;
      margin: 0;
    }
    .logo {
      margin-left: 4.2rem;
    }
    .cart--container {
      gap: 1.8rem;
    }
    .avatar {
      width: 4rem;
      height: 4rem;
    }
    .menu-btn {
      font-size: 2.4rem;
    }
    .close {
      margin-top: 2.4rem;
      margin-left: 2.4rem;
    }
    .line {
      display: none;
    }
    .grid--two--col {
      grid-template-columns: 1fr;
    }
    .images-container {
      display: none;
    }
    .img-container {
      display: none;
    }
    .overlay.active {
      display: none;
    }
    .hero-images {
      position: relative;
      align-self: center;
    }
    .arrow {
      position: absolute;
      top: 50%;
      background-color: hsl(0, 0%, 100%);
      border: none;
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      border-radius: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .left--arrow {
      left: calc(6vw - 1rem);
    }
    .right--arrow {
      right: calc(6vw - 1rem);
    }
    .left--arrow:hover {
      stroke: red;
      fill: rgb(255, 125, 26);
    }
    .hero-section {
      padding-top: 0;
    }
    .hero-images {
      max-width: 100%;
    }
  
    .grid {
      gap: 1.2rem;
    }
    .hero-image {
      border-radius: 0;
    }
    .padding-left {
      padding-left: 3.2rem;
      max-width: 95%;
    }
    .mobile-active {
      display: flex;
      justify-content: space-between;
    }
    .cart--container {
      z-index: 55555;
    }
    .btn,
    .btn:link {
      padding: 1.2rem 4.4rem;
      max-width: 100%;
    }
    .action {
      flex-direction: column;
      padding-left: 0;
      margin-top: 2.4rem;
    }
    .btn--left:link,
    .btn--left:visited {
      font-size: 2rem;
    }
    .btn,
    .btn:link,
    .btn:visited {
      text-decoration: none;
      display: inline-block;
      border-radius: 1.5rem;
      padding: 1.6rem 4.4rem;
      margin-bottom: 3.2rem;
      cursor: pointer;
    }
    .logo-hide {
      display: none;
    }
  
    .btn--right:link,
    .btn--right:visited {
      color: #555;
      font-size: 1.8rem;
      background-color: #eee;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: fit-content;
    }
  }
  /* spacing
  2/4/8/12/16/24/32/48/64/80/96/128*/
  /* font-size
  10/12/14/16/18/20/24/30/36/44/52/62/74/86/98*/
  /* @media (max-width: 75em) {
    html {
      font-size: 56.25%;
    }
    .header {
      padding: 0 3.2rem;
    }
    .hero {
      gap: 8rem;
    }
    .main-navigation-list {
      gap: 3.2rem;
    }
    .secondary-heading {
      font-size: 3.6rem;
    }
    .subheading {
      font-size: 3rem;
    }
    .teruary-heading {
      font-size: 2.4rem;
    }
    .grid {
      column-gap: 4.8rem;
      row-gap: 8rem;
    }
    .testmonials {
      row-gap: 6.4rem;
      column-gap: 1.2rem;
    }
    .testmonial-gallery {
      padding: 0 1.2rem 0 0;
    }
    .container-pricing {
      padding: 4.8rem 0;
    }
    .step-num {
      font-size: 6.4rem;
    }
    .testmonials {
      grid-template-columns: 1fr;
    }
  } */