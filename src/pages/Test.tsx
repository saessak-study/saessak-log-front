import { loadPost } from '../actions/post';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';

const Test = () => {
  const dispatch = useAppDispatch();
  const { post } = useAppSelector((state) => state.post);

  const onClickTest = () => {
    dispatch(loadPost());
  };
  console.log(post);

  return (
    <button type='button' onClick={onClickTest}>
      test
    </button>
  );
};

export default Test;
