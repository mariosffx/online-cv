import { A, Divider } from './../UI';

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
    <Divider className="margin-y-8">
      <Divider className="display-flex justify-content-space-between margin-bottom-8px">
        <Divider className="align-self-flex-end">
          <Divider>{location}</Divider>
          <Divider>
            <A href={linkedIn.link}>{linkedIn.text}</A>
          </Divider>
        </Divider>
        <h1 className="text-align-center align-self-flex-start">
          {firstName} {lastName}
        </h1>
        <Divider className="text-align-right align-self-flex-end">
          <Divider>
            <A href={telephone.link}>{telephone.text} </A>
          </Divider>
          <Divider>
            <A href={email.link}>{email.text}</A>
          </Divider>
        </Divider>
      </Divider>
      <Divider>{introduction}</Divider>
    </Divider>
  );
}

export { PersonalDetails };
