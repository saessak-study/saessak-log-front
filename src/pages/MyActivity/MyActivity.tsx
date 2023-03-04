import { loadMyPost } from '../../actions/post';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

import { myActivity } from '../../constants/title';

import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import LoginModal from '../../components/LoginModal/LoginModal';
import PageTitle from '../../components/PageTitle/PageTitle';
import PostCard from '../../components/PostCard/PostCard';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';

import styles from './myActivity.module.scss';
import { useNavigate } from 'react-router-dom';

const MyActivityPage = () => {
  const { myPost, hasMore, loadMyPostLoading, pageNum } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const target = useInfiniteScroll({
    hasMore,
    loadData: () => dispatch(loadMyPost(pageNum)),
    isLoading: loadMyPostLoading,
  });

  if (!sessionStorage.getItem('token'))
    return (
      <LoginModal
        onClickToggleModal={() => {
          navigate('/');
        }}
      />
    );

  return (
    <>
      <Header />
      <PageTitle title={myActivity} />
      {myPost.length === 0 && <div className={styles.no_post}>작성한 게시글이 없습니다.</div>}
      <div className={styles.cardListWrapper}>
        {myPost?.map((post) => {
          return <PostCard key={post.postId} post={post} />;
        })}
      </div>
      <SideRouteBtn />
      <div className={styles.ref} ref={target} />
      <Footer />
    </>
  );
};

export default MyActivityPage;
