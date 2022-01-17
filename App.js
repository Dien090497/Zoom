import React from "react";
import type { Node } from "react";
import { SafeAreaView, StatusBar, View, Text } from "react-native";

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"light-content"} style={'auto'}/>
      <View>
        <Text>
          Zoom
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
