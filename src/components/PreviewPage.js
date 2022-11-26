import React, { useState } from 'react'
import { Container } from '../styles/Page.styled'

export default function PreviewPage({ surveyData }) {
    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "2.4rem" }}>Preview Your Survey</h2>
            <Container>
                <div className='preview_card'>
                    <p><span>Question:</span> Which Programming Language do you Love?</p>
                    <p><span>Answer:</span> {surveyData.language}</p>
                </div>
                <div className='preview_card'>
                    <p><span>Question:</span> How many years of experice do you have?</p>
                    <p><span>Answer:</span> {surveyData.experience}</p>
                </div>
                <div className='preview_card'>
                    <p><span>Question:</span> Your Favourite Youtube Channel?</p>

                    <p><span>Answer:</span>
                        {
                            surveyData.favouriteChannel.map((channel, index) => (
                                <p key={index}>{channel}</p>
                            ))
                        }
                    </p>
                </div>
            </Container>
        </>
    )
}
