import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import SearchResult from '../../components/SearchResult/SearchResult';
import MyActivity from '../MyActivity/MyActivity';

const SearchPage = () => {
  return (
    <div>
      <Header />
      <SearchResult />
      <MyActivity />
      <Footer />
    </div>
  );
};

export default SearchPage;
