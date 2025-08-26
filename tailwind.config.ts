import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
				colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
					cta: {
						DEFAULT: 'hsl(var(--cta))',
						foreground: 'hsl(var(--cta-foreground))'
					},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'tech-red': 'hsl(var(--tech-red))',
				'tech-gray': 'hsl(var(--tech-gray))',
				'tech-dark': 'hsl(var(--tech-dark))',
				'tech-darker': 'hsl(var(--tech-darker))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'slow-spin': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'spin-reverse': {
					from: { transform: 'rotate(360deg)' },
					to: { transform: 'rotate(0deg)' }
				},
				'orbit-1': {
					from: { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
					to: { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' }
				},
				'orbit-2': {
					from: { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
					to: { transform: 'rotate(-360deg) translateX(150px) rotate(360deg)' }
				},
				'orbit-3': {
					from: { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' },
					to: { transform: 'rotate(360deg) translateX(180px) rotate(-360deg)' }
				},
				'orbit-4': {
					from: { transform: 'rotate(0deg) translateX(220px) rotate(0deg)' },
					to: { transform: 'rotate(-360deg) translateX(220px) rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slow-spin': 'slow-spin 60s linear infinite',
				'spin-slow': 'spin-slow 30s linear infinite',
				'spin-reverse': 'spin-reverse 45s linear infinite',
				'orbit-1': 'orbit-1 20s linear infinite',
				'orbit-2': 'orbit-2 25s linear infinite',
				'orbit-3': 'orbit-3 30s linear infinite',
				'orbit-4': 'orbit-4 35s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
