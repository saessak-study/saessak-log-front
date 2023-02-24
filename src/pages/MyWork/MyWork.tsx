import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import MyActivityPageTitle from '../../components/PageTitle/MyActivityPageTitle';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';
import MyActivity from '../MyActivity/MyActivity';

const MyWork = () => {
  return (
    <div>
      <Header />
      <MyActivityPageTitle />
      <MyActivity />
      <SideRouteBtn />
      <Footer />
    </div>
  );
};

export default MyWork;
