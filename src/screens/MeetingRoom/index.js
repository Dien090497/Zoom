import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function MeetingRoom(){
  const [name, setName] = useState('')
  const [roomID, setRoomID] = useState('')
  return (
    <View style={styles.container}>
      <View>
          <TextInput style={styles.textInput}
                     value={name}
                     placeholderTextColor={'#767476'}
                     placeholder={'Enter Name'}
                     onChangeText={setName}/>
          <TextInput  style={styles.textInput}
                      value={roomID}
                      placeholder={'Enter room id'}
                      placeholderTextColor={'#767476'}
                      onChangeText={setRoomID}/>
        <TouchableOpacity style={styles.btnStart}>
          <Text style={{color: 'white'}}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

