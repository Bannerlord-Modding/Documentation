<template>
	<parent-layout />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
	name: 'Layout',
	components: {
		ParentLayout,
	},
}
</script>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/themes/dark.styl" lang="stylus"></style>
<style src="../styles/themes/blue.styl" lang="stylus"></style>
<style src="../styles/themes/red.styl" lang="stylus"></style>
<style src="../styles/themes/purple.styl" lang="stylus"></style>
