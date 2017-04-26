import Students from '../components/Students';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

const StudentsContainer = connect(
  mapStateToProps
)(Students);

export default StudentsContainer;