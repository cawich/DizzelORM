import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";


export const user = pgTable("users",{
    id:serial("id").primaryKey(),
    fullName:text("full_name"),
    phone:varchar("phone", {length: 256}),
    email:varchar("email", {length: 256}),
    address:varchar("address", {length: 256}),




})
