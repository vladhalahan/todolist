import { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }

  function addGoalHandler() {
    const trimmed = enteredGoalText.trim();
    if (!trimmed) return;
    props.onAddGoal(trimmed);
    setEnteredGoalText('');
    props.onCloseModal();
  }

  const canAddGoal = enteredGoalText.trim().length > 0;

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modalRoot}>
        <View style={styles.formContainer}>
          <View style={styles.inputSection}>
            <Image
              source={require('../assets/images/goal.png')}
              style={styles.image}
            />
            <TextInput
              style={styles.textInput}
              placeholder="What do you want to achieve?"
              placeholderTextColor="#9e9aa8"
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            />
          </View>
          <View style={styles.buttonRow}>
            <Pressable
              onPress={addGoalHandler}
              disabled={!canAddGoal}
              style={({ pressed }) => [
                styles.addButton,
                !canAddGoal && styles.addButtonDisabled,
                pressed && canAddGoal && styles.addButtonPressed,
              ]}
            >
              <Text
                style={[
                  styles.addButtonText,
                  !canAddGoal && styles.addButtonTextDisabled,
                ]}
              >
                Add Goal
              </Text>
            </Pressable>
            <Pressable
              onPress={props.onCloseModal}
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && styles.cancelButtonPressed,
              ]}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    backgroundColor: '#311b6b',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  inputSection: {
    marginBottom: 24,
  },
  textInput: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e8e4ef',
    backgroundColor: '#fff',
    color: '#2d2a33',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    marginRight: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#c084fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#5b4d7a',
  },
  addButtonPressed: {
    opacity: 0.9,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  addButtonTextDisabled: {
    color: '#9e9aa8',
  },
  cancelButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#f31282',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonPressed: {
    opacity: 0.9,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    alignSelf: 'center',
  },
});
