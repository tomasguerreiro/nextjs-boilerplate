import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../modules/home'));

const IndexPage = () => <HomePage />;

export default IndexPage;
