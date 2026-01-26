import { CampusResource } from "@/src/types/resource";
import { Pressable, StyleSheet, Text, View } from "react-native";

// TODO: Make a Props type for the props of our ResourceCard component
type Props = {
  resource: CampusResource;
};

export default function ResourceCard({ resource }: Props) {
  // TODO: Destructure values from the resource object
  // If values need to be modified or altered for display (ex: a default value added if no office location is specified),
  // you can do that directly in the tsx code below, or create new variables here
  // if the values will be used in the log function as well, create variables for them here
  const {
    name,
    category,
    school,
    location,
    email,
    phone,
    hours,
    website,
    tags,
    note,
  } = resource;
  // slightly different from what I did in class, just a bit cleaned up
  // .filter(Boolean) converts the values to booleans and only keeps them if they are true (so undefined will be filtered out)
  const locationHoursParts = [location, hours].filter(Boolean);
  const locationHoursText =
    locationHoursParts.length > 0
      ? `Location/Hours: ${locationHoursParts.join(" | ")}`
      : "Location/Hours: Not listed";

  const contactParts = [email, phone].filter(Boolean);
  const contactText =
    contactParts.length > 0
      ? `Contact: ${contactParts.join(" | ")}`
      : "Contact: Not listed";

  const tagsText =
    tags.length > 0 ? `Tags: ${tags.join(", ")}` : "Tags: (none)";

  // TODO: Create a function called logResourceInfo that logs a formatted summary.
  // Example output:
  // Resource: IT Support Desk | Tech Support
  // School: School for Advanced Digital Technology
  // Location: Stan Grad Centre | Hours: Mon–Fri 9am–4pm
  // Contact: helpdesk@sait.ca | (403) 555-1234
  // Tags: wifi, password reset, laptop
  // Note: Drop-in help available.
  function logResourceInfo() {
    console.log(`Resource: ${name} | ${category}`);
    if (school) console.log(`School: ${school}`);
    console.log(locationHoursText);
    console.log(contactText);
    if (website) console.log(`Website: ${website}`);
    console.log(tagsText);
    if (note) console.log(`Note: ${note}`);
  }

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

  return (
    <Pressable onPress={logResourceInfo} style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>

      {school && <Text style={styles.meta}>School: {school}</Text>}

      <Text style={styles.meta}>{locationHoursText}</Text>
      <Text style={styles.meta}>{contactText}</Text>

      {website && <Text style={styles.meta}>Website: {website}</Text>}

      <Text style={styles.tags}>{tagsText}</Text>

      {note && <Text style={styles.note}>Note: {note}</Text>}
    </Pressable>
  );
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
