<template>
	<main class="page">
		<slot name="top"></slot>
		<Content class="theme-default-content" />
		<page-edit />
		<page-nav v-bind="{ sidebarItems }" />
		<slot name="bottom"></slot>
	</main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'
import PageNav from '@parent-theme/components/PageNav.vue'
import themeHandler from '@theme/mixins/themeHandler.js'

export default {
	name: 'Page',
	components: {
		PageEdit,
		PageNav,
	},
	mixins: [themeHandler],
	props: ['sidebarItems'],
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

<style lang="stylus">
.page {
	display: block;
	padding-bottom: 2rem;
}
</style>
