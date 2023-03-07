import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { subscribe } from '../../actions/user';

import LoginModal from '../LoginModal/LoginModal';
import { FaUserPlus, FaUserCheck } from 'react-icons/fa';
import styles from './subscriptionButton.module.scss';

interface postId {
  postId: number;
}

const SubscriptionButton = ({ postId }: postId) => {
  const [isModalView, setIsModalView] = useState(false);
  const { singlePost } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const onClickToggleModal = () => {
    setIsModalView((prevState) => !prevState);
  };

  const toggleSubscribe = () => {
    if (!sessionStorage.getItem('token')) {
      setIsModalView(true);
    } else {
      dispatch(subscribe(postId));
    }
  };

  return (
    <>
      {isModalView && <LoginModal onClickToggleModal={onClickToggleModal} />}
      <button type='button' onClick={toggleSubscribe} className={styles.sub_button}>
        {singlePost.subscribe ? (
          <FaUserCheck color='#41d18a' size={25} />
        ) : (
          <FaUserPlus color='#9a9a9a' size={25} />
        )}
      </button>
    </>
  );
};

export default SubscriptionButton;
