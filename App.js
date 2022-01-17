import React from "react";
import { SafeAreaView} from "react-native";
import Route from "./src/route";
import Home from './src/screens/Home'

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}} >
      <Route/>
      {/*<Home/>*/}
    </SafeAreaView>
  );
};

export default App;
