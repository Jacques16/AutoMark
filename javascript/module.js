var preview = function (illustration,lang) {
 return {
  'pre.addClass': `lang-${lang ? lang : 'js'}`,
  'pre.code': {
   wholeText: `${illustration}`
  }
 }
}, preview$ = function (illustration, lang) {
 return `<pre class="lang-${lang ? lang : 'js'}"> <code> ${illustration} </code> </pre>`
}, step = function (obj) {
 return {
  addClass: 'mt-5',
  'h1.innerHTML': this.title,
  'p.innerHTML':  this.text  + ('<br/><br/><b>example</b>'),
   div: preview(this.code, this.type)
 }
}, notice = function (data) {
  return `<hr/> ${data.description} <div class = "mt-3 alert alert-${data.type ? data.type : 'info'}" > ${data.link} </div> <hr/>`
 },  docs = {}
const uxi = `<div style="display:flex;align-items:center;justify-content:center"><img src="/logo/uxi.png"></div> <hr/>`
