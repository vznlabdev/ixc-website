# IncoXchange Website

A modern, responsive website for IncoXchange built with Next.js, Sanity CMS, Tailwind CSS, and Shadcn/ui components.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible UI components
- **Sanity CMS** - Headless content management system
- **Lucide React** - Icon library

## 📁 Project Structure

```
ixc-web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── contact/           # Contact page
│   │   ├── services/          # Services page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn UI components
│   │   ├── Header.tsx        # Site header
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Hero.tsx          # Hero section
│   │   └── Services.tsx      # Services grid
│   └── lib/                   # Utility functions
│       └── sanity.ts          # Sanity client config
├── schemas/                   # Sanity schema definitions
│   ├── index.ts              # Schema exports
│   ├── hero.ts               # Hero schema
│   ├── page.ts               # Page schema
│   ├── service.ts            # Service schema
│   ├── testimonial.ts        # Testimonial schema
│   └── blogPost.ts           # Blog post schema
├── sanity.config.ts          # Sanity configuration
└── components.json           # Shadcn configuration
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Sanity CMS

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project
3. Copy your project ID and dataset name
4. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 3. Initialize Sanity Studio

```bash
npm run sanity
```

This will start the Sanity Studio at `http://localhost:3333`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Content Management

### Sanity Schemas

The project includes the following content types:

- **Hero**: Homepage banner content
- **Services**: Service offerings with features and icons
- **Pages**: General website pages
- **Testimonials**: Customer testimonials
- **Blog Posts**: Content marketing articles

### Adding Content

1. Access Sanity Studio at `http://localhost:3333`
2. Create and publish your content
3. Content will automatically appear on the website

## 🎨 Customization

### Styling

- Tailwind CSS classes for styling
- Custom color scheme in `tailwind.config.js`
- Shadcn/ui components for consistent design

### Components

- All components are in `src/components/`
- UI components from Shadcn in `src/components/ui/`
- Easily customizable and extendable

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Pages will be automatically routed

## 🚦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Sanity
npm run sanity       # Start Sanity Studio
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS
- Google Cloud

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

## 📱 Features

- **Responsive Design**: Works on all devices
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and code splitting
- **Accessibility**: WCAG compliant components
- **Content Management**: Easy content updates via Sanity
- **TypeScript**: Type-safe development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please contact the development team or create an issue in the repository.

---

Built with ❤️ for IncoXchange 