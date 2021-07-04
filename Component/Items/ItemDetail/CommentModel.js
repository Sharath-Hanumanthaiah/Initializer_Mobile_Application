import React, { useState } from "react";
import { Button, Modal, Card, Input } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { Rating } from "../../Extras/Rating";
import CreateReview from '../../Mutation/ReviewMutation';

export default function CommentModel(props) {
  const { ModelVisible, setModelVisible, userId, itemId } = props;
  console.log("comment model", userId, itemId);
  const [rating, setRating] = useState(4);
  const [review, setReview] = React.useState('');
  const onSubmitRating = () => {
    CreateReview(
      itemId,
      userId,
      rating,
      review,
      () => {setModelVisible(false)}
    )
  }
  return (
    <Modal
      visible={ModelVisible}
      backdropStyle={styles.backdrop}
      style={{ width: "80%" }}
      onBackdropPress={() => setModelVisible(false)}
    >
      <Card disabled={true}>
        <Rating
          style={styles.rateBar}
          value={rating}
          onValueChange={(e) => setRating(e)}
        />
        <Input
          multiline={true}
          placeholder="How did you feel about our service?"
          style={styles.commentInput}
          onChangeText={nextValue => setReview(nextValue)}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={onSubmitRating}
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
    alignSelf: 'center',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  buttonSubmit: {
    marginHorizontal: 16,
    backgroundColor: "tomato",
    borderColor: "tomato",
  },
  rateBar: {
    marginHorizontal: 0,
    alignSelf: "center",
  },
});
