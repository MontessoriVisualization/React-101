const Card = ({ name="User", age=0 }) => {
  return (
    <div>
      <h2>Card Component</h2>
      <p>This is a card component.</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}
export default Card