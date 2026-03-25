import Card from "./component/Cart"
import RandomBg from "./component/RandomBg"


 const App = () => {
  return (
    <div>
      <Card name="John Doe" age={30} />
      <Card name="Jane Smith" age={25} />
      <Card name="SAUGAT" age={32} />
      <Card/>

      <RandomBg />

    </div>
  )
}
export default App
