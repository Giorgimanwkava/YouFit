import { useEffect, useState } from 'react'
import React from 'react'
import './ExcerciseCard.css'

const ExcerciseCard = (props) => {

    const [exercise, setExercise] = useState({})

    const options = {
	    method: 'GET',
        headers: {
            'X-RapidAPI-Key': '41439c410emsh69908f56a5b982dp1f7bc8jsn1bba7960eb67',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }
    
    async function fetchData(argOffset){
        try {
            const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises?limit=1&offset=${argOffset}`, options);
            if(!response.ok){
                throw new Error("could not fetch resource")
            }
            const result = await response.json()
            const exerciseDetails=result[0]
            setExercise(exerciseDetails)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        // const offset = Math.floor(Math.random() * 1324); 
        const offset = 1;  
        fetchData(offset);
        console.log(exercise)
    },[])

    

    return (
        <div className='exercise-card'>
            <img className='exercise-gif' src = {exercise.gifUrl} alt='animated exercise gif'/>
            <h4>{exercise.name}</h4>
            <div className='exercise-descriptions'>
                <label></label>
                <label></label>
                <label></label>
            </div>
        </div>
    )
}

export default ExcerciseCard
