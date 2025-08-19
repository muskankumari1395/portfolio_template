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
			colors: {
				background: 'hsl(var(--background))',
				'background-secondary': 'hsl(var(--background-secondary))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					glass: 'hsl(var(--card-glass))',
					border: 'hsl(var(--card-border))'
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					border: 'hsl(var(--input-border))',
					focus: 'hsl(var(--input-focus))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				border: 'hsl(var(--border))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-20px) rotate(1deg)' },
					'50%': { transform: 'translateY(-10px) rotate(-1deg)' },
					'75%': { transform: 'translateY(-15px) rotate(0.5deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsla(191, 100%, 50%, 0.3)' },
					'50%': { boxShadow: '0 0 40px hsla(191, 100%, 50%, 0.5)' }
				},
				'fade-in-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)',
						filter: 'blur(5px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
						filter: 'blur(0px)'
					}
				},
				'slide-in-right': {
					from: {
						opacity: '0',
						transform: 'translateX(100px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out infinite 2s',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.8s ease-out forwards'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;