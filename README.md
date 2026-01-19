<a href="https://github.com/sunboyoo/nextjs-supabase-starter">
  <h1 align="center">Next.js and Supabase Starter Kit</h1>
</a>

<p align="center">
  The fastest way to build apps with Next.js and Supabase
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#project-structure"><strong>Project Structure</strong></a>
</p>
<br/>

## Features

- 🚀 **Next.js 16** with App Router and Turbopack
- 🔐 **Supabase Auth** with SSR cookie-based authentication
- 🌍 **Internationalization (i18n)** with next-intl (English & Chinese)
- 🎨 **TailwindCSS v4** with modern `@theme` syntax
- 🌙 **Dark Mode** with next-themes
- 📱 **PWA Ready** with iOS Safari optimizations
- 🧩 **shadcn/ui** components

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 16](https://nextjs.org) |
| Database & Auth | [Supabase](https://supabase.com) |
| Styling | [TailwindCSS v4](https://tailwindcss.com) |
| UI Components | [shadcn/ui](https://ui.shadcn.com) |
| Internationalization | [next-intl](https://next-intl.dev) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Package Manager | [pnpm](https://pnpm.io) |

## Getting Started

### Prerequisites

- Node.js 20.9+
- pnpm (recommended)
- A Supabase project ([create one here](https://database.new))

### Clone and Run Locally

1. **Create a new project using this template**

   ```bash
   npx create-next-app -e https://github.com/sunboyoo/nextjs-supabase-starter my-app
   ```

   Or with pnpm:

   ```bash
   pnpm create next-app -e https://github.com/sunboyoo/nextjs-supabase-starter my-app
   ```

   Or clone directly:

   ```bash
   git clone https://github.com/sunboyoo/nextjs-supabase-starter.git my-app
   cd my-app
   pnpm install
   ```

2. **Set up environment variables**

   Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

   Update the values:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=[INSERT SUPABASE PROJECT API PUBLISHABLE OR ANON KEY]
   ```

   > **Note:** Both legacy **anon** keys and new **publishable** keys work with this variable name. See the [announcement](https://github.com/orgs/supabase/discussions/29260) for details.

   Find these values in your [Supabase project's API settings](https://supabase.com/dashboard/project/_?showConnect=true).

3. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── [locale]/           # Locale-based routing (en, zh)
│   │   ├── auth/           # Authentication pages
│   │   ├── protected/      # Protected pages
│   │   ├── layout.tsx      # NextIntlClientProvider
│   │   └── page.tsx        # Home page
│   ├── layout.tsx          # Root layout with ThemeProvider
│   └── globals.css         # TailwindCSS v4 styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── locale-switcher.tsx # Language switcher
│   └── theme-switcher.tsx  # Dark mode toggle
├── i18n/
│   ├── navigation.ts       # Internationalized navigation
│   ├── request.ts          # Request configuration
│   └── routing.ts          # Locale routing
├── lib/supabase/
│   ├── client.ts           # Browser client
│   ├── server.ts           # Server client
│   └── proxy.ts            # Session management
├── messages/               # Translation files (en.json, zh.json)
├── proxy.ts                # Next.js 16 proxy (replaces middleware)
└── docs/                   # Official documentation references
```

## Key Configurations

### Next.js 16

- Uses `proxy.ts` instead of `middleware.ts` (Next.js 16 naming convention)
- Enabled `cacheComponents: true` for Partial Pre-Rendering
- Async `params` handling in all dynamic routes

### TailwindCSS v4

- Uses `@import "tailwindcss"` instead of `@tailwind` directives
- Configured with `@tailwindcss/postcss` plugin
- Dark mode via `selector` strategy with `.dark` class

### Supabase SSR

- Uses `getClaims()` for secure JWT validation
- Cookie-based session management
- Proper integration with next-intl middleware

## License

MIT
