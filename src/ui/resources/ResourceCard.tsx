import { StyleSheet, View } from "react-native";

// TODO: Make a Props type for the props of our ResourceCard component
type Props = {};

export default function ResourceCard(/* TODO: Add props here (use destructuring) */) {
  // TODO: Destructure values from the resource object
  // If values need to be modified or altered for display (ex: a default value added if no office location is specified),
  // you can do that directly in the tsx code below, or create new variables here
  // if the values will be used in the log function as well, create variables for them here

  // TODO: Create a function called logResourceInfo that logs a formatted summary.
  // Example output:
  // Resource: IT Support Desk | Tech Support
  // Location: Stan Grad Centre | Hours: Mon–Fri 9am–4pm
  // Contact: helpdesk@sait.ca | (403) 555-1234
  // Tags: wifi, password reset, laptop
  // Note: Drop-in help available.

  // TODO: Create the TSX for the resource card layout
  // There should be a Pressable as the root element, with onPress set to the logResourceInfo function created above
  // Inside the Pressable, create the following elements:
  // A View for the top row, containing:
  //    A Text for the name
  //    A Text for the category
  // A Text for the school, if there is one
  // A Text for the location and hours, or the message Location/Hours: Not listed if they are not included
  // A Text for the contact, or a Contact: Not listed message
  // A Text for the tags, or Tags: (none) if there aren't any
  // A Text for the note, if there is one

  return <View></View>;
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 6,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "800",
    flexShrink: 1,
  },
  category: {
    fontSize: 12,
    opacity: 0.75,
  },
  meta: {
    fontSize: 12,
    opacity: 0.7,
  },
  tags: {
    fontSize: 12,
    opacity: 0.75,
  },
  note: {
    marginTop: 2,
    fontSize: 12,
    opacity: 0.65,
  },
});
