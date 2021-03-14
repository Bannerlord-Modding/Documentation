export default {
	methods: {
		setDarkTheme() {
			if (this.$root.$yuu.darkTheme) {
				document.body.classList.add('yuu-theme-dark')
				return localStorage.setItem('dark-theme', true)
			}

			document.body.classList.remove('yuu-theme-dark')
			localStorage.setItem('dark-theme', false)
		},
		setIgnoreThemes() {
			this.setPageTheme()
			if (this.$root.$yuu.ignoreThemes) return localStorage.setItem('ignore-themes', true)
			localStorage.removeItem('ignore-themes')
		},
		setPageTheme() {
			const { ignoreThemes, userTheme } = this.$root.$yuu
			const { pageTheme } = this.$page.frontmatter
			const theme = ignoreThemes ? userTheme : pageTheme || userTheme

			this.setTheme({ colorTheme: theme })
		},
		setTheme({ colorTheme = 'default', persist = false }) {
			const { themes } = this.$site.themeConfig.yuu
			const { classList } = document.body
			const themesClasses = themes.map(theme => `yuu-theme-${theme}`)

			if (colorTheme !== 'default' && !themes.includes(colorTheme)) {
				const oldTheme = localStorage.getItem('color-theme')
				colorTheme = themes.includes(oldTheme) ? oldTheme : 'default'
			}

			if (persist) {
				this.$root.$yuu.userTheme = colorTheme
				localStorage.setItem('color-theme', colorTheme)
			}

			this.$root.$yuu.colorTheme = colorTheme
			if (colorTheme === 'default') return classList.remove(...themesClasses)
			classList.remove(...themesClasses.filter(themeClass => themeClass !== `yuu-theme-${colorTheme}`))
			classList.add(`yuu-theme-${colorTheme}`)
		},
	},
}
