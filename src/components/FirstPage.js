import React from 'react'
import { Container } from '../styles/Page.styled'
import { firstPageData } from './Data'

export default function FirstPage({ setPage, setSurveyData, surveyData }) {
    console.log("surveyData", surveyData)
    return (
        <Container>
            <h2>Which Programming Language do you Love?</h2>
            <div className='card_container'>
                {
                    firstPageData.map(data => (
                        <div className='card' style={{ border: surveyData.language === data.name ? "2px solid #000" : "" }} onClick={() => setSurveyData({ ...surveyData, language: data.name })}>
                            <img src={data.img} alt={data.name} />
                            <p>{data.name}</p>
                        </div>
                    ))
                }

            </div>
            <div className='btn_container'>
                <button>Prev</button>
                <button onClick={() => setPage(2)}>Next</button>
            </div>
        </Container>
    )
}
