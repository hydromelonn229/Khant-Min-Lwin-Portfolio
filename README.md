# Khant Min Lwin (Desmond) — Portfolio

A clean, editorial-style data analyst portfolio built with **Next.js 14** and **TypeScript**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Design tokens & base styles
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Education.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   └── Footer.tsx / .module.css
└── public/
    └── (place your photo and CV here)
```

---

## ✏️ How to Personalise

### Add your photo
1. Copy your photo (e.g. `photo.jpg`) into the `public/` folder
2. Open `components/Hero.tsx`
3. Replace the placeholder `<div>` with:
```tsx
import Image from 'next/image'

// Inside .photoFrame:
<Image
  src="/photo.jpg"
  alt="Khant Min Lwin"
  fill
  style={{ objectFit: 'cover' }}
  priority
/>
```

### Add your CV
Place `cv.pdf` in the `public/` folder — the Download CV button will work automatically.

### Update Education
Edit the `educationData` array in `components/Education.tsx`.

### Update Projects
Edit the `projects` array in `components/Projects.tsx`:
- Change `title`, `description`, `type`, `tags`
- Replace `liveUrl` and `githubUrl` with your actual links

### Update Skills
Edit the `skillGroups` array in `components/Skills.tsx`:
- Add/remove skill groups and items
- Adjust `level` (0–100) to reflect your proficiency

### Update Contact Links
- **Navbar**: `components/Navbar.tsx` → update `mailto:your@email.com`
- **Footer**: `components/Footer.tsx` → update LinkedIn, GitHub, Email links

---

## 🌐 Deployment

### Deploy to Vercel (recommended — free)
1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"** → import your GitHub repo
4. Leave all settings as default → click **Deploy**
5. Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify
1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder, or connect your GitHub repo

### Custom domain
Once deployed on Vercel, go to **Project Settings → Domains** and add your own domain (e.g. `desmondkml.com`).

---

## 🎨 Design Tokens

All colours and fonts are defined as CSS variables in `app/globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--ink` | `#1a1a18` | Primary text |
| `--ink-soft` | `#5a5a55` | Secondary text |
| `--ink-muted` | `#9a9a92` | Hints & labels |
| `--paper` | `#fafaf7` | Background |
| `--accent` | `#2a6b4a` | Green accent |
| `--rule` | `#e0e0d8` | Borders & dividers |

To change the accent colour, just update `--accent` in `globals.css`.

---

## 🛠 Built With
- [Next.js 14](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) — Scoped styling
- [DM Serif Display + DM Sans](https://fonts.google.com/) — Typography
