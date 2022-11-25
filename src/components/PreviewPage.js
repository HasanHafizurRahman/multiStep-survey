import React, { useState } from 'react'
import { Container } from '../styles/Page.styled'

export default function PreviewPage() {
    let [favouriteChannel, setFavouriteChannel] = useState(["Learn With Sumit", "code ABc"]);

    console.log("favouriteChannel", favouriteChannel)
    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "2.4rem" }}>Preview Your Survey</h2>
            <Container>
                <div className='preview_card'>
                    <p><span>Question:</span> Which Programming Language do you Love?</p>
                    <p><span>Answer:</span> javascript</p>
                </div>
                <div className='preview_card'>
                    <p><span>Question:</span> How many years of experice do you have?</p>
                    <p><span>Answer:</span><p>Code ABC</p> <p>Learn With Sumit</p> <p>Stack Learner</p> </p>
                </div>
                <div className='preview_card'>
                    <p><span>Question:</span> Your Favourite Youtube Channel?</p>
                    <p><span>Answer:</span> javascript</p>
                </div>
            </Container>
        </>
    )
}
