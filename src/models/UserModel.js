import PropTypes from 'prop-types';

function UserModel() {
  return PropTypes.shape({  
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    details:PropTypes.shape( {
      city: PropTypes.string,
      company: PropTypes.string,
      position: PropTypes.string
    })
  });
}
  
export default UserModel;