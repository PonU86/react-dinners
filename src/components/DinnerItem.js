import React from 'react'

function DinnerItem({image, name, prepTime, cookTime, time, heat, servings, ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, ingredients10, ingredients11, ingredients12, ingredients13, ingredients14, ingredients15, ingredients16, ingredients17, instructions1, instructions2, instructions3, instructions4, instructions5, byWho}) {
  return (
    <div className='dinnerItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <ul className='duration'>
        <li>
          {prepTime}
        </li>
        <li>
          {cookTime}
        </li>
        <li className='time'>
          {time}
        </li>
        <li className='heat'>
          {heat}
        </li>
        <li className='servings'>
          {servings}
        </li>
      </ul>
      <ul>
        <li>
          {ingredients1}
        </li>
        <li>
          {ingredients2}
        </li>
        <li>
          {ingredients3}
        </li>
        <li>
          {ingredients4}
        </li>
        <li>
          {ingredients5}
        </li>
        <li>
          {ingredients6}
        </li>
        <li>
          {ingredients7}
        </li>
        <li>
          {ingredients8}
        </li>
        <li>
          {ingredients9}
        </li>
        <li>
          {ingredients10}
        </li>
        <li>
          {ingredients11}
        </li>
        <li>
          {ingredients12}
        </li>
        <li>
          {ingredients13}
        </li>
        <li>
          {ingredients14}
        </li>
        <li>
          {ingredients15}
        </li>
        <li>
          {ingredients16}
        </li>
        <li>
          {ingredients17}
        </li>
      </ul>
      <ol>
        <li>
          {instructions1}
        </li>
        <li>
          {instructions2}
        </li>
        <li>
          {instructions3}
        </li>
        <li>
          {instructions4}
        </li>
        <li>
          {instructions5}
        </li>
      </ol>
      <p className='who'> {byWho} </p>
    </div>
  )
}

export default DinnerItem
