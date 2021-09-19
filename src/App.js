import React from 'react';
import './App.css';
import Person from './components/Person/Person';
import Products from './components/Products/Products';
import Counter from './components/Counter/Counter';

function App() {

  const PersonsDetails = [
    { name:'Mehedi Hasan', profession:"Googler", experience:'5' },
    { name:'Nehal Mahmud', profession:"Software Engineer", experience:'5' },
    { name:'Ratul Hasan', profession:"Mathematician", experience:'5,', },
    { name:'Rajibul Haque', profession:"Civil Engineer", experience:'5' },
    { name:'Zoy Rahoman', profession:"Graphics Designer", experience:'5' },
    { name:'Alvi', profession:"YouTuber", experience:'5' },
    { name:'Ekram Khan', profession:"Business Man", experience:'5' },
    { name:'Saimim', profession:"Programmer", experience:'5' }
  ]

  const ProductList = [
    {ProductName:"Photoshop", price:"$1200"},
    {ProductName:"Illustrator", price:"$1000"},
    {ProductName:"Adobe XD", price:"$1000"},
    {ProductName:"Adobe CC", price:"$900"},
  ]
  
  return (
    <div className="App">
      { PersonsDetails.map( person => <Person PersonsDetail={person} />) } 
      { ProductList.map( productcard  =>  <Products product={productcard} /> ) }
      <Counter />
    </div>
  );
}

export default App;
