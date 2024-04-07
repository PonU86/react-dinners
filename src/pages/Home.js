import React from 'react'
import { DinnerList } from '../helpers/DinnerList';
import DinnerItem from '../components/DinnerItem';
import '../styles/Home.css';

function Home() {
  return (
    <div className='dinners'>
        <div className='dinnerlists'>
            {DinnerList.map((dinnerItem, key) => {
                return (
                    <DinnerItem 
                    key={key}
                    image={dinnerItem.image}
                    name={dinnerItem.name}
                    prepTime={dinnerItem.prepTime}
                    cookTime={dinnerItem.cookTime}
                    time={dinnerItem.time}
                    heat={dinnerItem.heat}
                    servings={dinnerItem.servings}
                    ingredients1={dinnerItem.ingredients1}
                    ingredients2={dinnerItem.ingredients2}
                    ingredients3={dinnerItem.ingredients3}
                    ingredients4={dinnerItem.ingredients4}
                    ingredients5={dinnerItem.ingredients5}
                    ingredients6={dinnerItem.ingredients6}
                    ingredients7={dinnerItem.ingredients7}
                    ingredients8={dinnerItem.ingredients8}
                    ingredients9={dinnerItem.ingredients9}
                    ingredients10={dinnerItem.ingredients10}
                    ingredients11={dinnerItem.ingredients11}
                    ingredients12={dinnerItem.ingredients12}
                    ingredients13={dinnerItem.ingredients13}
                    ingredients14={dinnerItem.ingredients14}
                    ingredients15={dinnerItem.ingredients15}
                    ingredients16={dinnerItem.ingredients16}
                    ingredients17={dinnerItem.ingredients17}
                    instructions1={dinnerItem.instructions1}
                    instructions2={dinnerItem.instructions2}
                    instructions3={dinnerItem.instructions3}
                    instructions4={dinnerItem.instructions4}
                    instructions5={dinnerItem.instructions5}
                    byWho={dinnerItem.byWho}
                />
                );
            })}
        </div>
    </div>
  )
}

export default Home
