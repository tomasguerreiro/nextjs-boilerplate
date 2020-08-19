import { GetStaticProps, GetStaticPaths } from 'next';
import PageWrapper from '../../templates/PageWrapper';
import ListDetail from '../../components/user/UserDetail';
import { User } from '../../components/user/User';
import api from '../../core/api';

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <PageWrapper title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </PageWrapper>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/users');
  const paths = data.map((user: any) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const { data } = await api.get('/users');
    const item = data.find((dt: any) => dt.id === Number(id));
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
