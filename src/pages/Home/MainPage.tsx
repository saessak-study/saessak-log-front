import CardList from '../../components/CardList/CardList';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';

const MainPage = () => {
  return (
    <div>
      <Header />
      <CardList />
      <SideRouteBtn />
      <Footer />
    </div>
  );
};

export default MainPage;
