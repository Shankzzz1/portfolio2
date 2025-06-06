const config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true, // ✅ Now works without TS error
  },
} as any;

export default config;
