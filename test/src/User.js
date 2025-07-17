// This is a jsx component
// props is like an attribute
export const User = (props) => {
  return (
  <div>
    <h1>{props.name}</h1> 
    <h2>{props.age}</h2> 
    <h2>{props.email}</h2> 
  </div>
  );
};