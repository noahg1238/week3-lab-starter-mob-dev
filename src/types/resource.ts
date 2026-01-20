// TODO: Create a type for resource ids, which should be strings

// TODO: Create a type for the resource category, which can be either "Student Support", "Tech Support",
// "Academic Help", "Wellness", or "Campus Services"

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
export interface CampusResource {}
