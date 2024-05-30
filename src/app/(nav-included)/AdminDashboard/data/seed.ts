import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"
const users = Array.from({ length: 100 }, () => ({
  id: faker.string.sample(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
  status: "merchant",
  createdAt: faker.date.past().toISOString(),
}))

fs.writeFileSync(
  path.join(__dirname, "users.json"),
  JSON.stringify(users, null, 2)
)

console.log("✅ Tasks data generated.")
