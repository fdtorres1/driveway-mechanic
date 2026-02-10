# The Driveway Mechanic

**Fix it yourself. Save hundreds.**

A comprehensive automotive DIY and maintenance website built with Astro + MDX, designed to help everyday drivers handle basic car maintenance and repairs in their driveway.

## 🚗 What We Cover

- **Fix & Troubleshoot**: Symptom-first diagnosis and repair guides
- **Maintain & Prevent**: DIY maintenance schedules and how-tos
- **Buy & Compare**: Parts and tools buyer guides with affiliate recommendations
- **Learn**: Automotive fundamentals and beginner-friendly education
- **Seasonal**: Weather-specific prep and maintenance

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.0
- **Content**: MDX with custom automotive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **TypeScript**: Full type safety throughout
- **Deployment**: Vercel (zero-config)

## 🏗️ Architecture

This site mirrors [The Home Field Guide](https://thehomefieldguide.com/) architecture but is adapted for automotive content:

```
src/
├── components/mdx/          # Custom MDX components for automotive content
│   ├── DiagnosticFlow.astro # Step-by-step troubleshooting
│   ├── TimeCostSkill.astro  # DIY vs shop cost badges
│   ├── SafetyCallout.astro  # Safety warnings
│   ├── ToolsParts.astro     # Required tools and parts lists
│   ├── VehicleFitment.astro # Vehicle compatibility badges
│   ├── OBDCode.astro        # OBD-II code explanations
│   └── CostComparison.astro # DIY vs shop visual comparisons
├── content/
│   ├── articles/            # MDX article content
│   └── hubs/               # Hub page content
├── data/                   # YAML data files
│   ├── authors/
│   ├── categories/
│   ├── topics/
│   └── vehicles/           # Vehicle-specific data
├── layouts/
│   ├── Layout.astro        # Base layout
│   └── Article.astro       # Article layout with automotive features
└── pages/                  # Static and dynamic routes
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/driveway-mechanic.git
   cd driveway-mechanic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Content Creation

### Article Types

- **Troubleshooting**: `fix/car-wont-start-clicks`
- **How-to Maintenance**: `maintain/how-to-change-oil-toyota-camry`
- **Buyer Guides**: `buy/best-obd2-scanners-2026`
- **Cost Guides**: `fix/brake-job-cost`
- **Comparisons**: `buy/ceramic-vs-semi-metallic-brake-pads`

### Frontmatter Schema

```yaml
---
title: "How to Change Oil on a 2018-2023 Toyota Camry"
pillar: "maintain"          # fix, maintain, buy, learn, seasonal
hub: "oil-fluids"
vehicles: ["toyota-camry-2018-2023"]
difficulty: "beginner"      # beginner, intermediate, advanced
timeCostSkill:
  time: "30–45 min"
  diyCost: "$35–$45"
  shopCost: "$75–$100"
  skill: "beginner"
articleType: "how-to"       # troubleshooting, how-to, buyer-guide, etc.
partsNeeded: ["0w20-oil", "oil-filter"]
toolsNeeded: ["socket-set", "drain-pan"]
---
```

## 🎨 Design System

### Colors
- **Primary**: Dark charcoal (`#1a1a2e`)
- **Accent**: Safety orange (`#ff6b35`)
- **Background**: Clean whites and subtle grays

### Typography
- **Sans**: System font stack for fast loading
- **Hierarchy**: Clear, scannable content structure

### Components
All MDX components follow automotive-specific patterns with safety-first design principles.

## 🔧 Development

### Key Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run typecheck` - TypeScript type checking

### Adding New Content
1. Create MDX file in appropriate `src/content/articles/` subdirectory
2. Follow frontmatter schema for your content type
3. Use automotive MDX components for consistent formatting
4. Test locally before pushing

## 📊 Content Strategy

### Monetization
- **Primary**: Affiliate revenue through parts and tools recommendations
- **Secondary**: Display ads (Mediavine/Raptive at scale)
- **Tertiary**: Digital products (maintenance guides, checklists)

### SEO Focus
- Make/model-specific guides for long-tail dominance
- Symptom-first troubleshooting for high-volume searches
- Buyer guides for commercial intent keywords

## 🔒 Safety & Legal

All content includes appropriate safety warnings and disclaimers. The site emphasizes:
- Safety-first approach to all procedures
- Clear "when to call a professional" guidance
- Proper tool and equipment recommendations
- Vehicle-specific compatibility warnings

## 📈 Analytics & Monitoring

- Google Analytics 4 for traffic analysis
- Search Console for SEO monitoring
- Core Web Vitals tracking
- Affiliate link performance tracking

## 🚀 Deployment

The site deploys automatically to Vercel on push to main branch. No configuration needed - Astro is supported out of the box.

### Environment Variables
- `PUBLIC_SITE_URL` - Site URL for canonical links
- Affiliate tracking IDs (when applicable)

## 🤝 Contributing

1. Focus on safety-first content
2. Follow established MDX component patterns
3. Include proper vehicle compatibility information
4. Test all procedures before publishing
5. Maintain consistent voice and formatting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Remember**: This site helps people save money on car maintenance, but safety always comes first. When in doubt, recommend professional service over DIY repairs.