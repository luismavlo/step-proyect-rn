import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../config/theme/app-theme'
import { CircleComponent } from '../components/CircleComponent'
import { useState } from 'react'

const messages = [
  'AGRADECE',
  'PERDONA',
  'PLANEA',
  'VISUALIZA'
]

export const StepScreen = () => {

  const [step, setStep] = useState(1)

  const increase = () => {
    if (step >= 4) return
    setStep(step + 1)
  }

  const decrease = () => {
    if (step <= 1) return
    setStep(step - 1)
  }

  return (
    <View style={styles.card}>
      <View style={styles.contentCircle}>
        <CircleComponent stepNumber={1} currentStep={step} />
        <CircleComponent stepNumber={2} currentStep={step} />
        <CircleComponent stepNumber={3} currentStep={step} />
        <CircleComponent stepNumber={4} currentStep={step} />
      </View>
      <Text>
        {messages[step - 1]}
      </Text>
      <View style={styles.contentButtons}>
        <Pressable
          style={styles.button}
          onPress={decrease}
        >
          <Text style={{ color: colors.textWhite }}>BACK</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={increase}
        >
          <Text style={{ color: colors.textWhite }}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: colors.bgSecondaryColor,
    width: '100%',
    height: 200,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  contentCircle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 20
  },

  contentButtons: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%'
  },

  button: {
    padding: 10,
    backgroundColor: colors.bgInactiveColor,
    height: 40,
    borderRadius: 9
  }

})