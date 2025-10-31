# Causal Impact Analysis of Surge Pricing on Carrier Acceptance

A comprehensive Next.js web application for analyzing the causal impact of surge pricing on carrier acceptance rates in the freight logistics industry. This dashboard provides advanced statistical visualizations and causal inference methodologies to understand how surge pricing affects carrier behavior.

## 📊 Overview

This application provides an interactive dashboard for analyzing the causal relationship between surge pricing implementation and carrier acceptance rates. Using rigorous econometric methodologies including Difference-in-Differences (DiD) and Propensity Score Matching (PSM), the dashboard enables stakeholders to:

- Visualize treatment effects over time
- Compare actual vs. counterfactual scenarios
- Analyze lane-level performance metrics
- Validate findings across multiple causal inference methods
- Filter and segment data by region, carrier type, equipment, and time period

## ✨ Features

### Key Analytical Components

- **Metrics Overview Dashboard**: Real-time display of key performance indicators including:
  - Average Treatment Effect (ATE)
  - 95% Confidence Intervals
  - Treatment and Control group sizes
  - Statistical significance metrics

- **Acceptance Rate Time Series**: Interactive line charts comparing treatment (surge pricing) vs. control groups over time

- **Counterfactual Analysis**: Visualization of actual acceptance rates vs. predicted counterfactual scenarios with confidence intervals

- **Methodology Comparison**: Cross-validation using multiple causal inference approaches:
  - Difference-in-Differences (DiD)
  - Propensity Score Matching (PSM)

- **Lane-Level Effects**: Detailed table showing causal effects broken down by specific shipping lanes with:
  - Distance and volume metrics
  - Base vs. surge acceptance rates
  - Statistical significance indicators

### Interactive Filtering

- **Region Selection**: Northeast, Southeast, Midwest, West, or All Regions
- **Carrier Type**: Small Fleet (<10), Medium Fleet (10-50), Large Fleet (50+)
- **Equipment Type**: Dry Van, Reefer, Flatbed
- **Time Period**: Last 7, 30, 90 days, or custom range
- **Export Functionality**: Download analysis results and reports

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 16.0.0**: React framework with App Router for server-side rendering and optimal performance
- **React 19.2.0**: Latest React features and improvements
- **TypeScript 5**: Type-safe development

### UI Components & Styling
- **Tailwind CSS 4.1.9**: Utility-first CSS framework
- **Radix UI**: Comprehensive component library including:
  - Dialog, Dropdown, Select, Toast, Tooltip components
  - Accordion, Tabs, Slider, Switch controls
  - Accessibility-focused primitives
- **Lucide React**: Icon library for modern, customizable icons
- **class-variance-authority**: Dynamic class name generation
- **tailwindcss-animate**: Animation utilities

### Data Visualization
- **Recharts**: Composable charting library for React
  - Line charts for time series analysis
  - Area charts for counterfactual visualization
  - Interactive tooltips and legends

### Form Management
- **React Hook Form 7.60.0**: Performant form validation
- **Zod 3.25.76**: TypeScript-first schema validation
- **@hookform/resolvers**: Form validation resolver integration

### Additional Libraries
- **date-fns 4.1.0**: Modern date utility library
- **react-day-picker 9.8.0**: Date picker component
- **next-themes 0.4.6**: Theme management (light/dark mode support)
- **sonner 1.7.4**: Toast notifications
- **@vercel/analytics 1.3.1**: Analytics integration

## 📦 Installation

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Causal-Impact-Analysis-of-Surge-Pricing-on-Carrier-Acceptance--.git
   cd Causal-Impact-Analysis-of-Surge-Pricing-on-Carrier-Acceptance--
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Usage

### Development

```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint to check code quality
```

### Building for Production

```bash
pnpm build
pnpm start
```

The application will be optimized and ready for deployment.

## 📁 Project Structure

```
.
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout component
│   ├── page.tsx               # Home page with dashboard
│   └── globals.css            # Global styles
├── components/                 # React components
│   ├── acceptance-chart.tsx   # Treatment vs control time series
│   ├── counterfactual-chart.tsx  # Counterfactual analysis visualization
│   ├── dashboard-header.tsx   # Header with filters and controls
│   ├── lane-effects-table.tsx # Lane-level effects table
│   ├── method-comparison.tsx  # Methodology comparison card
│   ├── metrics-overview.tsx   # KPI metrics cards
│   ├── theme-provider.tsx     # Theme context provider
│   └── ui/                    # Reusable UI components (shadcn/ui)
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions and helpers
├── public/                     # Static assets
├── styles/                     # Additional styles
├── components.json            # shadcn/ui configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎨 Component Architecture

### Main Dashboard (`app/page.tsx`)
The main dashboard orchestrates all analytical components:
- Dashboard header with filters
- Metrics overview (4 KPI cards)
- Side-by-side chart comparison (Acceptance rates & Counterfactual)
- Methodology comparison section
- Lane-level effects table

### Key Components

- **`DashboardHeader`**: Provides filtering controls for region, carrier type, equipment, and time period
- **`MetricsOverview`**: Displays ATE, confidence intervals, and group sizes
- **`AcceptanceChart`**: Interactive line chart comparing treatment vs control groups
- **`CounterfactualChart`**: Area chart showing actual vs predicted acceptance rates
- **`MethodComparison`**: Validates results using DiD and PSM methodologies
- **`LaneEffectsTable`**: Detailed breakdown of effects by shipping lane

## 🔧 Configuration

### Next.js Configuration (`next.config.mjs`)
- TypeScript build error bypass enabled for rapid development
- Unoptimized images for faster builds

### TypeScript Configuration (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured (`@/*` maps to root)
- Next.js plugin integration

### Tailwind Configuration
- Custom theme with shadcn/ui design system
- Dark mode support via class strategy
- Custom color palette for charts and UI elements

## 🧪 Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow React best practices and hooks conventions
- Utilize Tailwind CSS utility classes for styling
- Maintain component modularity and reusability

### Component Development
- Use `"use client"` directive for client-side interactive components
- Leverage shadcn/ui components from the `ui` directory
- Keep components focused and single-responsibility
- Use proper TypeScript types for props and state

### Data Flow
- Static data is currently used for demonstration
- Components are structured to easily integrate with real APIs
- Consider implementing data fetching in layouts or server components

## 📊 Statistical Methods

### Difference-in-Differences (DiD)
The primary causal inference method comparing treatment and control groups before and after surge pricing implementation.

### Propensity Score Matching (PSM)
Validation method ensuring treatment and control groups are comparable by matching on observable characteristics.

### Key Metrics
- **ATE (Average Treatment Effect)**: The causal impact of surge pricing on acceptance rates
- **Confidence Intervals**: Statistical uncertainty quantification
- **p-values**: Statistical significance testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👥 Authors

- Repository maintained by [@johaankjis](https://github.com/johaankjis)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons by [Lucide](https://lucide.dev/)

---

For questions, issues, or contributions, please open an issue on GitHub.
