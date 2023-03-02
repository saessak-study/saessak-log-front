import { subscribe } from '../../actions/user';
import { useAppDispatch } from '../../hooks/useRedux';

interface postId {
  postId: number;
}

const SubscriptionButton = ({ postId }: postId) => {
  const dispatch = useAppDispatch();

  const toggleSubscribe = () => {
    dispatch(subscribe(postId));
  };

  return (
    <button type='button' onClick={toggleSubscribe}>
      구독
    </button>
  );
};

export default SubscriptionButton;
