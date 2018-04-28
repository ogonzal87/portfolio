// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/src/pages/index.js")),
  "component---src-pages-yolko-project-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/src/pages/yolko-project.js")),
  "component---src-pages-ds-project-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/src/pages/ds-project.js")),
  "component---src-pages-client-project-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/src/pages/client-project.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/index.json"),
  "yolko-project.json": require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/yolko-project.json"),
  "ds-project.json": require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/ds-project.json"),
  "client-project.json": require("/Users/ogonzalez2/Desktop/_DESIGN SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/client-project.json")
}