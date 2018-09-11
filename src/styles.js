import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
  container: {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  }, introPageButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
    },
    nextButton: {
      flex: 1,
      alignItems: 'center',
      width: 60,
      height: 60 
    },
    introPageButtonBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    multiLineinput:{
      height: 100,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginVertical: 5,
      textAlignVertical:'top',
      width: window.width - 30,
    }
});

