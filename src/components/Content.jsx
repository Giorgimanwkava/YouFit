import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <section className='main-content'>
      <h1>Search for excercises</h1>
      <div className='searchbar-and-btn'>
        <input className='search-bar' type="text" placeholder="Search..." />
        <button className='search-btn'>Search</button>
      </div>
      <div>
        <select name='bodypart' id='bodypart-select'>
          <option value="">Choose bodypart</option>
          <option value="back">back</option>
          <option value="cardio">cardio</option>
          <option value="chest">chest</option>
          <option value="lower%20arms">lower arms</option>
          <option value="lower%20legs">lower legs</option>
          <option value="neck">neck</option>
          <option value="shoulders">shoulders</option>
          <option value="upper%20arms">upper arms</option>
          <option value="upper%20legs">upper legs</option>
          <option value="waist">waist</option>
        </select>
        <select name="equipment" id="equipment-select">
          <option value="">Choose equipment</option>
          <option value="assisted">assisted</option>
          <option value="band">band</option>
          <option value="barbell">barbell</option>
          <option value="body%20weight">body weight</option>
          <option value="bosu%20ball">bosu ball</option>
          <option value="cable">cable</option>
          <option value="dumbbell">dumbbell</option>
          <option value="elliptical%20machine">elliptical machine</option>
          <option value="ez%20barbell">ez barbell</option>
          <option value="hammer">hammer</option>
          <option value="kettlebell">kettlebell</option>
          <option value="leverage%20machine">leverage machine</option>
          <option value="medicine%20ball">medicine ball</option>
          <option value="olympic%20ball">olympic ball</option>
          <option value="resistance%20band">resistance band</option>
          <option value="roller">roller</option>
          <option value="rope">rope</option>
          <option value="skierg%20machine">skierg machine</option>
          <option value="sled%20machine">sled machine</option>
          <option value="smith%20machine">smith machine</option>
          <option value="stability%20ball">stability ball</option>
          <option value="stationary%20bike">stationary bike</option>
          <option value="stepmill%20machine">stepmill machine</option>
          <option value="tire">tire</option>
          <option value="trap%20bar">trap bar</option>
          <option value="upper%20body%20ergometer">upper body ergometer</option>
          <option value="weighted">weighted</option>
          <option value="wheel%20roller">wheel roller</option>
        </select>
        <select name='target' id='target-select'>
          <option value="">Choose target muscle</option>
          <option value="abductors">abductors</option>
          <option value="abs">abs</option>
          <option value="adductors">adductors</option>
          <option value="biceps">biceps</option>
          <option value="calves">calves</option>
          <option value="cardiovascular%20system">cardiovascular system</option>
          <option value="forearms">forearms</option>
          <option value="glutes">glutes</option>
          <option value="hamstrings">hamstrings</option>
          <option value="lats">lats</option>
          <option value="levator%20scapulae">levator scapulae</option>
          <option value="pectorals">pectorals</option>
          <option value="quads">quads</option>
          <option value="serratus%20anterior">serratus anterior</option>
          <option value="spine">spine</option>
          <option value="traps">traps</option>
          <option value="triceps">triceps</option>
          <option value="upper%20back">upper back</option>
        </select>
      </div>
    </section>
  )
}

export default Content