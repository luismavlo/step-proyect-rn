import { StyleSheet } from 'react-native';


export const colors = {
  bgPrimaryColor: '#e5ead4',
  bgSecondaryColor: '#9acc77',
  bgActiveColor: '#45936c',
  bgInactiveColor: '#334f53',

  textWhite: '#ffffff'
}


export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.bgPrimaryColor,
  },
})