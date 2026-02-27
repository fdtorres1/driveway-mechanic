export const SECTIONS = {
  fix: { label: "Fix & Troubleshoot", href: "/fix" },
  maintain: { label: "Maintain & Prevent", href: "/maintain" },
  buy: { label: "Buy & Compare", href: "/buy" },
} as const;

export type SectionKey = keyof typeof SECTIONS;

const HUB_TO_SECTION_KEY: Record<string, SectionKey> = {
  electrical: "fix",
  engine: "fix",
  brakes: "fix",
  "ac-heating": "fix",
  suspension: "fix",
  "noises-smells": "fix",
  exhaust: "fix",
  transmission: "fix",
  battery: "fix",
  cooling: "fix",
  "oil-fluids": "maintain",
  tires: "maintain",
  filters: "maintain",
  "belts-hoses": "maintain",
  coolant: "maintain",
  "maintenance-schedules": "maintain",
  tools: "buy",
  parts: "buy",
  accessories: "buy",
  "buyer-guides": "buy",
};

export function getSectionKey(hubs: string[]): SectionKey {
  for (const hub of hubs) {
    const key = HUB_TO_SECTION_KEY[hub];
    if (key) return key;
  }
  return "fix";
}

export function getSection(hubs: string[]) {
  return SECTIONS[getSectionKey(hubs)];
}
