import { useEffect } from 'react';
// import { subscribe } from '../../actions/user';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';

interface postId {
  postId: number;
}

const SubscriptionButton = ({ postId }: postId) => {
  // const { subscribeMessage, subscribeDone, subscribeLoading } = useAppSelector(
  //   (state) => state.user
  // );
  // const dispatch = useAppDispatch();

  // const toggleSubscribe = () => {
  //   dispatch(subscribe(postId));
  //   if (subscribeDone) {
  //     alert(`${subscribeMessage}`);
  //     window.location.reload();
  //   }
  // };

  // useEffect(() => {}, [subscribeDone]);

  return <button type='button'>구독</button>;
};

export default SubscriptionButton;
