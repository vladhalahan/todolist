import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    const trimmed = (enteredGoalText ?? '').trim();
    if (!trimmed) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: trimmed, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar
        style={isModalVisible ? 'light' : 'dark'}
        backgroundColor={isModalVisible ? '#311b6b' : '#f5f3f8'}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isModalVisible}
        onCloseModal={() => setIsModalVisible(false)}
      />
      <View style={styles.goalsContainer}>
        {courseGoals.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateTitle}>No goals yet</Text>
            <Text style={styles.emptyStateSubtitle}>
              Tap "Add New Goal" below to add your first goal.
            </Text>
          </View>
        ) : (
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
      <View style={styles.addButtonContainer}>
        <Button
          title="Add New Goal"
          color="#6d28d9"
          onPress={startAddGoalHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 56,
    paddingHorizontal: 14,
    flex: 1,
    backgroundColor: '#f5f3f8',
  },
  goalsContainer: {
    flex: 1,
    marginTop: 8,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 24,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyStateTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2d2a33',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyStateSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
  },
  addButtonContainer: {
    paddingVertical: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: '#e8e4ef',
    backgroundColor: '#f5f3f8',
  },
});
