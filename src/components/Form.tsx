import React, { FormEvent, useRef } from "react";

const Form = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const credentials = { email: "", password: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    credentials.email = emailRef.current.value;
    credentials.password = passwordRef.current.value;
    console.log(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
