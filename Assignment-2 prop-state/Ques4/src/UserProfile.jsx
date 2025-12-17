import UserInfo from "./UserInfo";

function UserProfile() {
  // parent data
  const name = "Sowmika";
  const age = 22;

  return (
    <div >
      <h2>User Profile</h2>

      {/* Passing props to child */}
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
