import { useNavigate } from 'react-router-dom';
import { loadMySubPost } from '../../actions/post';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import LoginModal from '../../components/LoginModal/LoginModal';
import PageTitle from '../../components/PageTitle/PageTitle';
import PostCard from '../../components/PostCard/PostCard';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';
import { mySubscription } from '../../constants/title';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import styles from './mySubscription.module.scss';

const MySubscriptionPage = () => {
  const { mySubPost, hasMoreSubPost, loadMySubPostLoading, subPostPageNum } = useAppSelector(
    (state) => state.post
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const target = useInfiniteScroll({
    hasMore: hasMoreSubPost,
    loadData: () => dispatch(loadMySubPost(subPostPageNum)),
    isLoading: loadMySubPostLoading,
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
      <PageTitle title={mySubscription} />
      {mySubPost.length === 0 && (
        <div className={styles.no_post}>구독한 계정 또는 게시글이 없습니다.</div>
      )}
      <div className={styles.cardListWrapper}>
        {mySubPost?.map((post) => {
          return <PostCard key={post.postId} post={post} />;
        })}
      </div>
      <SideRouteBtn />
      <div className={styles.ref} ref={target} />
      <Footer />
    </>
  );
};

export default MySubscriptionPage;
