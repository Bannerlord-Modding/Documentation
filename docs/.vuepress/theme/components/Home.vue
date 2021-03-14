<template>
	<component :is="$page.frontmatter.homeComponent || 'ParentHome'" />
</template>

<script>
import ParentHome from '@parent-theme/components/Home.vue'
import themeHandler from '@theme/mixins/themeHandler.js'

export default {
	name: 'Home',
	components: {
		ParentHome, // eslint-disable-line vue/no-unused-components
	},
	mixins: [themeHandler],
	watch: {
		'$route.path'(to, from) {
			if (to !== from) this.setPageTheme()
		},
	},
	beforeDestroy() {
		this.setPageTheme()
	},
}
</script>
