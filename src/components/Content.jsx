import React from 'react'
import './Content.css'

const Content = () => {
  // const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '41439c410emsh69908f56a5b982dp1f7bc8jsn1bba7960eb67',
  //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //   }
  // };
  // // async function fetchData() {
  // //   try {
  // //     const response = await fetch(url, options);
  // //     const result = await response.json();
  // //     console.log(result);
  // //   } catch (error) {
  // //     console.error(error);
  // //   }
  // // }
  // // fetchData();
  // fetch(url,options)
  //   .then(response => response.json())
  //   .then(data => console.log(data[0]))
  //   .catch(error => console.log(error))
  return (
    <section className='main-content'>
      <h1>Search for excercises</h1>
      <div className='searchbar-and-btn'>
        <input className='search-bar' type="text" placeholder="Search..." />
        <button className='search-btn'>Search</button>
      </div>
    </section>
  )
}

export default Content