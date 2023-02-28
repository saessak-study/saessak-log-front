import CardList from '../../components/CardList/CardList';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import SearchResult from '../../components/SearchResult/SearchResult';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';

const SearchPage = () => {
  return (
    <div>
      <Header />
      <SearchResult />
      <CardList />
      <SideRouteBtn />
      <Footer />
    </div>
  );
};

export default SearchPage;
