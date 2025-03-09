import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Heading2>
        생일 축하 메시지를 남겨주세요.
        <br />
        오혁이가 좀더 크면 같이 읽어볼게요.
      </Heading2>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;
