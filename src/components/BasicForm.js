import useInputs from "../hooks/useInput-Reduce";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    resetInput: firstNameReset,
    isValid: firstNameIsValid,
  } = useInputs(isNotEmpty);

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    resetInput: lastNameReset,
    isValid: lastNameIsValid,
  } = useInputs(isNotEmpty);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetInput: emailReset,
    isValid: emailIsValid,
  } = useInputs(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (firstNameHasError) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameErrorClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameErrorClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailErrorClass = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameErrorClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">Name must be entered</p>
          )}
        </div>
        <div className={lastNameErrorClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Name must be entered</p>
          )}
        </div>
      </div>
      <div className={emailErrorClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
