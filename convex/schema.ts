import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  a:defineTable({
    x: v.boolean(),
  })
})

export default schema;