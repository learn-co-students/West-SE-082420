import React from 'react';
import BowieCard from './BowieCard';
import {connect} from 'react-redux'

const Bowies = props => {
    console.log(props)
    const mapBowies = () => {
        let bowieArray = Object.values(props.bowies);
        let bowieCard = bowieArray.map(bowie => {
            return(
                <BowieCard
                key={ bowie.id }
                bowie={bowie}
                />
            )
        })
        return bowieCard;
    }
    return (
        <div>
            <div className="container">
                {mapBowies()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        bowies: state.bowies
    }
}

export default connect(mapStateToProps)(Bowies)
