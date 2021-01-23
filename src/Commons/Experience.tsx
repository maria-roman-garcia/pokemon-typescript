import React from 'react';
import './Experience.scss';

interface ExperienceProps {
    normalRate: boolean;
    experience: number
}

const Experience = ({ normalRate, experience }: ExperienceProps) => {

    const colorPercentage = (percentage: number) => {
        if (percentage <= 20) {
            return "#e68020"
        } else if (percentage <= 40) {
            return "#e6b820"
        } else if (percentage <= 60) {
            return "#e3e620"
        } else if (percentage <= 80) {
            return "#b8e620"
        } else {
            return "#11af26"
        }
    }

    return (
        <div className="Experience">
            <div className="circle">
                <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle"
                        strokeDasharray={normalRate ? `${experience},100` : `${experience / 2},100`}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        stroke={colorPercentage(experience)} />
                </svg>
            </div>
            <p className="experienceNumber normalHandWrite bold">{experience}</p>
        </div>
    )

}

export default Experience;