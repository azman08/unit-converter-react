import PropTypes from "prop-types";
const Student = (props) => {
  return (
    <div className="student">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student :{props.isStudent ? "True" : "False"} </p>
    </div>
  );
};

Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
