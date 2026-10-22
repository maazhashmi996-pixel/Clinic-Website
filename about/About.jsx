import React from 'react'
import { Link } from 'react-router-dom'
import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import AboutPurpose from '../components/AboutPurpose'
import AboutImpact from '../components/AboutImpact'
import AboutChoose from '../components/AboutChoose'
import AboutFacilities from '../components/AboutFacilities'
import AboutTreatments from '../components/AboutTreatments'

function About() {
    return (
        <>
            <AboutHero></AboutHero>
            <AboutStory></AboutStory>
            <AboutPurpose></AboutPurpose>
            <AboutImpact></AboutImpact>
            <AboutChoose></AboutChoose>
            <AboutFacilities></AboutFacilities>
            <AboutTreatments></AboutTreatments>
        </>
    )
}

export default About
