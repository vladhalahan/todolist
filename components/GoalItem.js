import { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';

function GoalItem(props) {
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const checkOpacity = useRef(new Animated.Value(0)).current;
  const [isDeleting, setIsDeleting] = useState(false);

  function handlePress() {
    if (isDeleting) return;
    setIsDeleting(true);

    Animated.sequence([
      Animated.timing(checkOpacity, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 280,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.92,
          duration: 280,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      props.onDeleteItem(props.id);
    });
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDeleting}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && !isDeleting && styles.pressedItem,
      ]}
    >
      <Animated.View
        style={[
          styles.goalItem,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Text style={styles.goalText} numberOfLines={2}>
          {props.text}
        </Text>
        <Animated.View style={[styles.checkWrap, { opacity: checkOpacity }]}>
          <Text style={styles.checkText}>✓</Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  goalItem: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e8e4ef',
    shadowColor: '#6d28d9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalText: {
    flex: 1,
    fontSize: 16,
    color: '#2d2a33',
    lineHeight: 22,
  },
  checkWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#22c55e',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  checkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  pressedItem: {
    opacity: 0.7,
  },
});
