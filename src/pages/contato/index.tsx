import dynamic from 'next/dynamic';

const ContatoPage = dynamic(() => import('../../modules/contato'));

const IndexPage = () => <ContatoPage />;

export default IndexPage;
