import Button from "./Button";
import PropTypes from "prop-types"; //nödvändig?

const Header = ({ title, onAdd, showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        name={showAdd ? "Close" : "Add Contact"}
        onClick={onAdd}
      />
       
     
    </header>
  );
};

Header.defaultProps = {
  title: "PhoneBook",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
