import Fbc from "./All_Topics/01_Types-Of-Components/Fbc";
import Cbc from "./All_Topics/01_Types-Of-Components/Cbc";
import StatesInFbc from "./All_Topics/02_States/StatesInFbc";
import Counter from "./All_Topics/02_States/Counter";
import "./index.css";
import Counter1 from "./All_Topics/02_States/Counter1";
import Parent from "./All_Topics/03_props/Parent";
import UserContext from "./All_Topics/04_ContextAPI/UserContext";
import HomePgae from "./All_Topics/04_ContextAPI/HomePgae";
import ControlledForms from "./All_Topics/05_Forms/ControlledForms";
import ProductsList from "./All_Topics/06_list/ProductsList";
import UserList from "./All_Topics/06_list/UserList";
import SideEffects from "./All_Topics/07_SideEffects/SideEffects";
import Routing from "./All_Topics/08_Routing/Routing";
import Optimization from "./All_Topics/09_Optimization/Optimization";

function App() {
  return (
    <div>
      {/* <h1>Hello World! - I am App Component</h1> */}

      {/* <Fbc /> I am call inside App Component and import also  */}
      {/* <Fbc /> */}
      {/* <Cbc /> */}
      {/* <StatesInFbc /> */}
      {/* <Counter /> */}
      {/* <Counter1 /> */}
      {/* <Parent /> */}

      {/* <UserContext>
        <HomePgae />
      </UserContext> */}

      {/* <ControlledForms /> */}
      {/* <UserList /> */}
      {/* <ProductsList /> */}
      {/* <SideEffects /> */}
      {/* <Routing /> */}
      <Optimization />
    </div>
  );
}

export default App;
