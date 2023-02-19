import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from '@astrojs/preact';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: {
        applyBaseStyles: false,
      },
    }),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
  ],
});
