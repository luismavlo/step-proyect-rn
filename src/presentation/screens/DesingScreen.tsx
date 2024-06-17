import { StyleSheet, View, Dimensions, Text } from 'react-native';

export const DesingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {/* Esquinas de la mesa */}
        <View style={styles.holeTopLeft} />
        <View style={styles.holeTopRight} />
        <View style={styles.holeBottomLeft} />
        <View style={styles.holeBottomRight} />
        <View style={styles.holeMiddleLeft} />
        <View style={styles.holeMiddleRight} />

        {/* Bordes de la mesa */}
        <View style={styles.topBorder} />
        <View style={styles.bottomBorder} />
        <View style={styles.leftBorder} />
        <View style={styles.rightBorder} />

        {/* Superficie de la mesa */}
        <View style={styles.tableSurface} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82b9ef',
  },
  table: {
    flex: 1,
    width: '90%',
    height: '90%',
    position: 'relative',
    backgroundColor: '#7ff85b',
    borderWidth: 10,
    borderColor: '#4a4a4a',
    borderRadius: 10,
  },
  tableSurface: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: '#006400',
    borderRadius: 10,
  },
  holeTopLeft: {
    position: 'absolute',
    top: -15,
    left: -15,
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
  },
  holeTopRight: {
    position: 'absolute',
    top: -15,
    right: -15,
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
  },
  holeBottomLeft: {
    position: 'absolute',
    bottom: -10,
    left: -15,
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
  },
  holeBottomRight: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
  },
  holeMiddleLeft: {
    position: 'absolute',
    top: '50%',
    left: -15,
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
    marginTop: -15,
  },
  holeMiddleRight: {
    position: 'absolute',
    top: '50%',
    right: -15,
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 15,
    marginTop: -15,
  },
  topBorder: {
    position: 'absolute',
    top: 0,
    left: 30,
    right: 30,
    height: 20,
    backgroundColor: '#4a4a4a',
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 30,
    height: 20,
    backgroundColor: '#4a4a4a',
  },
  leftBorder: {
    position: 'absolute',
    top: 30,
    bottom: 30,
    left: 0,
    width: 20,
    backgroundColor: '#4a4a4a',
  },
  rightBorder: {
    position: 'absolute',
    top: 30,
    bottom: 30,
    right: 0,
    width: 20,
    backgroundColor: '#4a4a4a',
  },
});