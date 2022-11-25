import React from 'react'
import { Container } from '../styles/Page.styled'

export default function SecondPage() {
    return (
        <Container>
            <h2>How many years of experice do you have?</h2>
            <div className='card_container'>
                <input type="text" />
            </div>
            <div className='btn_container'>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </Container>
    )
}
