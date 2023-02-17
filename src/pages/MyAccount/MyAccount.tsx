import { useState } from 'react';
import { IoMdPerson } from 'react-icons/io';
import PasswordChangeModal from '../../components/PasswordChangeModal/PasswordChangeModal';
import styles from './myAccount.module.scss';

const dummyData = {
  id: 'abc123',
  email: 'abc123@naver.com',
  name: '가나다',
};

const MyAccountPage = () => {
  const [isModalView, setIsModalView] = useState(true);

  return (
    <>
      {isModalView && <PasswordChangeModal />}
      <div className={styles.account_wrapper}>
        <span>
          <IoMdPerson size='70' />
        </span>
        <div>
          <label htmlFor='id'>ID</label>
          <input type='text' id='id' disabled defaultValue={dummyData.id} />
        </div>
        <div>
          <label htmlFor='eamil'>Email</label>
          <input type='text' id='email' disabled defaultValue={dummyData.email} />
        </div>
        <div>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' disabled defaultValue={dummyData.name} />
        </div>
        <div>
          <label htmlFor='password' />
          <input type='text' id='password' placeholder='password' />
        </div>
        <div>
          <label htmlFor='password-check' />
          <input type='text' id='password-check' placeholder='password check' />
        </div>

        <div>
          <button type='button' className={styles.cancel_button}>
            취소
          </button>
          <button type='submit' className={styles.save_button}>
            저장
          </button>
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
