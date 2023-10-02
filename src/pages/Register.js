// import React, { useState } from "react";

// export default function Register() {
//   const [userForm, setUserForm] = useState({
//     name: "",
//     email: "",
//     userName: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [userFormError, setUserFormError] = useState({
//     name: null,
//     email: null,
//     userName: null,
//     password: null,
//     confirmPassword: null,
//   });
//   // const handleInputChange = (e) => {
//   //   if (e.target.name === "name") {
//   //     setUserForm({
//   //       ...userForm,
//   //       name: e.target.value,
//   //     });
//   //     setUserFormError({
//   //       ...userFormError,
//   //       name:
//   //         e.target.value.length === 0
//   //           ? "this field is required."
//   //           : e.target.value.length < 3
//   //           ? "Min. length is 3."
//   //           : null,
//   //     });
//   //   }
//   //   if (e.target.name === "email") {
//   //     setUserForm({
//   //       ...userForm,
//   //       email: e.target.value,
//   //     });
//   //   }
//   // };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserForm({
//       ...userForm,
//       [name]: value,
//     });

//     // Validation logic for name
//     if (name === "name") {
//       setUserFormError({
//         ...userFormError,
//         name:
//           value.trim() === ""
//             ? "This field is required."
//             : value.length < 3
//             ? "Min. length is 3."
//             : null,
//       });
//     }

//     // Validation logic for email
//     if (name === "email") {
//       setUserFormError({
//         ...userFormError,
//         email:
//           !value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
//             ? "Invalid email format."
//             : null,
//       });
//     }

//     // Validation logic for username (no spaces)
//     if (name === "userName") {
//       setUserFormError({
//         ...userFormError,
//         userName: value.includes(" ") ? "Username cannot contain spaces." : null,
//       });
//     }

//     // Validation logic for password
//     if (name === "password") {
//       setUserFormError({
//         ...userFormError,
//         password:
//           value.length < 8
//             ? "Min. length is 8."
//             : !value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
//             ? "Password must contain at least one lowercase, one uppercase, one digit, and one special character."
//             : null,
//       });
//     }

//     // Validation logic for confirm password
//     if (name === "confirmPassword") {
//       setUserFormError({
//         ...userFormError,
//         confirmPassword:
//           value !== userForm.password ? "Passwords do not match." : null,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(userForm);
//   };
//   return (
//     <div className="container w-50">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={userForm.name}
//             onChange={handleInputChange}
//             name="name"
//           />
//           {userFormError.name && (
//             <div className="text-danger">{userFormError.name}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="email"
//             value={userForm.email}
//             onChange={handleInputChange}
//             name="email"
//           />
//           {userFormError.email && (
//             <div className="text-danger">{userFormError.email}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="userName" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="userName"
//             value={userForm.userName}
//             onChange={handleInputChange}
//             name="userName"
//           />
//           {userFormError.userName && (
//             <div className="text-danger">{userFormError.userName}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={userForm.password}
//             onChange={handleInputChange}
//             name="password"
//           />
//           {userFormError.password && (
//             <div className="text-danger">{userFormError.password}</div>
//           )}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="confirmPassword"
//             value={userForm.confirmPassword}
//             onChange={handleInputChange}
//             name="confirmPassword"
//           />
//           {userFormError.confirmPassword && (
//             <div className="text-danger">{userFormError.confirmPassword}</div>
//           )}
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim() || !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      errors.email = "Invalid email format";
    }

    if (!formData.username.trim() || formData.username.includes(" ")) {
      errors.username = "Username cannot contain spaces";
    }

    if (
      !formData.password.trim() ||
      !formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ) {
      errors.password =
        "Password must contain at least one lowercase, one uppercase, one digit, and one special character (@$!%*?&), and be at least 8 characters long";
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form is valid, clear the data
      setFormData({
        name: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      });
      console.log("Form submitted:", formData);
    }
  };


  return (
    <div className="container w-50 mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.username ? "is-invalid" : ""}`}
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formErrors.username && <div className="invalid-feedback">{formErrors.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${formErrors.confirmPassword ? "is-invalid" : ""}`}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && (
            <div className="invalid-feedback">{formErrors.confirmPassword}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;



