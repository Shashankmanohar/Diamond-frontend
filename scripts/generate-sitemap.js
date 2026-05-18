import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://diamondresort.in';
const API_URL = 'http://localhost:5000/api/blogs'; // Default backend port

// Current date formatted as YYYY-MM-DD
const currentDate = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: 'suites', changefreq: 'monthly', priority: '0.9' },
  { path: 'dining', changefreq: 'monthly', priority: '0.8' },
  { path: 'experiences', changefreq: 'monthly', priority: '0.8' },
  { path: 'gallery', changefreq: 'monthly', priority: '0.7' },
  { path: 'blog', changefreq: 'weekly', priority: '0.8' },
  { path: 'reserve', changefreq: 'monthly', priority: '0.9' },
  { path: 'sitemap', changefreq: 'monthly', priority: '0.5' },
];

const dynamicExperiences = [
  'pool',
  'activities',
  'dj-night'
];

const dynamicEvents = [
  'wedding',
  'birthday',
  'ring-ceremony',
  'reception',
  'corporate'
];

async function generateSitemap() {
  console.log('Generating Google-ready sitemap.xml...');

  const urls = [];

  // 1. Add static routes
  for (const route of staticRoutes) {
    const cleanPath = route.path ? `/${route.path}` : '';
    urls.push({
      loc: `${DOMAIN}${cleanPath}`,
      lastmod: currentDate,
      changefreq: route.changefreq,
      priority: route.priority
    });
  }

  // 2. Add dynamic experiences
  for (const exp of dynamicExperiences) {
    urls.push({
      loc: `${DOMAIN}/experiences/${exp}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  }

  // 3. Add dynamic events
  for (const event of dynamicEvents) {
    urls.push({
      loc: `${DOMAIN}/events/${event}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  }

  // 4. Try fetching dynamic blogs from API
  try {
    const res = await fetch(API_URL);
    if (res.ok) {
      const blogs = await res.json();
      if (Array.isArray(blogs)) {
        console.log(`Successfully fetched ${blogs.length} blog posts from backend API.`);
        // Only include published blogs
        const publishedBlogs = blogs.filter(b => b.status === 'published' || !b.status);
        for (const blog of publishedBlogs) {
          if (blog.slug) {
            urls.push({
              loc: `${DOMAIN}/blog/${blog.slug}`,
              lastmod: blog.updatedAt ? new Date(blog.updatedAt).toISOString().split('T')[0] : currentDate,
              changefreq: 'weekly',
              priority: '0.8'
            });
          }
        }
      }
    } else {
      console.warn(`Backend API returned status ${res.status}. Proceeding without dynamic blog URLs.`);
    }
  } catch (error) {
    console.warn('Backend API is offline or unreachable. Proceeding with static and structural routes only.');
  }

  // 5. Generate XML string
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const url of urls) {
    xml += `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }

  xml += `
</urlset>
`;

  // Write to public directory
  const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(publicPath, xml, 'utf8');
  console.log(`Sitemap successfully written to ${publicPath}`);
  console.log(`Total URLs generated: ${urls.length}`);
}

generateSitemap();
