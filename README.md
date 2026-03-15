# Vamshi Krishna Bharadwaj Valluri — Personal Portfolio

A clean, modern, fully responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. Deployable as a static site via **GitHub Pages** with zero build steps required.

---

## Live Preview

> Once deployed, your portfolio will be at:  
> `https://<your-github-username>.github.io/<repository-name>/`

---

## Project Structure

```
portfolio/
│
├── index.html          # Main HTML – all sections
├── style.css           # All styles (dark theme, responsive)
├── script.js           # Interactivity (navbar, typewriter, animations)
│
├── assets/
│   ├── images/         # Place your profile photo here
│   └── resume.pdf      # Your downloadable resume
│
└── README.md           # This file
```

---

## Sections Included

| # | Section | Content |
|---|---------|---------|
| 1 | **Hero** | Name, typewriter role titles, intro, CTA buttons |
| 2 | **About Me** | Bio, stats (GPA, year, projects), interests |
| 3 | **Skills** | Programming Languages / Frameworks & Tools / Technologies |
| 4 | **Projects** | 3 projects with descriptions, tech tags, GitHub links |
| 5 | **Education** | B.Tech (AIMSCS) + Class 12 timeline |
| 6 | **Experience** | Batch Representative role at CR Rao AIMSCS |
| 7 | **Certifications** | Google AI Essentials, Quantum Computing, ML Workshop |
| 8 | **Contact** | Email, LinkedIn, GitHub, phone + contact form |
| 9 | **Footer** | Social links, copyright |

---

## How to Customise

### 1. Personal Details

Open `index.html` and update:

- **Name** → search for `Vamshi Krishna Bharadwaj Valluri`
- **Email** → `vamshikbharadwaj@gmail.com`
- **Phone** → `+91 9177044626`
- **LinkedIn URL** → `https://www.linkedin.com/in/vamshi-krishna-bharadwaj-valluri-16727a2b5/`
- **GitHub URL** → `https://github.com/vvkb24/`

### 2. Profile Photo

Replace the initials avatar with a real photo:

1. Add your image to `assets/images/profile.jpg`
2. In `index.html`, find the `.avatar-inner` div inside `#hero` and replace:
   ```html
   <span class="avatar-initials">VK</span>
   ```
   with:
   ```html
   <img src="assets/images/profile.jpg" alt="Vamshi" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
   ```

### 3. Resume PDF

Replace `assets/resume.pdf` with your actual PDF file. Keep the same filename, or update the download link in `index.html`:

```html
<a href="assets/resume.pdf" download="Vamshi_Resume_2026.pdf" ...>
```

### 4. Skills – Adjust Proficiency

In `index.html`, find each skill bar and change `data-width` (1–100):

```html
<div class="skill-fill" data-width="90"></div>
```

### 5. Projects

Each project card follows this template. Duplicate or remove as needed:

```html
<div class="project-card" data-animate="fade-up">
  <div class="project-icon"><i class="fas fa-code"></i></div>
  <div class="project-content">
    <h3 class="project-title">Your Project Title</h3>
    <p class="project-desc">Project description...</p>
    <div class="project-tech">
      <span class="tech-tag">Python</span>
    </div>
    <div class="project-links">
      <a href="YOUR_GITHUB_URL" class="project-btn">
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
  </div>
</div>
```

### 6. Contact Form (Activating)

The contact form uses [Formspree](https://formspree.io) for static-site email delivery:

1. Sign up at [formspree.io](https://formspree.io) (free tier available)
2. Create a new form and copy your Form ID (e.g. `xpwzabcd`)
3. In `index.html`, replace the form action:
   ```html
   <!-- Before -->
   action="https://formspree.io/f/YOUR_FORM_ID"
   
   <!-- After -->
   action="https://formspree.io/f/xpwzabcd"
   ```
4. The `script.js` check will automatically stop blocking submission once the real ID is in place.

### 7. Colours

All colours are CSS custom properties in `style.css`. Change the theme by editing `:root`:

```css
:root {
  --accent-primary:   #6366f1;   /* Main colour (indigo) */
  --accent-secondary: #a855f7;   /* Secondary (purple) */
  --accent-green:     #10b981;   /* Success / active */
  --bg-primary:       #0d1117;   /* Page background */
  --bg-secondary:     #161b22;   /* Darker sections */
}
```

### 8. Typewriter Phrases

In `script.js`, edit the `phrases` array:

```js
const phrases = [
  'CS (Data Science) Student',
  'ML Researcher & Explorer',
  // Add or remove lines here
];
```

---

## Deploying to GitHub Pages

### Step 1 – Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new **public** repository.  
   Suggested name: `portfolio` or `<your-username>.github.io`

### Step 2 – Push the Files

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3 – Enable GitHub Pages

1. In your repository, go to **Settings → Pages**
2. Under **Source**, select `Deploy from a branch`
3. Choose `main` branch and `/ (root)` folder
4. Click **Save**

Within a minute your portfolio will be live at:  
`https://<your-username>.github.io/<repo-name>/`

### Step 4 – (Optional) Custom Domain

1. Buy a domain (e.g. via Namecheap, Google Domains)
2. In GitHub Pages settings, add it under **Custom domain**
3. Add a `CNAME` file in your repo root with just your domain:
   ```
   yourname.dev
   ```
4. Update your domain's DNS `A` records to point to GitHub's IPs

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styles | CSS3 (custom properties, Grid, Flexbox, animations) |
| Scripts | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Google Fonts – Inter + Fira Code |
| Forms | Formspree (optional, free) |
| Hosting | GitHub Pages |

---

## Browser Support

Works on all modern browsers: Chrome, Firefox, Safari, Edge.  
Graceful fallbacks are included for browsers without `IntersectionObserver`.

---

## License

MIT – free to use and modify for personal use.

---

*Built with ❤️ by Vamshi Krishna Bharadwaj Valluri*
