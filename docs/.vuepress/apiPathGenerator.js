/*
    Created in reference to https://github.com/vuejs/vuepress/issues/613
    VuePress does not natively support recursive directory listing
*/

const _ = require('lodash')
const fs = require('fs')
const glob = require('glob')
const markdownIt = require('markdown-it')
const meta = require('markdown-it-meta')

module.exports = {
    
    getDirectories:function (source) {
        return fs
        .readdirSync(source, { withFileTypes: true })
        .filter(dir => dir.isDirectory())
        .map(dir => dir.name)
    },
    getAPITree:function (parent, dir, useSubDirs = true) {
      path = parent + `/${dir}`
      tree = []
      directories = this.getDirectories(path)
      if (useSubDirs && directories.length > 0)
        for (var i = 0, len = directories.length; i < len; i++) {
          dirChildren = this.getChildren(parent, dir + `/${directories[i]}`)
          obj = {
            title: directories[i],
            children: dirChildren
          }
          if (useSubDirs) obj.path = `/${dir}/${directories[i]}/`
          tree.push(obj)
        }
      else {
        tree = this.getChildren(parent, dir)
      }
      return tree
    },
    // Load all MD files in a specified directory and order by metadata 'order' value
    getChildren:function (parent_path, dir, ignoreREADME = true) {
      dir_path = parent_path + (dir ? `/${dir}` : '')
      files = glob.sync(dir_path + '/**/*.md').map(path => {
        // Instantiate MarkdownIt
        md = new markdownIt()
        // Add markdown-it-meta
        md.use(meta)
        // Get the order value
        file = fs.readFileSync(path, 'utf8')
        md.render(file)
        order = md.meta.order
        // Remove "parent_path" and ".md"
        path = path.slice(parent_path.length + 1, -3)
        // Remove "README", making it the de facto index page
        if (path.endsWith('README')) {
          path = path.slice(0, -6)
        }
    
        return {
          path,
          order
        }
      })
    
      if (ignoreREADME) files = files.filter(f => !f.path.endsWith('/'))
    
      // Return the ordered list of files, sort by 'order' then 'path'
      return _.sortBy(files, ['order', 'path']).map(file => file.path)
    }
}