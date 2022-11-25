import React from 'react'
import codeabc from "../assets/codeABC.png"
import { NavSection } from '../styles/Common.styled'
import Progress from './Progress'

export default function Navbar() {
  return (
    <NavSection>
        <div>
            <img src={codeabc} alt="code abc" />
        </div>
        <Progress />
    </NavSection>
  )
}
