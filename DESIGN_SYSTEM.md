# 📘 Sales Copilot AI — Design System & Brand Guidelines

## 1. Philosophie & Identité

**Thème** : "Dark Mode SaaS futuriste"  
**Ambiance** : Premium, Technologique, Rapide, Éthéré mais Solide  
**Mots-clés visuels** : Glassmorphism, Neon Glows, Gradients, Profondeur, Grain  
**Public Cible** : Directeurs commerciaux, CEO, Tech-savvy Sales

---

## 2. Palette de Couleurs (Color Palette)

L'univers est sombre, éclairé par des néons cybernétiques.

### 🌑 Fondations (Backgrounds)
Utilisé pour créer de la profondeur. **Ne jamais utiliser de noir pur** (#000000).

- **Deep Space** (Fond Principal) : `#030712` (Tailwind Gray-950)
- **Void** (Cartes/Surfaces Sombres) : `#111827` (Tailwind Gray-900 avec opacité)
- **Overlay** (Grain) : Texture de bruit (Noise) blanche à 20% d'opacité sur fond noir

### ⚡ Couleurs Primaires (Brand)
Un bleu électrique cyan qui inspire la confiance et la technologie.

- **Brand 500** (Primary Action) : `#0ea5e9` (Sky-500)
- **Brand 400** (Glows/Text) : `#38bdf8` (Sky-400) - Utilisé pour les icônes et reflets
- **Brand 600** (Borders/Depth) : `#0284c7` (Sky-600)

### 🔮 Couleurs Secondaires (Accents)
Utilisées pour les dégradés et différencier les agents/features.

- **Cyber Purple** : `#9333ea` (Purple-600) - Pour donner un aspect "IA/Magique"
- **Neon Emerald** : `#10b981` (Emerald-500) - Pour le succès, la sécurité, le ROI
- **Alert Orange** : `#f97316` (Orange-500) - Pour les actions urgentes ou notifications

### ⚪ Typographie & Neutres

- **Headings** (Titres) : `#FFFFFF` (White)
- **Body** (Texte courant) : `#9ca3af` (Gray-400) - Pour réduire la fatigue oculaire
- **Borders** (Subtiles) : `rgba(255, 255, 255, 0.1)` (White/10)

---

## 3. Typographie (Typography)

Duo de polices Google Fonts.

### 🅰️ Titres (Display)
- **Font** : Space Grotesk
- **Usage** : H1, H2, Gros chiffres (Statistiques)
- **Caractéristiques** : Technique, angulaire, moderne
- **Weights** : 700 (Bold), 500 (Medium)
- **Letter Spacing** : `tracking-tight` (serré) pour les gros titres

### 🅱️ Corps de texte (Body)
- **Font** : Inter
- **Usage** : Paragraphes, Boutons, UI, Inputs
- **Caractéristiques** : Ultra-lisible, neutre, standard SaaS
- **Weights** : 400 (Regular), 500 (Medium), 600 (Semi-Bold)

---

## 4. UI Kit & Composants Clés

### 🪟 Glassmorphism (L'effet "Verre")
C'est la signature visuelle du site. À appliquer sur toutes les cartes et zones de contenu.

```css
background: rgba(17, 24, 39, 0.7); /* bg-gray-900/40 */
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.08);

/* Hover Effect */
&:hover {
  border-color: rgba(14, 165, 233, 0.3);
  background: rgba(17, 24, 39, 0.8);
}
```

### 🔘 Boutons (CTA)

**Primaire :**
```css
background: white; /* bg-white */
color: #030712; /* text-gray-950 */
/* OU Gradient Bleu */
background: #0ea5e9; /* bg-brand-500 */
box-shadow: 0 0 20px rgba(255,255,255,0.3); /* Glow */
border-radius: 0.75rem; /* rounded-xl */
```

**Secondaire :**
```css
background: rgba(255, 255, 255, 0.05); /* bg-white/5 */
border: 1px solid rgba(255, 255, 255, 0.1); /* border-white/10 */
backdrop-filter: blur(10px);
```

### 🌈 Dégradés de Texte (Text Gradients)
Pour mettre en valeur les mots clés dans les H1/H2.

```css
background: linear-gradient(to right, #38bdf8, #818cf8);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### ✨ Effets de Lumière (Glows & Orbs)
Ne jamais laisser un fond plat. Toujours ajouter des sources de lumière diffuses.

- **Orbes d'arrière-plan** : Cercles flous (`blur-[120px]`) positionnés en `absolute` derrière le contenu
- **Couleurs des orbes** : 
  - Bleu (`brand-600/20`) en haut à gauche
  - Violet (`purple-600/20`) en bas à droite

---

## 5. Iconographie & Formes

- **Set d'icônes** : Lucide React (Style : Stroke, pas de remplissage)
- **Épaisseur de trait** : 2px ou 1.5px (Fin et élégant)
- **Conteneurs d'icônes** : Toujours dans un carré arrondi (`rounded-lg` ou `rounded-xl`) avec un fond coloré très léger (`bg-brand-500/20`) et une bordure subtile

---

## 6. Règles de Layout (Mise en page)

### Arrondis (Radius)
Généreux :
- **Cartes** : `rounded-2xl` ou `rounded-3xl`
- **Boutons/Inputs** : `rounded-xl`

### Espacement (Spacing)
Aéré. Laisser respirer le contenu ("Negative Space") :
- **Sections** : `py-24` (96px) minimum

### Responsive
- **Mobile** : Grille à 1 colonne (ou 2 pour les stats compactes)
- **Desktop** : Grilles larges (`max-w-7xl`)

---

## 7. Configuration Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8', // Glows/Text
          500: '#0ea5e9', // Primary
          600: '#0284c7', // Borders
          950: '#082f49',
        },
        gray: {
          900: '#111827', // Card BG
          950: '#030712', // Main BG
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')", // Texture critique
      }
    }
  }
}
```

---

## 8. Exemples de Composants React/Tailwind

### Card Glassmorphism
```jsx
<div className="relative rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-white/10 p-6 hover:border-brand-500/30 transition-colors">
  {/* Orbe lumineux interne */}
  <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-600/20 rounded-full blur-[120px]" />
  
  {/* Contenu */}
  <div className="relative z-10">
    {/* Votre contenu ici */}
  </div>
</div>
```

### Bouton Primary
```jsx
<button className="px-6 py-3 bg-white text-gray-950 rounded-xl font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
  Démarrer maintenant
</button>
```

### Titre avec Gradient
```jsx
<h1 className="font-display text-5xl font-bold tracking-tight">
  Votre équipe commerciale{' '}
  <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
    IA autonome
  </span>
</h1>
```

---

## 9. Assets & Resources

### Polices
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- [Inter](https://fonts.google.com/specimen/Inter)

### Icônes
- [Lucide React](https://lucide.dev/)

### Textures
- [Grainy Gradients](https://grainy-gradients.vercel.app/noise.svg)

---

## 10. Checklist de Cohérence

Avant de déployer un nouveau composant, vérifier :

- ✅ Utilise les couleurs de la palette (pas de couleurs custom)
- ✅ Effet glassmorphism appliqué sur les cartes
- ✅ Orbes lumineux en arrière-plan
- ✅ Texture grain sur le fond principal
- ✅ Bordures subtiles (`border-white/10`)
- ✅ Arrondis généreux (`rounded-2xl` minimum)
- ✅ Espacement aéré (respiration du contenu)
- ✅ Polices correctes (Space Grotesk pour titres, Inter pour body)
- ✅ Icônes Lucide avec stroke
- ✅ Responsive testé (mobile + desktop)

---

**Note** : Ce design system est évolutif. Toute modification doit être documentée ici pour maintenir la cohérence du brand à travers tous les touchpoints.
