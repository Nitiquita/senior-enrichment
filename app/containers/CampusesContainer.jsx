import Campuses from '../components/Campuses';
import { connect } from 'react-redux';


const mapState = (state) => {
    return {
        campuses: state.campuses
    }
}

const CampusesContainer =  connect(mapState)(Campuses)

export default CampusesContainer