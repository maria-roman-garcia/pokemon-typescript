//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp, faChevronLeft, faChevronCircleRight, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

//icons
const sortUp = <FontAwesomeIcon icon={faSortUp} color="#454545" size="2x" />
const sortDown = <FontAwesomeIcon icon={faSortDown} color="#454545" size="2x" />
const backArrow = <FontAwesomeIcon icon={faChevronLeft} color="#454545" size="2x" />
const rightArrow = <FontAwesomeIcon icon={faChevronCircleRight} color="#454545" size="1x" />
const iconYes = <FontAwesomeIcon icon={faCheckCircle} color="rgb(139, 211, 118)" size="1x" />
const iconNo = <FontAwesomeIcon icon={faTimesCircle} color="rgb(255, 162, 162)" size="1x" />

export default {
    sortUp,
    sortDown,
    backArrow,
    rightArrow,
    iconYes,
    iconNo
}