import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';
import MyActivity from '../MyActivity/MyActivity';

const MainPage = () => {
  return (
    <div>
      <Header />
      <MyActivity />
      <SideRouteBtn />
      <Footer />
    </div>
  );
};

export default MainPage;
