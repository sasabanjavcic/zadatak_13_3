import PropTypes from "prop-types";

function Players({ age, name }) {
  return (
    <div>
      <h4>
        {name} ima {age} godina.
      </h4>
    </div>
  );
}

Players.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Players;
