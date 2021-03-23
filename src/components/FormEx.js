import React from "react";
import { useDispatch } from "react-redux";
import formVal from "./../redux/actions";
const FormEx = ({ history }) => {
  const [item, setItem] = React.useState({
    Name: "",
    Email: "",
    Pass: "",
  });
  const getVal = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item);
  };
  const showProfile = () => {
    history.push("/profile");
  };
  const dispatch = useDispatch();

  return (
    <div className="form-style-8">
      <div>
        <label htmlFor="Name">Name :</label>
        <input
          type="text"
          value={item.Name}
          onChange={getVal}
          name="Name"
          placeholder="Enter Your Name"
        />
      </div>
      <div>
        <label htmlFor="Email">Email :</label>
        <input
          type="text"
          value={item.Email}
          onChange={getVal}
          name="Email"
          placeholder="Enter Your Email"
        />
      </div>
      <div>
        <label htmlFor="Pass">Password :</label>
        <input
          type="text"
          value={item.Pass}
          onChange={getVal}
          name="Pass"
          placeholder="Enter Your Password"
        />
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(
              formVal({ fn: item.Name, email: item.Email, pass: item.Pass })
            )
          }
        >
          Submit
        </button>
        <button onClick={showProfile}>Show Profile</button>
      </div>
    </div>
  );
};

export default FormEx;
