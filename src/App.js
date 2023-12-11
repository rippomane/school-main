import './styles/App.css';

import hi from "./img/header__ico.png"
import hi2 from "./img/header__ico2.png"

import logo from "./img/logo.png"

import pic1 from "./img/1920x (1) 1.png"
import pic10 from "./img/1920x (10) 1.png"
import pic1111 from "./img/1920x (11) 1.png"
import pic1212 from "./img/1920x (12) 1.png"
import pic1313 from "./img/1920x (13) 1.png"
import pic6 from "./img/1920x (2) 1.png"
import pic7 from "./img/1920x (3) 1.png"
import pic8 from "./img/1920x (5) 1.png"
import pic88 from "./img/1920x (6) 1.png"
import pic9 from "./img/1920x (7) 1.png"
import pic888 from "./img/1920x (8) 1.png"
import pic999 from "./img/1920x (9) 1.png"
import pic12 from "./img/arrow__right.png"
import pic14 from "./img/main__pic.png"
import pic15 from "./img/noname.png"
import pic16 from "./img/svg (2) 1.png"
import pic17 from "./img/svg (3) 1.png"
import pic18 from "./img/svg 1.png"

function App() {
  return (
<div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kora</title>
        <link rel="stylesheet" href="css/style.css" />
        {/* Контейнер для хедера */}
        <div className="header__container">
          <div className="logo__left__container">
            <div className="logo__img" /><img src={logo} width={75} height={73} alt="#" className="hi2" />
            <div className="logo__text">KORA</div>
          </div>
          {/* Хедер */}
          <header>
            <nav>
              <a href="index.html" className="a">Main Page</a>
              <a href="index2.html" className="a2">Catalog</a>
              <a href="index3.html" className="a2">Media</a>
              <a href="index4.html" className="a2">Community</a>
            </nav>
          </header>
          {/* Контейнер для личного кабинета и поиска */}
          <div className="logo__right__container">
            <a href="index5.html"><img src={hi} width={42} height={33} alt="#" /></a>
            <a href="#"><img src={hi2} width={22} height={31} alt="#" className="hi2" /></a>
          </div>
        </div>
        {/* Основная часть */}
        <main>
          {/* Начало главной страницы */}
          <section className="main__page">
            <div className="main__pic__container"><img src={pic14} width={1440} height={839} alt="" />
              <div className="ptdc__container">
                <div className="play__trailer__container" style={{ position: "absolute", top: 750, left: 200 }}>
                  <a href="#"><div className="ptc__btn">
                      <div className="ptc__btn__triangle" />
                    </div>
                  </a>
                  <div className="ptc__text">PLAY TRAILER</div>
                </div>
                <div className="ptdc__describe"style={{ position: "absolute", top: 750, left: 1050 }}>The Koreans who gathered in Gando, today part of northeastern China, for their own reasons and band together to protect their homes during 1910-1945 Japanese colonial rule.</div>
              </div>
            </div></section>
          {/* Секция с сериалами */}
          <section className="series">
            <div className="title__watching__now__container" style={{marginLeft: '160px'}}>
              <div className="twnc__title">Watching Now</div>
              <a href="#"><img src={pic12} alt="" /></a>
            </div>
            {/* Контейнер с обложкой и описанием сериала */}
            <div className="series__container">
              <a href="#"><div className="sc_card">
                  <img src={pic1} alt="" />
                  <div className="sc__text">Strong Girl Bong-soon</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
                  <img src={pic6} alt="" />
                  <div className="sc__text">Weightlifting Fairy Kim Bok-joo</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic7} alt="" />
                  <div className="sc__text">Empress Ki</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic8} alt="" />
                  <div className="sc__text">The Heirs</div>
                </div>
              </a>
            </div>
            {/* Контейнер для текста и стрелки */}
            <div className="title__we__recommend__container" style={{marginLeft: '160px'}}>
              <div className="twnc__title">We Recommend</div>
              <a href="#"><img src={pic12} width={24} height={24} style={{paddingTop: '10px'}} /></a>
            </div>
            {/* Контейнер с обложкой и описанием сериала */}
            <div className="series__container">
              <a href="#"><div className="sc_card">
              <img src={pic88} alt="" />
                  <div className="sc__text">Descendants of the Sun</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic9} alt="" />
                  <div className="sc__text">What's Wrong with Secretary Kim</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic888} alt="" />
                  <div className="sc__text">Hwarang: The Poet Warrior Youth</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic999} alt="" />
                  <div className="sc__text">I Hear Your Voice</div>
                </div>
              </a>
            </div>
            {/* Контейнер с обложкой и описанием сериала */}
            <div className="series__container">
              <a href="#"><div className="sc_card">
              <img src={pic10} alt="" />
                  <div className="sc__text">Kill Me, Heal Me</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic1313} alt="" />
                  <div className="sc__text">Myth of General Sinui</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic1212} alt="" />
                  <div className="sc__text">The K2</div>
                </div>
              </a>
              <a href="#"><div className="sc_card">
              <img src={pic1111} alt="" />
                  <div className="sc__text">Oh My Venus</div>
                </div>
              </a>
            </div>
          </section>
        </main>
        {/* Подвал */}
        <footer>
          <section className="sf">
            {/* Контейнер для левого блока подвала */}
            <div className="footer__left__container">
              <div className="ftc__text">Watch TV series by subscription for 31 days for free, then 10,000₩ per month.</div>
              <a href="#"><div className="ftc__btn">
                  <div className="ftc__btn__text">Try for free</div>
                </div></a>
            </div>
            {/* Контейнер для правого блока подвала */}
            <div className="footer__right__container">
            <img src={pic15} alt="" />
            </div>
            {/* Контейнер для соцсетей */}
            <div className="socmedia__container">
              <div className="sc__container">
                <a href="#"><img src={pic18} alt="" /></a>
                <a href="#"><img src={pic16} alt="" className="socico" /></a>
                <a href="#"><img src={pic17} alt="" className="socico" /></a>
              </div>
            </div>
            {/* Меню подвала */}
            <div className="f__nav__container">
              <a href="#" className="fnc1">Vacancies</a>
              <a href="#" className="fnc2">Advertisement</a>
              <a href="#" className="fnc2">Agreement</a>
              <a href="#" className="fnc2">Help</a>
              <a href="#" className="fnc2">Proposals</a>
              <a href="#" className="fnc2">Customer Support</a>
            </div>
          </section>
        </footer>
      </div>
  );
}

export default App;
