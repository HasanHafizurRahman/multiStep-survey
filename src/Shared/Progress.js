import React from 'react'
import { ProgressSection, ProgressBar, DynamicProgress } from '../styles/Common.styled'

export default function Progress({page}) {
    let percentage = ((page -1) / 3) * 100;
    return (
        <ProgressSection>
            <ProgressBar>
                <DynamicProgress width={percentage}></DynamicProgress>
            </ProgressBar>
        </ProgressSection>
    )
}
