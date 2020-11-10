import React from 'react'
import'../App.css';
import { Button } from './Button'
import '../components/HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1> Explore My Portfolio</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >Start Here
                </Button>
                <Button className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Watch Video 
                <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
