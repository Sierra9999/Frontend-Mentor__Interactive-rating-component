import React, { useState } from 'react'
import StarIcon from "./icon-star.svg"
import "./styles.css"
import thankYouImage from "./illustration-thank-you.svg"

const RatingComponent = () => {

    const [selectedRating, setSelectedRating] = useState<null | number>(null)
    const [hasSubmitedRating, setHasSubmittedRatting] = useState<boolean>(false)

    const circleHolder = (numberForDisplay: number) => (
        <div onClick={() => { setSelectedRating(numberForDisplay) }} className={selectedRating === numberForDisplay ? 'number-circle selected-circle' : 'number-circle'}>
            {numberForDisplay}
        </div>)

    const submitScreen = () => (<>
        <div className='star-icon-circle'>
            <img src={StarIcon} alt="star-icon" />
        </div>
        <h3>How did we do?</h3>

        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className='rate-buittons-holder'>
            {[1, 2, 3, 4, 5].map(number => <>{circleHolder(number)}</>)}
        </div>

        <button
            disabled={selectedRating ? false : true}
            onClick={() => { setHasSubmittedRatting(true) }}
            className='rating-card-submit-button'>SUBMIT</button></>)

    const thankYouScreen = (selected : number | string = 1) => (<>
        <img src={thankYouImage} alt="thank-you-for-your-submission" />
        <p>you have selected {selected} out of 5 </p>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. if you ever need more support. don't hesitate to get in touch!
        </p>
    </>)

    return (<div className='rating-card'>
        {hasSubmitedRating ? thankYouScreen(selectedRating as number) : submitScreen()}</div>)
}

export default RatingComponent