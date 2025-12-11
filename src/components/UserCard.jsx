function UserCard(props) {
  return (
    <>
      <h3>Name {props.name}</h3>
      <p>Role:{props.role}</p>
    </>
  );
}

export default UserCard;
