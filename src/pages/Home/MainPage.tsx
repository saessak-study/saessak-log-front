import CardList from '../../components/CardList/CardList';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Paging from '../../components/pagination/Pagination';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';

const MainPage = () => {
  return (
    <div>
      <Header />
      <CardList />
      <SideRouteBtn />
      <Paging />
      <Footer />
    </div>
  );
};

export default MainPage;
