import React, { useState } from "react";

export default function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [userFormError, setUserFormError] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });
  // const handleInputChange = (e) => {
  //   if (e.target.name === "name") {
  //     setUserForm({
  //       ...userForm,
  //       name: e.target.value,
  //     });
  //     setUserFormError({
  //       ...userFormError,
  //       name:
  //         e.target.value.length === 0
  //           ? "this field is required."
  //           : e.target.value.length < 3
  //           ? "Min. length is 3."
  //           : null,
  //     });
  //   }
  //   if (e.target.name === "email") {
  //     setUserForm({
  //       ...userForm,
  //       email: e.target.value,
  //     });
  //   }
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });

    // Validation logic for name
    if (name === "name") {
      setUserFormError({
        ...userFormError,
        name:
          value.trim() === ""
            ? "This field is required."
            : value.length < 3
            ? "Min. length is 3."
            : null,
      });
    }

    // Validation logic for email
    if (name === "email") {
      setUserFormError({
        ...userFormError,
        email:
          !value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
            ? "Invalid email format."
            : null,
      });
    }

    // Validation logic for username (no spaces)
    if (name === "userName") {
      setUserFormError({
        ...userFormError,
        userName: value.includes(" ") ? "Username cannot contain spaces." : null,
      });
    }

    // Validation logic for password
    if (name === "password") {
      setUserFormError({
        ...userFormError,
        password:
          value.length < 8
            ? "Min. length is 8."
            : !value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            ? "Password must contain at least one lowercase, one uppercase, one digit, and one special character."
            : null,
      });
    }

    // Validation logic for confirm password
    if (name === "confirmPassword") {
      setUserFormError({
        ...userFormError,
        confirmPassword:
          value !== userForm.password ? "Passwords do not match." : null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
  };
  return (
    <div className="container w-50">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userForm.name}
            onChange={handleInputChange}
            name="name"
          />
          {userFormError.name && (
            <div className="text-danger">{userFormError.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={userForm.email}
            onChange={handleInputChange}
            name="email"
          />
          {userFormError.email && (
            <div className="text-danger">{userFormError.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={userForm.userName}
            onChange={handleInputChange}
            name="userName"
          />
          {userFormError.userName && (
            <div className="text-danger">{userFormError.userName}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userForm.password}
            onChange={handleInputChange}
            name="password"
          />
          {userFormError.password && (
            <div className="text-danger">{userFormError.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={userForm.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />
          {userFormError.confirmPassword && (
            <div className="text-danger">{userFormError.confirmPassword}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
