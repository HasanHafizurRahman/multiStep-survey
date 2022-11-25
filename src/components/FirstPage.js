import React from 'react'
import { Container } from '../styles/Page.styled'
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import php from "../assets/php.png"

export default function FirstPage() {
    return (
        <Container>
            <h2>Which Programming Language do you Love?</h2>
            <div className='card_container'>
                <div className='card'>
                    <img src={javascript} alt="javascript" />
                    <p>javascript</p>
                </div>
                <div className='card'>
                    <img src={javascript} alt="javascript" />
                    <p>javascript</p>
                </div>
                <div className='card'>
                    <img src={javascript} alt="javascript" />
                    <p>javascript</p>
                </div>
            </div>
            <div className='btn_container'>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </Container>
    )
}
