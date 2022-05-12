import { useState, useEffect } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
      <h1>Register</h1>
      <p>
        Please create an account, this allows you to submit projects and manage
        any projects you have created.
      </p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name..."
          onChange={onChange}
        />
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
        <input
          type="password"
          id="password2"
          name="password2"
          value={password2}
          placeholder="Enter your repeat your password..."
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
