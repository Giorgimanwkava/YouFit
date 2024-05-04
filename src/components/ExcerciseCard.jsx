import { useEffect, useState } from 'react'
import React from 'react'
import './ExcerciseCard.css'
import Data from "../assets/data.json"

const ExcerciseCard = (props) => {

    const [exercise, setExercise] = useState({})
    
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
    //     console.log(exercise)
    // },[]) 

    
    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * 1324); 
        setExercise(Data[randomIndex])   
    },[])

    return (
        <div className='exercise-card'>
            <h4 className='exercise-name'>{exercise.name}</h4>
            <img className='exercise-gif' src = {exercise.gifUrl} alt='animated exercise gif'/>
            <div className='exercise-descriptions'>
                <label className='exercise-label bodyPart'>{exercise.bodyPart}</label>
                <label className='exercise-label equipment'>{exercise.equipment}</label>
                <label className='exercise-label target'>{exercise.target}</label>
            </div>
        </div>
    )
}

export default ExcerciseCard
