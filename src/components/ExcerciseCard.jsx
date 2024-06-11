import React,{ useEffect, useState } from 'react'
import './ExcerciseCard.css'

const ExcerciseCard = ({exercise}) => {
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
