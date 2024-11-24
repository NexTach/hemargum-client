import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import Title from '../components/title';

function Details() {
  const location = useLocation();
  const { title, text } = location.state || {
    title: 'Default Title',
    text: 'Default Text',
  };

  return (
    <>
      <Header />
      <Title title={title} text={text} />
    </>
  );
}

export default Details;
