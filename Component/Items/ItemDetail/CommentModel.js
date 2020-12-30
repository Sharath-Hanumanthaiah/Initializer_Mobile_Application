import React from "react";
import { Button, Modal, Card, Input } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { Rating } from "react-native-elements";

export default function CommentModel(props) {
  const { ModelVisible, setModelVisible } = props;

  return (
    <Modal
      visible={ModelVisible}
      backdropStyle={styles.backdrop}
      style={{ width: "80%" }}
      onBackdropPress={() => setModelVisible(false)}
    >
      <Card disabled={true}>
        <Rating
          imageSize={30}
          startingValue={1}
          fractions={1}
          style={styles.rating}
        />
        <Input
          multiline={true}
          textStyle={{ minHeight: 88 }}
          placeholder="Comment..."
          style={styles.commentInput}
          // {...multilineInputState}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setModelVisible(false)}
            activeOpacity={0.8}
            style={styles.buttonSubmit}
          >
            Submit
          </Button>
          <Button
            onPress={() => setModelVisible(false)}
            activeOpacity={0.8}
            style={styles.buttonSubmit}
          >
            Cancel
          </Button>
        </View>
      </Card>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  rating: {
    marginVertical: 8,
  },
  commentInput: {
    marginVertical: 8,
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
  },
  buttonSubmit: {
    marginHorizontal: 16,
    backgroundColor: "tomato",
    borderColor: "tomato",
  },
});
