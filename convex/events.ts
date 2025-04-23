// convex/events.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
    args: {
        name: v.string(),
        date: v.string(),
        location: v.string(),
        description: v.string(),
        participants: v.number(),
    },
    handler: async (ctx, args) => {
        const eventId = await ctx.db.insert("events", {
            name: args.name,
            date: args.date,
            location: args.location,
            description: args.description,
            participants: args.participants,
        });

        return eventId;
    },
});

export const list = query({
    handler: async (ctx) => {
        return await ctx.db.query("events").collect();
    },
});

export const deleteForm = mutation({
    args: { id: v.id("events") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);

    },
});

export const update = mutation({
    args: {
        id: v.id("events"),
        name: v.string(),
        date: v.string(),
        location: v.string(),
        description: v.string(),
        participants: v.number(),
    },
    handler: async (ctx, args) => {
        const {id , ...data} = args
        const eventId = await ctx.db.patch(id, data);

        return eventId;
    },
});

export const get = query({
    args: { id: v.id("events") },
    handler: async (ctx, args) => {
      return await ctx.db.get(args.id);
    },
  });