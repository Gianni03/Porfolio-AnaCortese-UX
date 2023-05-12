import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './container.module.css';

export default function Container() {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.layout__main}>Contenido</main>
      <Footer />
    </div>
  );
}
