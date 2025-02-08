import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userService from "../services/userService";
import { AddButton } from "../styles/Styled"; // Using our gradient button

const AddUser = ({ onClose, onUserAdded }) => {
  const initialValues = { name: "", email: "", role: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    role: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      const newUser = await userService.addUser(values);
      onUserAdded(newUser);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error adding user:", error);
      setErrors({ submit: "Error adding user" });
    }
    setSubmitting(false);
  };

  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <button onClick={onClose} style={closeButtonStyles}>
          &times;
        </button>
        <h2>Add User</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <div style={fieldContainerStyles}>
                <label htmlFor="name">Name:</label>
                <Field name="name" type="text" style={inputStyles} />
                <ErrorMessage name="name" component="div" style={errorStyles} />
              </div>
              <div style={fieldContainerStyles}>
                <label htmlFor="email">Email:</label>
                <Field name="email" type="email" style={inputStyles} />
                <ErrorMessage name="email" component="div" style={errorStyles} />
              </div>
              <div style={fieldContainerStyles}>
                <label htmlFor="role">Role:</label>
                <Field name="role" type="text" style={inputStyles} />
                <ErrorMessage name="role" component="div" style={errorStyles} />
              </div>
              {errors.submit && <div style={errorStyles}>{errors.submit}</div>}
              <AddButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add User"}
              </AddButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyles = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  position: "relative",
  width: "400px",
  maxWidth: "90%",
};

const closeButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",
};

const fieldContainerStyles = {
  marginBottom: "1rem",
};

const inputStyles = {
  width: "100%",
  padding: "0.5rem",
  marginTop: "0.25rem",
  boxSizing: "border-box",
};

const errorStyles = {
  color: "red",
  fontSize: "0.8rem",
};



// Too lazy to do it at Styled.js
export default AddUser;
