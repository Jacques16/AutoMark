docs.integration =  {
  title: '1 • Integration',
  text: `To embed Uxia in your document, you must use the <code>script</code> tag, as in this example.
  `,
  code: `<script src="res/demo.uxia.js"><\/script>`,
  type: 'html'
 }
 
 docs.creation = {
  title: '2 • Creations',
   text: `<h5>A/ New instance <code>new</code></h5> The declaration is always done by <code>new</code> because Uxia is a constructor. <br/> <br/> <h5> B/ Using <code>name</code> and <code>frames</code> </h5> Here there are two very important key. First <code>name</code>, very useful for targeting the element in which we want the result to appear (we will see this in more detail later). Then then <code>frames</code>. This is where we will develop our HTML/JS/CSS code.
   `,
   code: 
   `var app = new Uxia({
      name: 'app',
      frames: {
       h1: "Uxia",
       p: "Happiness makes up in height what it lacks in length."
    })`,
   type: 'js'
 }
 
 docs.view = {
  title: '3 • Display',
   text: `To display the final result, you must use a special tag named <code>view-marker</code> it must have a <code>name</code> attribute. In the previous example, the value of name was "app". <br/> In conclusion, the generated HTML result will therefore be displayed in the <code>view-marker</code> tag which has an "app" attribute.
   
   `,
   code: 
   `<view-marker name="app"></view-marker>`,
   type: 'html'
 }

var app = new Uxia({
 name: "app",
 frames: {
  'divApp.className': 'container',
  'divApp.divLogo.innerHTML': uxi,
  divApp: {
   0: step.call(docs.integration),
   1: step.call(docs.creation),
   2: step.call(docs.view)
  },
  'divApp.divNotice.innerHTML': notice({
   description: `If the <code> name </code> attribute is not defined, then the result will be displayed in the first <code> view-marker </code> element (not recommended)`,
   link: `it is important to remember that Uxia uses the <b>id</b> to identify itself in the document. This means that each item is unique. It is therefore advisable not to abuse the <b>id</b> attribute.`,
   type: 'danger'
  }),
  'divApp.divResult.addStyle': 'border: 1px solid #ddd; padding: 20px;margin: 0 0 100px',
  'divApp.divResult': {
   h1: "Uxia",
   p: "Happiness makes up in height what it lacks in length."
  }
 }
})
