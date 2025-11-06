import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  numbers: defineTable({
    value: v.number(),
  }),
})

export default schema;