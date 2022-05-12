import { useState, useEffect } from "react";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h1>Login</h1>
      <p>Please enter your email and password to login</p>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email..."
          onChange={onChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Enter your password..."
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
