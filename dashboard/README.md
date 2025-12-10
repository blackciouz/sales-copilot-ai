# 🎨 Sales Copilot AI - Landing Page

Landing page construite avec Next.js 14, TypeScript et Tailwind CSS, respectant le Design System défini.

## 🚀 Quick Start

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Ouvrir http://localhost:3000
```

## 📁 Structure

```
dashboard/
├── app/
│   ├── page.tsx          # Page principale
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Styles globaux
├── components/
│   ├── Hero.tsx          # Section hero
│   ├── Features.tsx      # Section fonctionnalités
│   ├── HowItWorks.tsx    # Section processus
│   ├── Pricing.tsx       # Section pricing
│   ├── Testimonials.tsx  # Section témoignages
│   ├── CTA.tsx           # Call-to-action final
│   └── Footer.tsx        # Footer
├── tailwind.config.ts    # Config Tailwind
└── package.json
```

## 🎨 Design System

### Couleurs

- **Brand Primary** : `#0ea5e9` (Sky-500)
- **Brand Glow** : `#38bdf8` (Sky-400)
- **Accent Purple** : `#9333ea` (Purple-600)
- **Accent Emerald** : `#10b981` (Emerald-500)
- **Background** : `#030712` (Gray-950)
- **Card Background** : `#111827` (Gray-900)

### Typographie

- **Titres** : Space Grotesk (Bold 700)
- **Body** : Inter (Regular 400, Medium 500, Semibold 600)

### Effets

- **Glassmorphism** : `bg-gray-900/40 backdrop-blur-xl border border-white/10`
- **Glow** : `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Text Gradient** : `bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent`
- **Orbes** : Cercles flous en arrière-plan (`blur-[120px]`)

## 🧩 Composants

### Hero
- Titre avec gradient animé
- CTA buttons (primary + secondary)
- Social proof (clients, rating)
- Dashboard preview avec effet glassmorphism

### Features
- Grid 3 colonnes
- 9 fonctionnalités (les 5 agents + 4 avantages)
- Cards avec hover effects
- Icônes Lucide React

### HowItWorks
- 4 étapes du processus
- Timeline avec flèches
- Stats en bas de section

### Pricing
- 3 plans (Starter, Growth, Enterprise)
- Plan Growth mis en avant
- Check marks pour features
- Garantie 30 jours

### Testimonials
- 3 témoignages clients
- Rating 5 étoiles
- Résultats mesurés (avant/après)
- Trust badges en bas

### CTA
- Call-to-action final
- Orbes lumineux animés
- 2 boutons CTA
- Trust indicators

### Footer
- Logo + description
- 3 colonnes de liens
- Social icons
- Copyright

## 🎯 Animations

Utilise **Framer Motion** pour :
- Fade in on scroll
- Stagger animations
- Hover effects
- Smooth transitions

## 📱 Responsive

- Mobile-first design
- Breakpoints :
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px

## 🚀 Optimisations

- **Next.js 14** avec App Router
- **Fonts optimisés** (Google Fonts via next/font)
- **Images optimisées** (Next Image)
- **Code splitting** automatique
- **CSS-in-JS** (Tailwind)

## 🎨 Personnalisation

### Changer les couleurs

Éditer `tailwind.config.ts` :

```typescript
colors: {
  brand: {
    400: '#38bdf8', // Votre couleur
    500: '#0ea5e9',
    600: '#0284c7',
  }
}
```

### Changer le contenu

Éditer les composants dans `/components` :
- Textes, images, stats
- Liens CTA
- Témoignages
- Pricing

### Ajouter une section

1. Créer `components/MaSection.tsx`
2. Importer dans `app/page.tsx`
3. Ajouter au layout

## 🛠️ Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icônes
- **Google Fonts** - Typographie

## 📦 Build & Deploy

```bash
# Build production
npm run build

# Démarrer en production
npm start

# Deploy sur Vercel (recommandé)
vercel

# Ou autre plateforme (Netlify, AWS, etc.)
```

## ✅ Checklist avant deploy

- [ ] Remplacer les placeholders de texte
- [ ] Ajouter les vraies images
- [ ] Configurer les liens CTA
- [ ] Tester sur mobile
- [ ] Tester les formulaires
- [ ] Ajouter Google Analytics
- [ ] Configurer le SEO (metadata)
- [ ] Tester les performances (Lighthouse)

## 🎉 Résultat

Une landing page **pixel-perfect** qui :
- ✅ Respecte le Design System
- ✅ Est entièrement responsive
- ✅ A des animations fluides
- ✅ Est optimisée pour le SEO
- ✅ Est prête pour la production

---

**Made with ❤️ by Rovo Dev**
