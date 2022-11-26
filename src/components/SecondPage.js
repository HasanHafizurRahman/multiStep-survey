import React from 'react'
import { Container } from '../styles/Page.styled'

export default function SecondPage({setPage, setSurveyData, surveyData}) {
    console.log("setSurveyData", surveyData)
    return (
        <Container>
            <h2>How many years of experice do you have?</h2>
            <div className='card_container'>
                <input type="number" value={surveyData.experience} onChange={e => setSurveyData({...surveyData, experience: e.target.value})} />
            </div>
            <div className='btn_container'>
                <button  onClick={() => setPage(prevPage => prevPage -1)}>Prev</button>
                <button onClick={() => setPage(3)}>Next</button>
            </div>
        </Container>
    )
}
