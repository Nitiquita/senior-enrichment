import Students from '../components/Students';
import { connect } from 'react-redux';

const mapState = ({students}) => ({students})


const StudentsContainer = connect(
  mapState, null
)(Students);

export default StudentsContainer;