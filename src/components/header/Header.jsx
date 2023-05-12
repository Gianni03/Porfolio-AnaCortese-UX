import style from './header.module.css';
import logos from '../../assets/logo/logos';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__links}>
        <nav className={style.nav}>
          <ul className={style.nav__items}>
            <li>
              <a href="#">acerca</a>
            </li>
            <li>
              <a href="#">trabajos</a>
            </li>
            <li>
              <a href="#">contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.header__logo}>
        <img src={logos.logo2} alt="logo" />
      </div>

      <div className={style.header__redes}>
        <nav className={style.redes}>
          <ul className={style.nav__items}>
            <li>
              <a href="#">
                {/* <img src={logos.linkedin} alt="linkedin" /> */}
                <img
                  src="https://fontawesome.com/icons/linkedin-in?f=brands&s=solid&sz=xs"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">em</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
