import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';
import MyActivity from '../MyActivity/MyActivity';

const MainPage = () => {
  return (
    <div>
      <Header />
      <PageTitle />
      <MyActivity />
      <SideRouteBtn />
      <Footer />
    </div>
  );
};

export default MainPage;
