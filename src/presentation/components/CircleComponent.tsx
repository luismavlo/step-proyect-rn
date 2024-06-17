import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme/app-theme'

interface Props {
  stepNumber: number,
  currentStep: number
}

export const CircleComponent = ({ stepNumber, currentStep }: Props) => {

  const bgCircleColor = stepNumber === currentStep ? colors.bgActiveColor : colors.bgInactiveColor

  return (
    <View style={[styles.circle, { backgroundColor: bgCircleColor }]}>
      <Text style={styles.circleText}>{stepNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.bgInactiveColor,
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente
  },
  circleText: {
    textAlign: 'center',
    color: colors.textWhite,
    fontWeight: 'bold'
  }
})