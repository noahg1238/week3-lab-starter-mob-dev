import { resources } from "@/src/data/resources";
import { StyleSheet, View } from "react-native";
import ResourceCard from "./ResourceCard";

export default function ResourceList() {
  // Optional TODO: Sort resources by category then name before rendering by copying the resources array and sorting the copy
  // I didn't actually sort in class, but here's how it should be done. Look up the sort function and the localeCompare function
  // and use those in your own code for sorting
  const sorted = [...resources].sort((a, b) => {
    const byCategory = a.category.localeCompare(b.category);
    if (byCategory !== 0) return byCategory;
    return a.name.localeCompare(b.name);
  });
  // TODO: Write the tsx code to render a list of ResourceCard components
  // The root component should be a View for the list, and inside of the view we should map over the resources array
  // For each resource, render a ResourceCard component, passing the resource as a prop
  // Remember to set a key prop on each ResourceCard, using the resource id (this allows React to track each component efficiently)
  return (
    <View style={styles.list}>
      {sorted.map((res) => (
        <ResourceCard resource={res} key={res.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
