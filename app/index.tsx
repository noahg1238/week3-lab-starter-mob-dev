import ResourcesSection from "@/src/ui/resources/ResourcesSection";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CoursesSection from "../src/ui/courses/CoursesSection";
import ProgramsSection from "../src/ui/programs/ProgramsSection";
import StaffSection from "../src/ui/staff/StaffSection";
import StudentsSection from "../src/ui/students/StudentsSection";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>SAIT Directory</Text>
          <Text style={styles.subtitle}>
            Week 3 Lab: TypeScript + React Native Basics
          </Text>
        </View>

        <ProgramsSection />
        <CoursesSection />
        <StaffSection />
        <StudentsSection />
        <ResourcesSection />

        <Text style={styles.footer}>
          Tip: Tap any card to log a formatted summary
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 16,
  },
  header: {
    gap: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.75,
    lineHeight: 18,
  },
  footer: {
    marginTop: 6,
    fontSize: 12,
    opacity: 0.65,
  },
});
