import React,{ useEffect, useState, useRef, forwardRef } from 'react'
import './Content.css'
import ExcerciseCard from './ExcerciseCard'
import Data from "../assets/data.json"

const Content = forwardRef((props, ref) => {

  // this is function for fetching data from rapidAPI.
    // it is commented out because rapidAPI only allows for 550 calls/month
    // and I have exhausted my monthly limit

    // const options = {
	//     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '41439c410emsh69908f56a5b982dp1f7bc8jsn1bba7960eb67',
    //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //     }
    // }

    // async function fetchData(argOffset){
    //     try {
    //         const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises?limit=1&offset=${argOffset}`, options);
    //         if(!response.ok){
    //             throw new Error("could not fetch resource")
    //         }
    //         const result = await response.json()
    //         const exerciseDetails=result[0]
    //         setExercise(exerciseDetails)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(()=>{
    //     // const offset = Math.floor(Math.random() * 1324);  
    //     fetchData(offset);
    // },[]) 
  
  const [exercises, setExercises] = useState(Data);
  const [paginatedExercises, setPaginatedExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [bodyPartFilter, setBodyPartFilter] = useState('');
  const [equipmentFilter, setEquipmentFilter] = useState('');
  const [targetFilter, setTargetFilter] = useState('');
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [searchQuery, setSearchQuery] = useState('');
  
  const exercisesContainerRef = useRef(null);

  const exercisesPerPage = 6;
  const totalPages = Math.ceil(filteredExercises.length / exercisesPerPage);

  const handleBodyPartChange = (e) => {
    setBodyPartFilter(e.target.value);
  };
  const handleEquipmentChange = (e) => {
    setEquipmentFilter(e.target.value);
  };
  const handleTargetChange = (e) => {
    setTargetFilter(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // filtering exercises based on multi-select
  const filterData=()=>{
    const filteredData = exercises.filter(exercise => {
      return (
        (bodyPartFilter === '' || exercise.bodyPart === bodyPartFilter) &&
        (equipmentFilter === '' || exercise.equipment === equipmentFilter) &&
        (targetFilter === '' || exercise.target === targetFilter)&&
        (searchQuery === '' || exercise.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredExercises(filteredData);
  }

  // displaying paginated exercises
  useEffect(() => {
    const offset = (currentPage - 1) * exercisesPerPage;
    const paginatedData = filteredExercises.slice(offset, offset + exercisesPerPage);
    setPaginatedExercises(paginatedData);
  }, [currentPage, filteredExercises]);

  const handlePageClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      exercisesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const getPaginationNumbers = () => {
    const pages = [];
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    if (currentPage <= 3) {
      for (let i = 2; i <= Math.min(5, totalPages - 1); i++) {
        pages.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      for (let i = Math.max(totalPages - 4, 2); i <= totalPages - 1; i++) {
        pages.push(i);
      }
    } else {
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  }
  
  return (
    <section ref={ref} className='main-content'>
      <h1>Search for excercises</h1>
      <div className='searchbar-and-btn'>
        <input className='search-bar' type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
        <button className="fa-solid fa-magnifying-glass search-btn" onClick={filterData}></button>
      </div>
      <div className='multi-select'>
        <select name='bodypart' id='bodypart-select' value={bodyPartFilter} onChange={handleBodyPartChange}>
          <option value="">Choose bodypart</option>
          <option value="back">back</option>
          <option value="cardio">cardio</option>
          <option value="chest">chest</option>
          <option value="lower arms">lower arms</option>
          <option value="lower legs">lower legs</option>
          <option value="neck">neck</option>
          <option value="shoulders">shoulders</option>
          <option value="upper arms">upper arms</option>
          <option value="upper legs">upper legs</option>
          <option value="waist">waist</option>

          {/* <option value="">Choose bodypart</option>
          <option value="back">back</option>
          <option value="cardio">cardio</option>
          <option value="chest">chest</option>
          <option value="lower%20arms">lower arms</option>
          <option value="lower%20legs">lower legs</option>
          <option value="neck">neck</option>
          <option value="shoulders">shoulders</option>
          <option value="upper%20arms">upper arms</option>
          <option value="upper%20legs">upper legs</option>
          <option value="waist">waist</option> */}
        </select>
        <select name="equipment" id="equipment-select" value={equipmentFilter} onChange={handleEquipmentChange}>
          <option value="">Choose equipment</option>
          <option value="assisted">assisted</option>
          <option value="band">band</option>
          <option value="barbell">barbell</option>
          <option value="body weight">body weight</option>
          <option value="bosu ball">bosu ball</option>
          <option value="cable">cable</option>
          <option value="dumbbell">dumbbell</option>
          <option value="elliptical machine">elliptical machine</option>
          <option value="ez barbell">ez barbell</option>
          <option value="hammer">hammer</option>
          <option value="kettlebell">kettlebell</option>
          <option value="leverage machine">leverage machine</option>
          <option value="medicine ball">medicine ball</option>
          <option value="olympic ball">olympic ball</option>
          <option value="resistance band">resistance band</option>
          <option value="roller">roller</option>
          <option value="rope">rope</option>
          <option value="skierg machine">skierg machine</option>
          <option value="sled machine">sled machine</option>
          <option value="smith machine">smith machine</option>
          <option value="stability ball">stability ball</option>
          <option value="stationary bike">stationary bike</option>
          <option value="stepmill machine">stepmill machine</option>
          <option value="tire">tire</option>
          <option value="trap bar">trap bar</option>
          <option value="upper body ergometer">upper body ergometer</option>
          <option value="weighted">weighted</option>
          <option value="wheel roller">wheel roller</option>

          {/* <option value="">Choose equipment</option>
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
          <option value="wheel%20roller">wheel roller</option> */}
        </select>
        <select name='target' id='target-select' value={targetFilter} onChange={handleTargetChange}>
          <option value="">Choose target muscle</option>
          <option value="abductors">abductors</option>
          <option value="abs">abs</option>
          <option value="adductors">adductors</option>
          <option value="biceps">biceps</option>
          <option value="calves">calves</option>
          <option value="cardiovascular system">cardiovascular system</option>
          <option value="forearms">forearms</option>
          <option value="glutes">glutes</option>
          <option value="hamstrings">hamstrings</option>
          <option value="lats">lats</option>
          <option value="levator scapulae">levator scapulae</option>
          <option value="pectorals">pectorals</option>
          <option value="quads">quads</option>
          <option value="serratus anterior">serratus anterior</option>
          <option value="spine">spine</option>
          <option value="traps">traps</option>
          <option value="triceps">triceps</option>
          <option value="upper back">upper back</option>

          {/* <option value="">Choose target muscle</option>
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
          <option value="upper%20back">upper back</option> */}
        </select>
      </div>
      <div ref={exercisesContainerRef} className='exercises'>
        {paginatedExercises.map((exercise, index) => (
          <ExcerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className='pagination'>
        <button
          className={`page-number ${1 === currentPage ? 'disabled' : ''}`}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          &lt;
        </button>
        <button
          className={`page-number ${1 === currentPage ? 'disabled' : ''}`}
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
        {currentPage > 3 && <span className='skipped-page-dots'>...</span>}
        {getPaginationNumbers().map((pageNumber) => (
          <button
            className={`page-number ${pageNumber === currentPage ? 'disabled' : ''}`}
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages - 2 && <span className='skipped-page-dots'>...</span>}
        {totalPages > 1 && <button
          className={`page-number ${totalPages === currentPage ? 'disabled' : ''}`}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>}
        <button
          className={`page-number ${totalPages === currentPage ? 'disabled' : ''}`}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </section>
  )
})

export default Content