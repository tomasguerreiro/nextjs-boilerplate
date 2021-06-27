import dynamic from 'next/dynamic';

const AboutPage = dynamic(() => import('../../modules/about'));

const IndexPage = () => <AboutPage />;

export default IndexPage;
