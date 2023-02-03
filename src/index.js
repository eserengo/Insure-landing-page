(function () {
  const rootElement = document.querySelector('.root');

  const Header = () => (
    <header className='header'>
      <img className='logo left' src='./src/images/logo.svg' alt='logo' />
      <nav className='selectable'>
        <img className='openModal mobile right' src='./src/images/icon-hamburger.svg' alt='hamburguer icon' onClick= {() => ReactDOM.render(<Modal />, rootElement)} />
        <ul className='desktop flex-row center right'>
          <li className='desktop'>How we work</li>
          <li className='desktop'>Blog</li>
          <li className='desktop'>Account</li>
          <li className='desktop square-black'>View plans</li>
        </ul>
      </nav>
    </header>
  );

  const Modal = () => (
    <div className='modal'>
      <div className='modal-headings'>
        <img className='logo left' src='./src/images/logo.svg' alt='logo' />
        <img className='closeModal selectable right' src='./src/images/icon-close.svg' alt='close icon' onClick={() => ReactDOM.render(app, rootElement)} />
      </div>
      <div className='modal-body'>
        <nav className='selectable'>
          <ul className='flex-col center'>
            <li>How we work</li>
            <li>Blog</li>
            <li>Account</li>
            <li className='square-white'>View plans</li>
          </ul>
        </nav>
      </div>
    </div>
  );

  const Main = () => (
    <main className='main rel'>
      <img className='mobile' src='./src/images/image-intro-mobile.jpg' alt='intro' />
      <img className='intro desktop' src='./src/images/image-intro-desktop.jpg' alt='intro' />
      <section className='headings'>
        <hr className=' hr desktop' />
        <h1>Humanizing your insurance.</h1>
        <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
        <button className='button uppercase selectable'>View plans</button>
      </section>
      <section className='body'>
        <hr className='hr' />
        <h2>We're different</h2>
        <div className='flexing'>
          <div className='card flex-col'>
            <img className='icon' src='./src/images/icon-snappy-process.svg' alt='snappy process icon' />
            <b>Snappy Process</b>
            <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
          </div>
          <div className='card flex-col'>
            <img className='icon' src='./src/images/icon-affordable-prices.svg' alt='affordable prices icon' />
            <b>Affordable Prices</b>
            <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
          </div>
          <div className='card flex-col'>
            <img className='icon' src='./src/images/icon-people-first.svg' alt='people first icon' />
            <b>People First</b>
            <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
          </div>
        </div>
        <div className='aside center flexing'>
          <h3>Find out more about how we work</h3>
          <button className='button uppercase selectable'>How we work</button>
        </div>
      </section>
    </main>
  );

  const Footer = () => (
    <footer className='footer'>
      <img className='logo floating-left' src='./src/images/logo.svg' alt='logo' />
      <nav className='selectable floating-right'>
        <ul className='flex-row'>
          <li><img className='social' src='./src/images/icon-facebook.svg' alt='facebook icon' /></li>
          <li><img className='social' src='./src/images/icon-twitter.svg' alt='twitter icon' /></li>
          <li><img className='social' src='./src/images/icon-pinterest.svg' alt='pinterest icon' /></li>
          <li><img className='social' src='./src/images/icon-instagram.svg' alt='instagram icon' /></li>
        </ul>
      </nav>
      <hr className='hr' />
      <nav className='selectable uppercase'>
        <ul className='flexing'>
          <li><ul className='flex-col'>Our company
            <li>How we work</li>
            <li>Why Insure?</li>
            <li>View plans</li>
            <li>Reviews</li>
          </ul></li>
          <li><ul className='flex-col'>Help me
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul></li>
          <li><ul className='flex-col'>Contact
            <li>Sales</li>
            <li>Support</li>
            <li>Live chat</li>
          </ul></li>
          <li><ul className='flex-col'>Others
            <li>Careers</li>
            <li>Press</li>
            <li>Licenses</li>
          </ul></li>
        </ul>
      </nav>
    </footer>
  );

  const Attribution = () => (
    <div className='attribution'>
      Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. Coded by <a href='https://github.com/eserengo/' target='_blank'>Federico Borzani</a>.
    </div>
  );

  const app = (
    <>
      <Header />
      <Main />
      <Footer />
      <Attribution />
    </>
  );

  ReactDOM.render(app, rootElement);
})();