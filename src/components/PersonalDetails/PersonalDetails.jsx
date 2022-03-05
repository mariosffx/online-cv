function PersonalDetails({
  firstName,
  lastName,
  location,
  email,
  telephone,
  introduction,
  linkedIn,
}) {
  return (
    <div className="margin-y-8">
      <div className="display-flex justify-content-space-between margin-bottom-8">
        <div className="align-self-flex-end">
          <div>{location}</div>
          <div>{linkedIn}</div>
        </div>
        <h1 className="text-align-center align-self-flex-start">
          {firstName} {lastName}
        </h1>
        <div className="text-align-right align-self-flex-end">
          <div>{telephone}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>{introduction}</div>
    </div>
  );
}

export { PersonalDetails };
