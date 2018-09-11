// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/src/pages/index.js")),
  "component---src-pages-projects-client-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/src/pages/projects/client.js")),
  "component---src-pages-projects-design-system-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/src/pages/projects/design-system.js")),
  "component---src-pages-projects-yolko-js": preferDefault(require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/src/pages/projects/yolko.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/layout-index.json"),
  "404.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/404.json"),
  "about.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/about.json"),
  "index.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/index.json"),
  "projects-client.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/projects-client.json"),
  "projects-design-system.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/projects-design-system.json"),
  "projects-yolko.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/projects-yolko.json"),
  "404-html.json": require("/Users/ogonzalez2/Desktop/_DESIGN-SYSTEMS/portfolio-2018/ds-portfolio/.cache/json/404-html.json")
}