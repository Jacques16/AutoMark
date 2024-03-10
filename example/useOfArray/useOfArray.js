<!DOCTYPE html>
<html>

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Use Of Array</title>
</head>
<body>
 <view-marker name="useOArray"></view-marker>
 <script src="res/AutoMark.js"></script>
 <script>
function button(content, callback) {
 return {
  onclick: callback,
  textContent: content
 }
}
const app = new AutoMark({
 name: "useOArray",
 frames: {
  h2: 'Il y a deux façons d\'utiliser un tableau avec AutoMark',
  p: {
   1: '[1]  Pour définir un attribut.',
   2: '[2]  Pour insérer plusieurs données à afficher.'
  },
  //[1] use array to define attribute
  'h2.myattr': ['faa'],
  //[2] to add dynamic data 
  // METHOD 1
  //'ol.li': [{ textContent: "🥒" }],
  //'ul.li': [{ textContent: "🍑" }],

  //METHOD 2
  ol: {
   xmodel: 'myol',
   li: [{ textContent: "🥒" }],
  },
  ul: {
   xmodel: 'myul',
   li: [{ textContent: "🍑" }],
  },

  'divUl.button': {
   0: button('add ul child', '{{ addUl() }}'),
   1: button('remove ul child', '{{ removeUl() }}')
  },
  'divOl.button': {
   0: button('add ol child', '{{addOl}}'),
   1: button('remove ol child', '{{removeOl}}')
  }
 },
 methods: {
  addOl() {
   ol = this.myol.li;
   ol.push({ textContent: "🥒" })
  },
  removeOl() {
   this.myol.li.$pop('ol.li');
  },
  removeUl() {
   this.myul.li.$pop('ul.li');
  },
  addUl() {
   let d = new Date(),
    li = this.myul.li;
    li.push({ textContent: "🍑" })
  }
 }
})

 </script>
</body>
</html>
