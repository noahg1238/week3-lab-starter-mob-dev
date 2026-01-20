import { StyleSheet } from "react-native";

export default function ResourceList() {
  // Optional TODO: Sort reources by category then name before rendering by copying the resources array and sorting the copy

  // TODO: Write the tsx code to render a list of ResourceCard components
  // The root component should be a View for the list, and inside of the view we should map over the resources array
  // For each resource, render a ResourceCard component, passing the resource as a prop
  // Remember to set a key prop on each ResourceCard, using the resource id (this allows React to track each component efficiently)
  return null;
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
