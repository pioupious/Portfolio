import Header from "./component/Header";
import Body from "./component/Body";
import Rovers from "./atoms/Rovers";

export default function App() {
  return (
    <>
      <div className="page-shell">
        <Header />
        <Body />
      </div>
      <Rovers />
    </>
  )
}