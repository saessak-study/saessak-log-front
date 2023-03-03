<<<<<<< HEAD
import { loadMyPost } from '../../actions/post';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
=======
import { useEffect, useRef } from 'react';
import { loadMyPost } from '../../actions/post';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
>>>>>>> a4880c11bfba8715b38fb5f907afa7549e69e369

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
<<<<<<< HEAD

  const target = useInfiniteScroll({
    hasMore,
    loadData: () => dispatch(loadMyPost(pageNum)),
    isLoading: loadMyPostLoading,
  });
=======
  const target = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const intersectionHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore && !loadMyPostLoading) {
          dispatch(loadMyPost(pageNum));
        }
      });
    };
    const observer = new IntersectionObserver(intersectionHandler, options);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [dispatch, hasMore, loadMyPostLoading, pageNum]);
>>>>>>> a4880c11bfba8715b38fb5f907afa7549e69e369

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
