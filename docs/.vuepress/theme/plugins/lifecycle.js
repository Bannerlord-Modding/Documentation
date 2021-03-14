import themeHandler from '../mixins/themeHandler.js'

export default {
	mixins: [themeHandler],
	created() {
		const {
			colorThemes = ['blue', 'red', 'purple'],
			defaultColorTheme = 'default',
			defaultDarkTheme = false,
			disableDarkTheme = false,
			disableThemeIgnore = false,
			extraOptions = {},
			labels = {},
			logo,
		} = this.$site.themeConfig.yuu || {}

		const themes = colorThemes || ['blue', 'red', 'purple']
		const hasThemes = Array.isArray(themes) && themes.length > 0

		this.$site.themeConfig.yuu = {
			defaultColorTheme,
			defaultDarkTheme,
			disableDarkTheme,
			disableThemeIgnore,
			extraOptions,
			hasThemes,
			labels: {
				darkTheme: labels.darkTheme || 'Enable Dark Theme:',
				ignoreThemes: labels.ignoreThemes || 'Ignore Other Themes:',
			},
			logo,
			themes,
		}

		this.$root.$yuu = {
			colorTheme: 'default',
			darkTheme: false,
			ignoreThemes: false,
			userTheme: undefined,
		}
	},
	beforeMount() {
		const { colorTheme, darkTheme } = this.$root.$yuu
		const { yuu: yuuConfig } = this.$site.themeConfig
		const userConfig = {
			colorTheme,
			darkTheme,
			ignoreThemes: yuuConfig.disableThemeIgnore ? false : localStorage.getItem('ignore-themes') === 'true',
			userTheme: localStorage.getItem('color-theme'),
		}

		if (yuuConfig.disableDarkTheme !== true) {
			if (yuuConfig.defaultDarkTheme === true && !localStorage.getItem('dark-theme')) {
				localStorage.setItem('dark-theme', true)
			}

			userConfig.darkTheme = localStorage.getItem('dark-theme') === 'true'
		}

		if (yuuConfig.defaultColorTheme !== 'default' && !userConfig.userTheme) {
			userConfig.userTheme = yuuConfig.defaultColorTheme
			localStorage.setItem('color-theme', yuuConfig.defaultColorTheme)
		}

		if (userConfig.userTheme) userConfig.colorTheme = userConfig.userTheme

		this.$root.$yuu = userConfig

		if (this.$root.$yuu.darkTheme) this.setDarkTheme()
		this.setPageTheme()
	},
}
