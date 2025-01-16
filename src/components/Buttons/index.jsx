import "./button.css";
const Button = ({ tittle = "No Tittle", isActive, childern }) => {
    return (
        <button className={isActive ? "activeButton" : "buttons"}>
            {tittle}
        </button>
    );
};

export default Button;
