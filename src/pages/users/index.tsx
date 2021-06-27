import { GetStaticProps } from 'next';
import Link from 'next/link';
import { User } from '../../modules/user/User';
import PageWrapper from '../../templates/PageWrapper';
import List from '../../modules/user/UserList';
import api from '../../core/api';

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <PageWrapper>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </PageWrapper>
);

export const getStaticProps: GetStaticProps = async () => {
  //   const res = await api.get('/users');
  const req = await fetch('http://localhost:3000/users');
  const res = await req.json();
  const items: User[] = res.data as User[];
  return { props: { items } };
};

export default WithStaticProps;
