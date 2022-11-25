import React from 'react'
import { ProgressSection, ProgressBar, DynamicProgress } from '../styles/Common.styled'

export default function Progress() {
    return (
        <ProgressSection>
            <ProgressBar>
                <DynamicProgress width="70"></DynamicProgress>
            </ProgressBar>
        </ProgressSection>
    )
}
