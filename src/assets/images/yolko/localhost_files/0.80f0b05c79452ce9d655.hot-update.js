webpackHotUpdate(0,{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js?{\"plugins\":[]}!./src/scss/_styles.scss":
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

	// module
	exports.push([module.id, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n  padding: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1, h2, h3, h4, h5, h6 {\n  font-size: 1rem;\n  margin: 0; }\n\np {\n  margin: 0; }\n\nul, ol {\n  line-height: 1rem; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\nhtml {\n  background: ds-color(neutral, 700); }\n\n/* Shadows are intentionally very subtle gradiations. */\nhtml {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #2F3946; }\n\n.ds-display4-text-style {\n  font-size: 112px;\n  line-height: normal;\n  font-weight: 300;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-display3-text-style {\n  font-size: 56px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-display2-text-style {\n  font-size: 44.94px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-display1-text-style {\n  font-size: 34.02px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-headline-text-style {\n  font-size: 24.08px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-title-text-style {\n  font-size: 20.02px;\n  line-height: normal;\n  font-weight: 800;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.  {\n  font-size: 15.96px;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-body2-text-style {\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 800;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946; }\n\n.ds-body1-text-style {\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-caption-text-style {\n  font-size: 11.998px;\n  line-height: 1.5;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\n.ds-button-text-style {\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility;\n  text-transform: uppercase; }\n\n.ds-link-text-style {\n  line-height: 1.5;\n  font-weight: 400;\n  color: #5252ED;\n  font-family: \"Lato\", sans-serif;\n  color: #5252ED;\n  text-rendering: optimizeLegibility;\n  cursor: pointer;\n  text-decoration: none; }\n\nh1 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  font-size: 56px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\nh2 {\n  margin-top: 1.5rem;\n  margin-bottom: 2rem;\n  font-size: 44.94px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\nh3 {\n  margin-top: 1.5rem;\n  margin-bottom: 2rem;\n  font-size: 34.02px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\nh4 {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  font-size: 24.08px;\n  line-height: normal;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\nh5 {\n  margin-top: 1rem;\n  margin-bottom: .5rem;\n  font-size: 20.02px;\n  line-height: normal;\n  font-weight: 800;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\nh6 {\n  margin-top: 1rem;\n  font-size: 15.96px;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\np {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\nul, ol {\n  margin-top: .75rem;\n  margin-bottom: .75rem;\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility; }\n\na {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-decoration: none;\n  line-height: 1.5;\n  font-weight: 400;\n  color: #5252ED;\n  font-family: \"Lato\", sans-serif;\n  color: #5252ED;\n  text-rendering: optimizeLegibility;\n  cursor: pointer; }\n\nbutton {\n  font-size: 14px;\n  line-height: 1.5;\n  font-weight: 400;\n  font-family: \"Lato\", sans-serif;\n  color: #2F3946;\n  text-rendering: optimizeLegibility;\n  text-transform: uppercase;\n  cursor: pointer; }\n  button:focus {\n    outline: 0; }\n\ncode {\n  font-size: 14px; }\n\npre {\n  margin: 2.5rem 0; }\n\n.ds-col-container {\n  margin-left: -20px;\n  margin-right: -20px;\n  width: calc(100% + 40px); }\n  .ds-col-container::after {\n    clear: both;\n    content: \"\";\n    display: block; }\n\n.ds-col-12 {\n  width: calc(100% - 80px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-11 {\n  width: calc(91.66667% - 76.66667px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-10 {\n  width: calc(83.33333% - 73.33333px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-9 {\n  width: calc(75% - 70px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-8 {\n  width: calc(66.66667% - 66.66667px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-7 {\n  width: calc(58.33333% - 63.33333px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-6 {\n  width: calc(50% - 60px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-5 {\n  width: calc(41.66667% - 56.66667px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-4 {\n  width: calc(33.33333% - 53.33333px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-3 {\n  width: calc(25% - 50px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-2 {\n  width: calc(16.66667% - 46.66667px);\n  float: left;\n  margin-left: 40px; }\n\n.ds-col-1 {\n  width: calc(8.33333% - 43.33333px);\n  float: left;\n  margin-left: 40px; }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga'; }\n\n.ds-icon-tiny {\n  font-size: 16px; }\n\n.ds-icon-small {\n  font-size: 24px; }\n\n.ds-icon-medium {\n  font-size: 32px; }\n\n.ds-icon-large {\n  font-size: 48px; }\n\n.ds-icon-xlarge {\n  font-size: 64px; }\n\n.ds-icon-xxlarge {\n  font-size: 96px; }\n\n.ds-btn {\n  height: 44px;\n  width: 100%;\n  border-radius: 3px;\n  transition: all cubic-bezier(0.64, 0, 0.35, 1) 200ms;\n  border: none;\n  box-sizing: border-box; }\n  .ds-btn:hover {\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 2px 4px 0 rgba(0, 0, 0, 0.2); }\n\n.ds-btn-primary {\n  color: #FFFFFF;\n  background: #5252ED; }\n  .ds-btn-primary:hover {\n    background: #6B6BEF; }\n  .ds-btn-primary:active {\n    background: #4545C9;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-btn-secondary {\n  color: #FFFFFF;\n  background: #B885FB; }\n  .ds-btn-secondary:hover {\n    background: #C297FB; }\n  .ds-btn-secondary:active {\n    background: #9C71D5;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-btn-success {\n  color: #1F7845;\n  background: #35C873; }\n  .ds-btn-success:hover {\n    background: #53D087; }\n  .ds-btn-success:active {\n    background: #2DAA61;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-btn-danger {\n  color: #993333;\n  background: #FF5656; }\n  .ds-btn-danger:hover {\n    background: #FF6F6F; }\n  .ds-btn-danger:active {\n    background: #D94949;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-btn-info {\n  color: #FFFFFF;\n  background: #4285F4; }\n  .ds-btn-info:hover {\n    background: #5E97F5;\n    color: #274F92; }\n  .ds-btn-info:active {\n    background: #3871CF;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-btn-ghost {\n  color: #31318E;\n  background: transparent;\n  border: 2px solid #5252ED; }\n  .ds-btn-ghost:hover {\n    background: #5252ED;\n    color: #FFFFFF; }\n  .ds-btn-ghost:active {\n    background: #4545C9;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-btn-small {\n  min-width: 144px;\n  max-width: 179px; }\n\n.ds-btn-medium {\n  max-width: 264px;\n  min-width: 180px; }\n\n.ds-circle-btn {\n  height: 48px;\n  width: 48px;\n  border-radius: 50%;\n  transition: all cubic-bezier(0.64, 0, 0.35, 1) 200ms;\n  border: none;\n  box-sizing: border-box;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .ds-circle-btn:hover {\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 2px 4px 0 rgba(0, 0, 0, 0.2); }\n\n.ds-circle-btn-primary {\n  color: #FFFFFF;\n  background: #5252ED; }\n  .ds-circle-btn-primary:hover {\n    background: #6B6BEF; }\n  .ds-circle-btn-primary:active {\n    background: #4545C9;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-circle-btn-secondary {\n  color: #FFFFFF;\n  background: #B885FB; }\n  .ds-circle-btn-secondary:hover {\n    background: #C297FB; }\n  .ds-circle-btn-secondary:active {\n    background: #9C71D5;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-circle-btn-success {\n  color: #1F7845;\n  background: #35C873; }\n  .ds-circle-btn-success:hover {\n    background: #53D087; }\n  .ds-circle-btn-success:active {\n    background: #2DAA61;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-circle-btn-danger {\n  color: #993333;\n  background: #FF5656; }\n  .ds-circle-btn-danger:hover {\n    background: #FF6F6F; }\n  .ds-circle-btn-danger:active {\n    background: #D94949;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-circle-btn-info {\n  color: #FFFFFF;\n  background: #4285F4; }\n  .ds-circle-btn-info:hover {\n    background: #5E97F5;\n    color: #274F92; }\n  .ds-circle-btn-info:active {\n    background: #3871CF;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-circle-btn-ghost {\n  color: #31318E;\n  background: transparent;\n  border: 2px solid #5252ED; }\n  .ds-circle-btn-ghost:hover {\n    background: #5252ED;\n    color: #FFFFFF; }\n  .ds-circle-btn-ghost:active {\n    background: #4545C9;\n    box-shadow: 0 0 0 0 transparent; }\n\n.ds-input-text-container {\n  display: flex;\n  flex-direction: column;\n  margin: 16px; }\n  .ds-input-text-container .ds-input-label {\n    color: #828890;\n    margin-bottom: 4px; }\n  .ds-input-text-container .ds-input-field {\n    box-sizing: border-box;\n    font-family: \"Lato\", sans-serif;\n    border-radius: 3px;\n    border: 1px #E0E2E4 solid;\n    height: 32px;\n    padding: 4px 8px; }\n    .ds-input-text-container .ds-input-field:focus {\n      outline: #5252ED 1px solid; }\n    .ds-input-text-container .ds-input-field::placeholder {\n      color: #E0E2E4; }\n\n.ds-switch-container {\n  max-width: 52px; }\n  .ds-switch-container .ds-switch-nob {\n    cursor: pointer;\n    height: 31px;\n    width: 49px;\n    background: #FFFFFF;\n    border-radius: 15px;\n    border: 1px solid #C0C3C7;\n    box-sizing: border-box;\n    position: relative; }\n    .ds-switch-container .ds-switch-nob:before {\n      content: '';\n      cursor: pointer;\n      height: 27px;\n      width: 27px;\n      border-radius: 50%;\n      background: #FFFFFF;\n      border: 1px solid #E0E2E4;\n      box-sizing: border-box;\n      left: 1px;\n      top: 1px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n      position: absolute;\n      transition: all 200ms cubic-bezier(0.64, 0, 0.35, 1);\n      max-width: 30px; }\n  .ds-switch-container input[type=checkbox]:checked + .ds-switch-nob:before {\n    top: 2px;\n    left: 20px; }\n  .ds-switch-container input[type=checkbox]:checked + .ds-switch-nob {\n    border: 0;\n    background: #5252ED; }\n  .ds-switch-container input[type=checkbox] {\n    height: 0;\n    width: 0;\n    visibility: hidden; }\n\n.ds-checkbox-container {\n  display: flex;\n  align-items: center;\n  position: relative;\n  user-select: none; }\n  .ds-checkbox-container .ds-checkbox {\n    cursor: pointer;\n    height: 31px;\n    width: 49px;\n    background: #FFFFFF;\n    border-radius: 15px;\n    border: 1px solid #C0C3C7;\n    box-sizing: border-box;\n    position: relative; }\n  .ds-checkbox-container .ds-checkmark {\n    cursor: pointer;\n    height: 20px;\n    width: 20px;\n    background-color: #FFFFFF;\n    border-radius: 2px;\n    border: 1px solid #5252ED;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #FFFFFF;\n    margin-right: 8px; }\n  .ds-checkbox-container .ds-checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none; }\n  .ds-checkbox-container .ds-checkmark:after {\n    left: 9px;\n    top: 5px; }\n  .ds-checkbox-container input[type=checkbox]:checked ~ .ds-checkmark {\n    background: #5252ED; }\n  .ds-checkbox-container input[type=checkbox]:checked ~ .ds-checkmark:after {\n    display: block; }\n  .ds-checkbox-container input[type=checkbox] {\n    height: 0;\n    width: 0;\n    visibility: hidden; }\n\n.ds-radio-container {\n  display: flex;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  user-select: none;\n  /* Create a custom radio button */\n  /* When the radio button is checked, add a blue background */ }\n  .ds-radio-container input[type=radio] {\n    height: 0;\n    width: 0;\n    visibility: hidden; }\n  .ds-radio-container .ds-radio {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    background: #FFFFFF;\n    border: #5252ED 1px solid;\n    box-sizing: border-box;\n    border-radius: 50%; }\n  .ds-radio-container input[type=radio]:checked ~ .ds-radio {\n    background: #5252ED; }\n  .ds-radio-container .ds-radio:after {\n    content: \"\";\n    position: absolute;\n    display: none; }\n  .ds-radio-container input[type=radio]:checked ~ .ds-radio:after {\n    display: block; }\n  .ds-radio-container .ds-radio:after {\n    top: 6px;\n    left: 6px;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #FFFFFF; }\n\n.ds-avatar {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 2px 4px 0 rgba(0, 0, 0, 0.2); }\n\n.ds-avatar-small {\n  height: 32px;\n  width: 32px; }\n\n.ds-avatar-medium {\n  height: 64px;\n  width: 64px; }\n\n.ds-avatar-large {\n  height: 104px;\n  width: 104px; }\n\n.ds-text-area-container {\n  display: flex;\n  flex-direction: column;\n  margin: 16px; }\n  .ds-text-area-container .ds-text-area-label {\n    color: #828890;\n    margin-bottom: 4px; }\n  .ds-text-area-container .ds-text-area-field {\n    font-family: \"Lato\", sans-serif;\n    border-radius: 3px;\n    border: 1px #E0E2E4 solid;\n    padding: 8px 8px; }\n    .ds-text-area-container .ds-text-area-field:focus {\n      outline: #5252ED 1px solid; }\n    .ds-text-area-container .ds-text-area-field::placeholder {\n      color: #E0E2E4; }\n\n.ds-input-select-container {\n  display: flex;\n  flex-direction: column;\n  margin: 16px;\n  position: relative; }\n  .ds-input-select-container .ds-input-label {\n    color: #828890;\n    margin-bottom: 4px; }\n  .ds-input-select-container .ds-input-field {\n    box-sizing: border-box;\n    font-family: \"Lato\", sans-serif;\n    border-radius: 3px;\n    border: 1px #E0E2E4 solid;\n    height: 32px;\n    padding: 4px 8px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    cursor: pointer; }\n    .ds-input-select-container .ds-input-field:focus {\n      outline: #5252ED 1px solid; }\n    .ds-input-select-container .ds-input-field::placeholder {\n      color: #E0E2E4; }\n    .ds-input-select-container .ds-input-field::-ms-expand {\n      display: none; }\n  .ds-input-select-container .ds-select-chevron-down {\n    position: absolute;\n    color: #5252ED;\n    right: 8px;\n    top: 30px;\n    pointer-events: none; }\n\n.ds-input-search-container {\n  display: flex;\n  flex-direction: column;\n  margin: 16px;\n  position: relative; }\n  .ds-input-search-container .ds-input-field {\n    box-sizing: border-box;\n    font-family: \"Lato\", sans-serif;\n    border-radius: 3px;\n    border: 1px #E0E2E4 solid;\n    height: 40px;\n    padding: 4px 8px;\n    padding-left: 36px; }\n    .ds-input-search-container .ds-input-field:focus {\n      outline: #5252ED 1px solid; }\n    .ds-input-search-container .ds-input-field:focus + .ds-search-input-icon {\n      color: #5252ED; }\n    .ds-input-search-container .ds-input-field::placeholder {\n      color: #E0E2E4; }\n    .ds-input-search-container .ds-input-field::-webkit-search-cancel-button {\n      -webkit-appearance: searchfield-cancel-button; }\n  .ds-input-search-container .ds-search-input-icon {\n    position: absolute;\n    top: 10px;\n    left: 8px;\n    color: #E0E2E4; }\n\n.home-wrapper {\n  display: grid;\n  grid-row-gap: 300px;\n  grid-template-columns: 100%;\n  position: relative;\n  padding-bottom: 200px; }\n  .home-wrapper .portfolio-logo-img {\n    width: 100%;\n    max-width: 723px;\n    margin-bottom: 100px;\n    filter: drop-shadow(0 50px 5px rgba(0, 0, 0, 0.01)); }\n  .home-wrapper .hero-button-text-style {\n    color: #A1A6AC;\n    letter-spacing: 1px;\n    margin-bottom: 50px; }\n  .home-wrapper .hero-subheading-text {\n    max-width: 664px;\n    color: #A1A6AC;\n    text-align: center; }\n  .home-wrapper .home-quote-statement {\n    max-width: 600px;\n    margin: 0 auto; }\n  .home-wrapper .work-lettering {\n    width: 100%;\n    display: block;\n    max-width: 350px;\n    margin: 0 auto; }\n  .home-wrapper .number {\n    position: absolute;\n    margin-right: 32px;\n    max-width: 208px;\n    top: -124px;\n    left: -114px;\n    z-index: -1; }\n  .home-wrapper .project-card-title-container {\n    position: absolute;\n    bottom: 40px;\n    right: 40px;\n    color: #FFFFFF;\n    text-transform: uppercase;\n    display: block;\n    text-align: right; }\n    .home-wrapper .project-card-title-container .special-text-styling {\n      color: #FFFFFF;\n      text-align: right;\n      display: block; }\n    .home-wrapper .project-card-title-container .ds-display2-text-style {\n      margin-top: 16px;\n      color: #FFFFFF; }\n    .home-wrapper .project-card-title-container .project-card__footer-text {\n      color: #EAEBEC; }\n  .home-wrapper .project-link {\n    min-width: 90%;\n    display: block;\n    margin: 0 auto; }\n  .home-wrapper .section-title-container {\n    max-width: 1400px;\n    margin: 0 auto; }\n    .home-wrapper .section-title-container.design-process-title {\n      grid-area: design-process-title; }\n    .home-wrapper .section-title-container img {\n      display: block;\n      max-height: 200px;\n      max-width: 450px;\n      margin: 0 auto; }\n  .home-wrapper .design-process-img2 {\n    margin: 0 auto;\n    max-width: 800px; }\n  .home-wrapper .design-process-path1 {\n    grid-area: \"design-process-path1\";\n    z-index: -2; }\n  .home-wrapper .design-process-path2 {\n    grid-area: \"design-process-path2\";\n    z-index: -2; }\n  .home-wrapper .design-process-path3 {\n    grid-area: \"design-process-path3\";\n    z-index: -2; }\n  .home-wrapper .design-process-path4 {\n    grid-area: \"design-process-path4\";\n    z-index: -2; }\n  .home-wrapper .design-process-path5 {\n    grid-area: \"design-process-path5\";\n    z-index: -2; }\n  .home-wrapper .home-posts-container {\n    margin: 0 auto;\n    max-width: 1400px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: stretch; }\n    .home-wrapper .home-posts-container a {\n      border-radius: 8px;\n      display: block;\n      color: inherit;\n      width: 400px;\n      height: 100%;\n      margin-top: 20px;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n      transition: all cubic-bezier(0.64, 0, 0.35, 1) 500ms; }\n      .home-wrapper .home-posts-container a .img-thumbnail {\n        object-fit: cover;\n        display: block;\n        width: 100%;\n        height: 268px;\n        border-radius: 10px 10px 0 0; }\n      .home-wrapper .home-posts-container a .post-text-container {\n        padding: 1rem 1.5rem;\n        border-radius: 0 0 10px 10px; }\n      .home-wrapper .home-posts-container a .  {\n        margin: 0; }\n      .home-wrapper .home-posts-container a span {\n        color: #A1A6AC; }\n      .home-wrapper .home-posts-container a:hover {\n        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); }\n\n.about-page {\n  background: pink; }\n\n.project-page {\n  padding: 0 0 200px 0;\n  position: relative; }\n  .project-page .hero-container {\n    max-width: 1200px;\n    height: 100vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin: 0 auto; }\n    .project-page .hero-container .hero-container__text-container {\n      max-width: 546px; }\n      .project-page .hero-container .hero-container__text-container .hero-container__title {\n        margin-top: 8px;\n        margin-bottom: 40px;\n        color: #828890; }\n      .project-page .hero-container .hero-container__text-container .hero-container__description {\n        margin-bottom: 32px; }\n      .project-page .hero-container .hero-container__text-container span {\n        margin-right: 40px; }\n      .project-page .hero-container .hero-container__text-container .project-btn__cta {\n        display: block;\n        margin-top: 32px; }\n    .project-page .hero-container .hero-container__img-container .project-img {\n      filter: drop-shadow(0 8px 17px rgba(0, 0, 0, 0.2));\n      max-width: 500px; }\n  .project-page .project__video-container {\n    margin: 50px auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .project-page .project-section-title {\n    text-align: center;\n    margin-top: 300px;\n    text-transform: uppercase;\n    font-weight: 400; }\n  .project-page .case-study-dossier-container {\n    max-width: 1200px;\n    margin: 0 auto;\n    display: grid;\n    grid-column-gap: 64px;\n    grid-template-columns: 2fr 1fr 1fr;\n    margin-top: 48px; }\n    .project-page .case-study-dossier-container .dossier__problem-container {\n      grid-row: span 2; }\n  .project-page .project-displayfb-img {\n    width: 100%;\n    max-width: 1400px;\n    margin: 100px auto;\n    display: block;\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 2px 4px 0 rgba(0, 0, 0, 0.2); }\n  .project-page .project-img-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));\n    max-width: 1400px;\n    margin: 200px auto; }\n    .project-page .project-img-grid .grid-img {\n      min-height: 500px;\n      max-height: 900px;\n      object-fit: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n      width: 100%; }\n    .project-page .project-img-grid p {\n      padding: 0 64px; }\n  .project-page .design-process-img {\n    max-width: 620px;\n    margin: 100px auto 0 auto;\n    display: block; }\n  .project-page .design-process__section-container {\n    max-width: 1000px;\n    margin: 0 auto;\n    display: grid;\n    grid-column-gap: 64px;\n    grid-template-columns: 1fr 2fr;\n    margin-top: 448px; }\n    .project-page .design-process__section-container.no-top-margin {\n      margin-top: 128px; }\n    .project-page .design-process__section-container .project-design-process-title-container {\n      position: relative; }\n      .project-page .design-process__section-container .project-design-process-title-container .project-design-process-number {\n        position: absolute;\n        max-width: 160px;\n        top: -60px;\n        left: -100px;\n        opacity: .5; }\n      .project-page .design-process__section-container .project-design-process-title-container .design-process__section-title {\n        color: #31318E;\n        text-transform: uppercase;\n        font-weight: 800; }\n  .project-page .project-things-learned-container {\n    max-width: 1000px;\n    margin: 0 auto 200px auto; }\n\n.design-system-page .hero-container .ds-logo {\n  margin-left: 80px;\n  max-width: 600px; }\n\n.design-system-page .hero-container .special-text-styling {\n  margin-top: 32px; }\n\n.design-system-page .hero-container .project-btn__cta {\n  margin-top: 64px; }\n\n.portfolio-footer-container {\n  padding: 3rem;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  box-sizing: border-box; }\n\n.design-process-card__container {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .design-process-card__container .design-process-card__wrapper {\n    flex: 1; }\n    .design-process-card__container .design-process-card__wrapper .design-process__number {\n      position: absolute;\n      top: -50px;\n      max-width: 100px;\n      z-index: -1; }\n    .design-process-card__container .design-process-card__wrapper .design-process__card {\n      background: #FFFFFF;\n      min-height: 200px;\n      max-width: 400px;\n      width: 100%;\n      padding: 16px 32px;\n      box-sizing: border-box;\n      box-shadow: 0 15px 45px -5px rgba(10, 16, 34, 0.3);\n      border-radius: 8px;\n      position: relative; }\n      .design-process-card__container .design-process-card__wrapper .design-process__card .design-process-badge {\n        text-transform: uppercase;\n        display: block;\n        padding: 8px 24px;\n        text-align: center;\n        border-radius: 0 8px 0 0;\n        position: absolute;\n        right: 0;\n        top: 0; }\n        .design-process-card__container .design-process-card__wrapper .design-process__card .design-process-badge.tertiary {\n          color: #3AA6FE;\n          background: #B0DBFE; }\n        .design-process-card__container .design-process-card__wrapper .design-process__card .design-process-badge.success {\n          color: #35C873;\n          background: #AEE9C7; }\n        .design-process-card__container .design-process-card__wrapper .design-process__card .design-process-badge.warning {\n          color: #D8A737;\n          background: #FEE7B3; }\n\n.top-nav {\n  position: absolute;\n  top: 0;\n  height: 80px;\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; }\n  .top-nav .logo {\n    max-width: 50px;\n    padding: 0 48px; }\n  .top-nav ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    text-decoration: none; }\n    .top-nav ul li {\n      padding: 0 48px;\n      text-transform: uppercase;\n      font-size: 11.998px; }\n      .top-nav ul li a {\n        color: #A1A6AC;\n        transition: all cubic-bezier(0.64, 0, 0.35, 1) ds-speed(slowest); }\n        .top-nav ul li a:hover {\n          font-weight: 600;\n          color: #5252ED;\n          cursor: pointer; }\n      .top-nav ul li .top-nav-link-isActive {\n        color: #2F3946; }\n\nhtml {\n  background: #f9fafc; }\n  html .crafted-quote {\n    font-size: 20.02px;\n    padding: 24px;\n    color: #5252ED; }\n  html .strikethrough-text {\n    text-decoration: line-through; }\n  html .special-text-styling {\n    font-size: 14px;\n    color: #828890;\n    letter-spacing: 1px;\n    text-transform: uppercase; }\n  html .section-title {\n    text-align: center;\n    margin-top: 100px;\n    text-transform: uppercase;\n    font-weight: 400; }\n", ""]);

	// exports


/***/ })

})
//# sourceMappingURL=0.80f0b05c79452ce9d655.hot-update.js.map