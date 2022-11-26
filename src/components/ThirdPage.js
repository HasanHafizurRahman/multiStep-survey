import React, { useState } from 'react'
import { Container } from '../styles/Page.styled'
import codeABC from "../assets/codeABC.png"
import lws from "../assets/lws.png"
import stackLearner from "../assets/stackLearner.png"
import { thirdPageData } from './Data'

export default function ThirdPage({ setPage, setSurveyData, surveyData }) {
    return (
        <Container>
            <h2>Your Favourite Youtube Channel?</h2>
            <div className='card_container'>
                {
                    thirdPageData.map(channel => (
                        <div className='card' key={channel.id} style={{ border: surveyData.favouriteChannel.includes(channel.channelName) ? "2px solid #000" : "" }} onClick={() => setSurveyData({ ...surveyData, favouriteChannel: [...surveyData.favouriteChannel, channel.channelName] })} >
                            <img src={channel.img} alt={channel.channelName} />
                            <p>{channel.channelName}</p>
                        </div>
                    ))
                }
            </div>
            <div className='btn_container'>
                <button onClick={() => setPage(prevPage => prevPage - 1)}>Prev</button>
                <button onClick={() => setPage(4)}>Next</button>
            </div>
        </Container>
    )
}
