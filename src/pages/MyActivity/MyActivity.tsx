import { useEffect } from 'react';
import { loadMyPost } from '../../actions/post';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import PostCard from '../../components/PostCard/PostCard';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';
import { myActivity } from '../../constants/title';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import styles from './myActivity.module.scss';

const MyActivityPage = () => {
  const { myPost } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  console.log(myPost);

  useEffect(() => {
    dispatch(loadMyPost());
  }, [dispatch]);

  return (
    <>
      <Header />
      <PageTitle title={myActivity} />
      <div className={styles.cardListWrapper}>
        {myPost?.map((post) => {
          return <PostCard key={post.postId} post={post} />;
        })}
      </div>
      <SideRouteBtn />
      <Footer />
    </>
  );
};

export default MyActivityPage;
