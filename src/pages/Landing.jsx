import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  return 'somestring';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data); // This will log 'somestring'

  return <div>Landing</div>;
};
export default Landing;
