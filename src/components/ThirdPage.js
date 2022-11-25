import React, { useState } from 'react'
import { Container } from '../styles/Page.styled'
import codeABC from "../assets/codeABC.png"
import lws from "../assets/lws.png"
import stackLearner from "../assets/stackLearner.png"

export default function ThirdPage() {
    return (
        <Container>
            <h2>Your Favourite Youtube Channel?</h2>
            <div className='card_container'>
                <div className='card' >
                    <img src={codeABC} alt="code abc" />
                    <p>Code ABC</p>
                </div>
                <div className='card' >
                    <img src={stackLearner} alt="stack" />
                    <p>Stack Learner</p>
                </div>
                <div className='card' >
                    <img src={lws} alt="javascript" />
                    <p>Learn With Sumit</p>
                </div>
            </div>
            <div className='btn_container'>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </Container>
    )
}
