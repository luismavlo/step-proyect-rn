import { StyleSheet, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
      <View style={styles.box5} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
      <View style={styles.box5} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
      <View style={styles.box5} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
      <View style={styles.box5} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
      <View style={styles.box5} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10
  },
  box1: {
    height: 80,
    width: 80,
    backgroundColor: '#46294a',
    left: 0,
  },
  box2: {
    height: 80,
    width: 80,
    backgroundColor: '#ad4c6b',
  },
  box3: {
    height: 80,
    width: 80,
    backgroundColor: '#e07767',
  },
  box4: {
    height: 80,
    width: 80,
    backgroundColor: '#e0ae67',
  },
  box5: {
    height: 80,
    width: 80,
    backgroundColor: '#d4e067'
  },
})