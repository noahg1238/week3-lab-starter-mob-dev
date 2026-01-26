import { School } from "./common";

// TODO: Create a type for resource ids, which should be strings
type ResourceId = string;
// TODO: Create a type for the resource category, which can be either "Student Support", "Tech Support",
// "Academic Help", "Wellness", or "Campus Services"
type ResourceCategory =
  | "Student Support"
  | "Tech Support"
  | "Academic Help"
  | "Wellness"
  | "Campus Services";
// TODO: Create an interface for campus resources.
// The interface should include the following properties:
// - an id (use ResourceId)
// - a name
// - a category (use ResourceCategory)
// - an optional school (use School) (some resources might be school-specific)
// - an optional location (example: "Stan Grad Centre, Room XYZ")
// - an optional email
// - an optional phone
// - an optional hours (string is fine, example: "Mon–Fri 9am–4pm")
// - an optional website (string)
// - an array of tags
// - an optional note
export interface CampusResource {
  id: ResourceId;
  name: string;
  category: ResourceCategory;
  school?: School;
  location?: string;
  email?: string;
  phone?: string;
  hours?: string;
  website?: string;
  tags: string[];
  note?: string;
}
