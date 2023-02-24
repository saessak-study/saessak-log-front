import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import SubscribePageTitle from '../../components/PageTitle/SubscribePageTitle';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';
import MyActivity from '../MyActivity/MyActivity';

const MySubscribe = () => {
  return (
    <div>
      <Header />
      <SubscribePageTitle />
      <MyActivity />
      <SideRouteBtn />
      <Footer />
    </div>
  );
};

export default MySubscribe;
