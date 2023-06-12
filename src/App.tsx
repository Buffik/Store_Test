import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Cart from 'pages/Cart/Cart';
import Main from 'pages/Main/Main';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import Order from './pages/Order/Order';
import styles from './App.module.scss';

//todo: скорректировать логику кнопки купить на главной странице в карточке
//todo: если в стейте нет товаров, при клике на кнопку купить в карточке нужно добавлять в корзину текущий товар
//todo: доделать форму отправки заказа: очистить стейт, редиректнуть на главную страницу
//todo: типизировать страницу с локацией

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
