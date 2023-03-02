import { useEffect, useRef } from 'react';
import { loadMyPost } from '../../actions/post';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

import { myActivity } from '../../constants/title';

import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import LoginModal from '../../components/LoginModal/LoginModal';
import PageTitle from '../../components/PageTitle/PageTitle';
import PostCard from '../../components/PostCard/PostCard';
import SideRouteBtn from '../../components/SideRouteBtn/SideRouteBtn';

import styles from './myActivity.module.scss';

const MyActivityPage = () => {
  const { myPost, hasMore, loadMyPostLoading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const target = useRef(null);
  const pageRef = useRef(-1);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const intersectionHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore && !loadMyPostLoading) {
          pageRef.current += 1;
          dispatch(loadMyPost(pageRef.current));
        }
      });
    };
    const observer = new IntersectionObserver(intersectionHandler, options);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [dispatch, hasMore, loadMyPostLoading]);

  if (!sessionStorage.getItem('token')) return <LoginModal onClickToggleModal={() => {}} />;

  return (
    <>
      <Header />
      <PageTitle title={myActivity} />
      {!myPost.length && <div className={styles.no_post}>작성한 게시글이 없습니다.</div>}
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
