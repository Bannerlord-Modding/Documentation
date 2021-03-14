<template>
	<div class="theme-options">
		<div v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.above" class="user-options-above">
			<component :is="yuuConfig.extraOptions.above" />
		</div>
		<ul v-if="yuuConfig.hasThemes" class="color-theme-options">
			<li>
				<a href="#" class="default-theme" @click.prevent="setTheme({ persist: true })"></a>
			</li>
			<li v-for="colorTheme in yuuConfig.themes" :key="colorTheme">
				<a href="#" :class="`${colorTheme}-theme`" @click.prevent="setTheme({ colorTheme, persist: true })"></a>
			</li>
		</ul>
		<div v-if="yuuConfig.disableDarkTheme !== true" class="dark-theme-options toggle-option">
			<label for="dark-theme-toggle">{{ yuuConfig.labels.darkTheme }}</label>
			<input id="dark-theme-toggle" v-model="$root.$yuu.darkTheme" type="checkbox" @change="setDarkTheme" />
		</div>
		<div v-if="yuuConfig.hasThemes && yuuConfig.disableThemeIgnore !== true" class="ignore-themes-options toggle-option">
			<label for="ignore-themes-toggle">{{ yuuConfig.labels.ignoreThemes }}</label>
			<input id="ignore-themes-toggle" v-model="$root.$yuu.ignoreThemes" type="checkbox" @change="setIgnoreThemes" />
		</div>
		<div v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.below" class="user-options-below">
			<component :is="yuuConfig.extraOptions.below" />
		</div>
	</div>
</template>

<script>
import themeHandler from '@theme/mixins/themeHandler.js'

export default {
	name: 'ThemeOptions',
	mixins: [themeHandler],
	computed: {
		yuuConfig() {
			return this.$site.themeConfig.yuu
		},
	},
}
</script>

<style lang="stylus">
@import '../../styles/variables.styl';

.color-theme-options {
	display: flex;
	justify-content: space-around;

	li {
		width: 33%;
		text-align: center;

		a {
			width: 15px;
			height: 15px;
			border-radius: 2px;

			&.default-theme {
				background-color: $accentColor;
			}

			&.blue-theme {
				background-color: $blueAccentColor;
			}

			&.red-theme {
				background-color: $redAccentColor;
			}

			&.purple-theme {
				background-color: $purpleAccentColor;
			}
		}
	}
}

.toggle-option {
	display: flex;
	justify-content: space-between;
	align-items: center;

	label {
		padding-right: 0.25em;
	}
}
</style>
