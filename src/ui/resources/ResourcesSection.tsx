import Section from "../components/Section";
import ResourceList from "./ResourcesList";

export default function ResourcesSection() {
  // TODO: Write the tsx code to render a Section component
  // Inside the Section, render the ResourceList component
  return (
    <Section
      title="Campus Resources"
      subtitle="Resources avaiable to students and staff"
    >
      <ResourceList />
    </Section>
  );
}
