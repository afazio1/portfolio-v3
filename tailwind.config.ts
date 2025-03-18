import type { Config } from "tailwindcss";

export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
          border: 'var(--card-border)',
          "border-hover": 'var(--card-border-hover)',
  			},
        green: 'var(--green)',
        blue: 'var(--blue)',
        purple: 'var(--purple)',
        "purple-blue": 'var(--purple-blue)',
        "gray-white": 'var(--gray-white)',
        tag: {
          background: 'var(--tag-background)'
        },
        muted: 'var(--muted)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
