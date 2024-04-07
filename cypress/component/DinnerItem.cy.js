import React from 'react'

function DinnerItem({image, name, time, servings, ingredients1, ingredients2, ingredients3, ingredients4, ingredients5, ingredients6, ingredients7, ingredients8, ingredients9, instructions}) {
  return (
    <div className='dinnerItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <p> ${time} </p>
      <p> ${servings} </p>
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
      </ul>
      <p> {instructions} </p>
    </div>
  )
}

export default DinnerItem
