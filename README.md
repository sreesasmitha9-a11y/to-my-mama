# TO MY MAMA ❤️
## A Cinematic Birthday Surprise Website by Sree Sasmitha for Veyaashun

> *"You may be silent, Mama, but somehow, my heart has found so many reasons to adore you."*

A digital romantic universe created as a deeply personal birthday gift for **Veyaashun** by his girlfriend, **Sree Sasmitha**.

---

### ✨ Features & Chapters

1. **The Secret Entry** (`#intro`):
   - Intimate starry cosmos with soft emergent light.
   - Quiet or sound-enabled choice respecting modern audio autoplay policies.
2. **The Birthday Reveal & Candle Wish** (`#chapter-reveal`):
   - Glowing typography celebrating **26 October 2026**.
   - Interactive candle: tap to blow candle, make a wish, and trigger golden confetti.
3. **A Little Piece of My Heart** (`#chapter-little-world`):
   - Personal diary presentation explaining why this private universe was made.
4. **The College Chapter** (`#chapter-college`):
   - The energetic friend who brought his own special energy into college, now captured in a warm scrapbook layout.
5. **Your Silence, My Favourite Sound** (`#chapter-silence`):
   - Peaceful midnight velvet aesthetics celebrating the comfort and security found in his quiet presence.
6. **Somehow, You Feel Like Home** (`#chapter-safe-place`):
   - "Some people make the world feel louder. You make my world feel safer."
7. **When the World Disappears** (`#chapter-world-disappears`):
   - Interactive light fader where distant city lights fade into quiet night stillness.
8. **You Were There When I Needed Someone** (`#chapter-rise`):
   - Dawning sunrise aura commemorating his support when Sree was at her lowest.
9. **More Than I Ever Expected** (`#chapter-expectations`):
   - Step-by-step emotional text cascade with instant "Show all lines" option.
10. **Our Little Story — Memory Timeline** (`#chapter-timeline`):
    - Scrapbook milestone nodes grounded in authentic memories.
11. **Our Special Song — Munbe Vaa** (`#chapter-music`):
    - Dedicated listening lounge with spinning vinyl disc, live animated waveform visualizer, seek bar, and lyrics reflection.
    - Floating docked audio bar available while exploring any chapter.
12. **Little Moments, Big Feelings — Photo Gallery** (`#chapter-gallery`):
    - Real photographs of Veyaashun and Sree with golden frames and interactive fullscreen lightbox modal.
13. **A Letter for My Mama** (`#chapter-letter`):
    - 3D interactive envelope with wax seal that unfolds into Sree's complete heartfelt letter.
14. **Everything Beautiful That I Wish for You** (`#chapter-wishes`):
    - Glowing horizon with sincere blessings for peace, strength, and joy.
15. **The Final Surprise** (`#chapter-final-surprise`):
    - "One Last Thing ❤️", celebratory shower of stars, golden particles, and rose petals, leading to the ultimate affirmation and replay controls.

---

### 🎨 Color Palette & Visual System

* **Deep Black Cherry & Burgundy**: `#070208`, `#12030d`, `#230619`, `#380a27`
* **Champagne Gold**: `#f5dfa8`, `#ffe9b8`, `#c4ab70`
* **Muted Rose Pink & Crimson Glow**: `#e89bb4`, `#f8bad0`, `#e63962`
* **Warm Ivory Typography**: `#fcf9f2`, `#ece4d8`
* **Typography**:
  - *Serif*: Cormorant Garamond & Cinzel (Cinematic elegance)
  - *Sans-serif*: Plus Jakarta Sans (Crisp readability)
  - *Cursive*: Caveat & Alex Brush (Warm handwritten signature)

---

### 🛠️ Quick Start & Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   Output is generated in the `dist/` directory.

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

### ✍️ Personalization Guide for Sree Sasmitha

All personalization is managed in a single file:
👉 **[`src/content/birthdayConfig.ts`](file:///p:/vbday/src/content/birthdayConfig.ts)**

#### 1. Editing the Birthday Letter
Open [`src/content/birthdayConfig.ts`](file:///p:/vbday/src/content/birthdayConfig.ts) and locate `birthdayLetter`:
```typescript
birthdayLetter: {
  salutation: "Happy Birthday, Mama ❤️",
  body: [
    "Your custom sentences...",
  ],
  closing: "With love,",
  author: "Your Sree Sasmitha."
}
```

#### 2. Adding or Replacing Photos
- Place your image files in the `public/images/` folder.
- In [`src/content/birthdayConfig.ts`](file:///p:/vbday/src/content/birthdayConfig.ts), update the `photos` array with the filename, romantic caption, and note.

#### 3. Replacing the Soundtrack
- Place your audio file in `public/audio/` (default: `munbe-vaa.mp3`).
- In [`src/content/birthdayConfig.ts`](file:///p:/vbday/src/content/birthdayConfig.ts), update `specialSong.source`.

#### 4. Adding Memories to the Timeline
- Under `memories` in [`src/content/birthdayConfig.ts`](file:///p:/vbday/src/content/birthdayConfig.ts), you can add new milestones whenever you wish!

---

### 🚀 Free 1-Click Deployment Instructions

#### Deploying to Vercel (Recommended):
1. Create a free account at [vercel.com](https://vercel.com).
2. Push your project to GitHub (or install Vercel CLI via `npm i -g vercel`).
3. Click "Import Project" in Vercel.
4. Framework Preset: **Vite**.
5. Click **Deploy**. Your private URL will be generated instantly.

#### Deploying to Netlify:
1. Create a free account at [netlify.com](https://netlify.com).
2. Drag and drop the `dist` folder into the Netlify dashboard, or connect your GitHub repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **Deploy Site**.

---

### 🔒 Privacy Note
Since this website is an intimate gift, if you deploy it on Vercel or Netlify, you can optionally set a password in your host settings or share the private deployment link exclusively with Veyaashun.

*Made with all my heart by Sree Sasmitha for Veyaashun (Mama).*
