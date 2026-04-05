import React from "react";
import "./pages.css";

class FormValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      errors: {},
      success: ""
    };
  }

  validate() {
    let errors = {};

    if (!this.state.name.trim()) {
      errors.name = "Name is required";
    }

    if (!this.state.email) {
      errors.email = "Email is required";
    } else if (!this.state.email.includes("@")) {
      errors.email = "Invalid email";
    }

    if (!this.state.password) {
      errors.password = "Password is required";
    } else if (this.state.password.length < 6) {
      errors.password = "Minimum 6 characters";
    }

    if (!this.state.phone) {
      errors.phone = "Phone is required";
    } else if (this.state.phone.length !== 10) {
      errors.phone = "Enter valid 10 digit number";
    }

    if (!this.state.gender) {
      errors.gender = "Select gender";
    }

    return errors;
  }

  submit(e) {
  e.preventDefault();

  const errors = this.validate();

  if (Object.keys(errors).length > 0) {
    this.setState({ errors: errors, success: "" });
  } else {
    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      gender: this.state.gender
    };

    // Save to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // ✅ CLEAR FORM AFTER SAVE
    this.setState({
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      errors: {},
      success: "Form Saved Successfully ✅"
    });
  }
}

  render() {
    return (
      <div className="page">
        <h2>Form Validation</h2>

        <form onSubmit={(e) => this.submit(e)} className="form">

          {/* Name */}
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) =>
                this.setState({ name: e.target.value })
              }
            />
            <span className="error">{this.state.errors.name}</span>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={(e) =>
                this.setState({ email: e.target.value })
              }
            />
            <span className="error">{this.state.errors.email}</span>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) =>
                this.setState({ password: e.target.value })
              }
            />
            <span className="error">{this.state.errors.password}</span>
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="number"
              value={this.state.phone}
              onChange={(e) =>
                this.setState({ phone: e.target.value })
              }
            />
            <span className="error">{this.state.errors.phone}</span>
          </div>

          {/* Gender */}
          <div className="form-group">
  <label>Gender:</label>

  <div className="radio-group">
    <label className="radio-item">
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={this.state.gender === "Male"}
        onChange={(e) =>
          this.setState({ gender: e.target.value })
        }
      />
      Male
    </label>

    <label className="radio-item">
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={this.state.gender === "Female"}
        onChange={(e) =>
          this.setState({ gender: e.target.value })
        }
      />
      Female
    </label>
  </div>

  <span className="error">{this.state.errors.gender}</span>
</div>

          <button type="submit">Submit</button>

          <p className="success">{this.state.success}</p>
        </form>
      </div>
    );
  }
}

export default FormValidation;