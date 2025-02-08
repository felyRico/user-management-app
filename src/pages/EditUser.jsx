// src/pages/EditUser.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AddButton } from "../styles/Styled"; // Using the same gradient button

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await userService.getUser(userId);
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Error fetching user data");
      }
    };
    fetchUser();
  }, [userId]);

  if (error) {
    return <div style={{ padding: "1rem", color: "red" }}>{error}</div>;
  }

  if (!user) {
    return <div style={{ padding: "1rem" }}>Loading...</div>;
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    role: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await userService.updateUser(userId, values);
      navigate("/");
    } catch (err) {
      console.error("Error updating user:", err);
      setErrors({ submit: "Error updating user" });
    }
    setSubmitting(false);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Edit User</h2>
      <Formik
        initialValues={{ name: user.name, email: user.email, role: user.role }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
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
              {isSubmitting ? "Updating..." : "Update User"}
            </AddButton>
          </Form>
        )}
      </Formik>
    </div>
  );
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

export default EditUser;
