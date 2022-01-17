import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";

export default function Home({navigation}) {

  const menu = [
    {
      id: 1,
      mane: "video-camera",
      title: "New-Meeting",
      onPress: () => {
        navigation.navigate('MeetingRoom')
      },
    },
    {
      id: 2,
      mane: "plus-square",
      title: "Join",
      onPress: () => {
        console.log("Join");
      },
    },
    {
      id: 3,
      mane: "calendar",
      title: "Schedule",
      onPress: () => {
        console.log("Schedule");
      },
    },
    {
      id: 4,
      mane: "upload",
      title: "Share-Screen",
      onPress: () => {
        console.log("Share-Screen");
      },
    },
  ];

  const contact = [
    {
      type: "starred",
      name: "Starred",
      onPress: () => {
        console.log("New-Meeting");
      },
    },
    {
      type: "contact",
      name: "Name1",
      photo: require("../../assets/images/avatar1.jpg"),
      onPress: () => {
        console.log("Join");
      },
    },
    {
      type: "contact",
      name: "Name2",
      photo: require("../../assets/images/avatar2.jpg"),
      onPress: () => {
        console.log("Join");
      },
    },
    {
      type: "contact",
      name: "Name3",
      photo: require("../../assets/images/avatar3.jpg"),
      onPress: () => {
        console.log("Join");
      },
    },
    {
      type: "contact",
      name: "Name4",
      photo: require("../../assets/images/avatar4.jpg"),
      onPress: () => {
        console.log("Join");
      },
    },
    {
      type: "contact",
      name: "Name5",
      photo: require("../../assets/images/avatar5.jpg"),
      onPress: () => {
        console.log("Join");
      },
    },
  ];


  return (
    <View>
      <View style={styles.header}>
        <Entypo name="notification" size={20} color="#fff" />
        <Text style={styles.textHeader}>Meet & Chat</Text>
        <Entypo name="new-message" size={20} color="#fff" />
      </View>
      <View style={styles.search}>
        <Fontisto name="search" size={15} color="#fff" style={{ marginRight: 10 }} />
        <Text>Search</Text>
      </View>
      <View style={styles.menu}>
        {menu.map((obj, i) => {
          return (
            <View key={obj.id} style={styles.itemMenu}>
              <Pressable style={[styles.pressMenu, i === 0 ? { backgroundColor: "#d57f21" } : null]}
                         onPress={obj.onPress}>
                <FontAwesome name={obj.mane} size={20} color="#fff" />
              </Pressable>
              <Text style={styles.textItemMenu}>{obj.title}</Text>
            </View>);
        })}
      </View>
      <View style={styles.contact}>
        {contact.map((obj, i) => {
          if (obj.type === "starred") {
            return (
              <View style={styles.itemContact} key={i}>
                <View style={styles.avatar}>
                  <AntDesign name={"star"} size={20} color="#fff" />
                </View>
                <Text>Stared</Text>
              </View>
            );
          } else {
            return (
              <View style={styles.itemContact} key={i}>
                <View style={styles.avatar}>
                  <Image source={obj.photo} style={{ width: 45, height: 45, borderRadius: 15 }} />
                </View>
                <Text>{obj.name}</Text>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
}
