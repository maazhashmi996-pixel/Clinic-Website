import React from 'react'
import { Link } from 'react-router-dom'
import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import AboutPurpose from '../components/AboutPurpose'
import AboutImpact from '../components/AboutImpact'

function About() {
    return (
        <>
            <AboutHero></AboutHero>
            <AboutStory></AboutStory>
            <AboutPurpose></AboutPurpose>
            <AboutImpact></AboutImpact>
        </>
    )
}

export default About
