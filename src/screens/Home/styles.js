import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 10,
    marginVertical: 10
  },
  textHeader:{
    fontSize: 20,
    color: 'white'
  },
  search:{
    flexDirection: 'row',
    padding:10,
    marginHorizontal: 20,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center'
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  itemMenu:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressMenu:{
    padding: 15,
    backgroundColor: '#1673ff',
    borderRadius: 10
  },
  textItemMenu:{
    fontSize:10,
    marginTop:5
  },
  contact:{
    padding: 20
  },
  itemContact:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  avatar:{
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  }
})
