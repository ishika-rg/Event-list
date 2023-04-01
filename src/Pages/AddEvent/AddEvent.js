import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { add_event } from "../../Redux/actions/Action";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

const AddEvent = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const defaultValue = {
    EventName: "",
    EventDate: "",
    EventDetail: "",
    Venue: "",
    Time: "",
  };

  const validationSchema = yup.object().shape({
    EventName: yup.string().required("Please enter the event name"),
    EventDate: yup.string().required("Please enter the event date"),

    EventDetail: yup.string().required(),

    Venue: yup.string().required("Please enter the event venue"),

    Time: yup.string().required("Please enter the event time"),
  });

  const handleSubmit = (values) => {
    // console.log("values", values);

    const data = values;
    dispatch(add_event(data));

    window.alert("Event Added Successfully!");
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Add Event Here</h1>
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="eventForm d-flex flex-column mb-2">
          <Field
            type="text"
            name="EventName"
            placeholder="Enter event name"
            className="mb-2 w-50 m-auto"
          />
          <p className="text-danger">
            <ErrorMessage name="EventName" />
          </p>
          <Field
            type="date"
            name="EventDate"
            placeholder="Enter event date"
            className="mb-2 w-50 m-auto"
          />
          <p className="text-danger">
            <ErrorMessage name="EventDate" />
          </p>

          <Field
            type="text"
            name="EventDetail"
            placeholder="Enter event detail"
            className="mb-2 w-50 m-auto"
          />
          <p className="text-danger">
            <ErrorMessage name="EventDetail" />
          </p>
          <Field
            type="text"
            name="Venue"
            placeholder="Enter event venue"
            className="mb-2 w-50 m-auto"
          />
          <p className="text-danger">
            <ErrorMessage name="Venue" />
          </p>
          <Field
            type="time"
            name="Time"
            placeholder="Enter event time"
            className="mb-2 w-50 m-auto"
          />
          <p className="text-danger">
            <ErrorMessage name="Time" />
          </p>

          <button className=" btn btn-secondary m-auto" type="submit">
            Submit{" "}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddEvent;
