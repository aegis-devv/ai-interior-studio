import staircase from "@/assets/hero-staircase.jpg";
import limestone from "@/assets/limestone-detail.jpg";
import villa from "@/assets/villa-ethereal.jpg";
import cinder from "@/assets/cinder-house.jpg";
import fireplace from "@/assets/marble-fireplace.jpg";

export const projects = [
  {
    name: "Villa Ethereal",
    category: "Residential · Mykonos",
    image: villa,
    shape: "wide",
    story: "Set above a wind-cut cove, the house was planned as shade before shelter. Local limestone, lime plaster and smoked oak temper the intense Aegean light. We lowered the main seating plane so the horizon remains unbroken from the entry; a concealed linen screen lets the family soften glare without losing the sea.",
  },
  {
    name: "The Monolith",
    category: "Residential · Los Angeles",
    image: staircase,
    shape: "tall",
    story: "A difficult central stair became the house’s quiet landmark. Hand-finished plaster wraps a continuous brass rail, while pale travertine catches shifting shadows throughout the day. The inner curve was widened by six inches after the client asked for a place where children could pause and sit.",
  },
  {
    name: "The Cinder House",
    category: "Private residence · Kyoto",
    image: cinder,
    shape: "tall",
    story: "The dining room sits between a dark cedar ceiling and cool clay walls, creating intimacy without closing the garden view. A single oxidized-brass light marks the table rather than the room. Its height is adjustable for long dinners, flower arranging and the family’s weekly calligraphy practice.",
  },
  {
    name: "Fragment No. 9",
    category: "Studio showcase · London",
    image: fireplace,
    shape: "square",
    story: "This compact salon tests one material at three scales: veined marble becomes hearth, ledge and threshold. The rounded plaster reveal removes hard glare from the concealed light. A low, cool ledge was kept clear at the owner’s request for rotating ceramics from local makers.",
  },
  {
    name: "Pale Passage",
    category: "Hospitality · Mallorca",
    image: limestone,
    shape: "square",
    story: "A former stone storehouse became a six-room retreat organized around a curved passage. Honed limestone continues from floor to stair, while recessed niches hold one object each. Guests can dim every room from a single bedside control, leaving only the passage glow after midnight.",
  },
] as const;

export const journalEntries = [
  {
    title: "A room should change at four o’clock",
    date: "12 August 2026",
    read: "4 minute read",
    excerpt: "Afternoon light is not an inconvenience to screen away. It is a second material, one that makes plaster warmer, brass quieter and familiar rooms briefly unfamiliar.",
  },
  {
    title: "The useful edge of restraint",
    date: "28 June 2026",
    read: "6 minute read",
    excerpt: "Restraint is not an empty room. It is the discipline of deciding which objects earn a relationship with the architecture—and which need somewhere generous to disappear.",
  },
  {
    title: "What stone remembers",
    date: "03 May 2026",
    read: "5 minute read",
    excerpt: "We specify stone for what happens after installation: the softened threshold, the mark beside a basin, the polish made slowly by hands and years.",
  },
] as const;