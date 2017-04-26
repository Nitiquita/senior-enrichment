import Students from '../components/Students';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        campuses: state.campuses 
    }
}

export default connect(mapStateToProps)(Campuses)