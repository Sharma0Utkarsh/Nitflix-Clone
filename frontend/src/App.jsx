import Nav from "./component/Nav";
import Trends from "./component/Trends";
import Reasons from "./component/Reasons";
import Questions from "./component/Questions";
import Subscription from "./Subscription";
import Footer from "./footer";


const App = ()=>{
  return(
    <div className=" bg-black px-30 text-white">
      <Nav />
      <Trends />
      <Reasons />
      <Questions />
      <Subscription />
      <Footer/>

    </div>
  );
};
export default App;
