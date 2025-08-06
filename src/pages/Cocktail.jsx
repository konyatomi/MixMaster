import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);

  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name:</span> {name}
          </p>
          <p>
            <span className='drink-data'>Category:</span> {category}
          </p>
          <p>
            <span className='drink-data'>Info:</span> {info}
          </p>
          <p>
            <span className='drink-data'>Glass:</span> {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
