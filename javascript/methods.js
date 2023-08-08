docs.methods = {
 title: 'How to use methods ?',
 text: `
 To use methods, you must use the <code>methods</code> key. <br/>
<br/><br/>
<h5>The role of <code>this</code> </h5>
<code>this</code> makes all the variables defined in Uxia accessible. For example <code>data</code>, <code>methods</code> itself or even the "id" (When you choose a key in this way h1<b>Title</b>, <b> title</b> will be accessible via <code>this</code>) And it contains an HTML element.
</br> </br>
<h5> The role of <code>this.frames</code> </h5>
It gives you access and an overview of all the data in <code>frames</code>. <br/> </br>
If you need to go even further, try this code <code>Uxia[argumentsIndex].frames </code> `,
 code: `var app = new Uxia ({
   name: 'methods',
   frames: {
    h1Title: 'Hello world',
    p: 'Je suis un uxiens.',
    button: {
     textContent: 'reverse',
     //events must always start with (on)
     //it can have a text value (which will call the corresponding method) or a simple function
     onclick: 'reverse'
    }
   },
   methods: {
    reverse: function () {
     alert(this.frames.p.split('').reverse('').join(''))
    }
   }
  })`
}


var methods = new Uxia({
 name: 'methods',
 frames: {
  'divApp.className': 'container',
  divApp: {
   "divLogo.innerHTML": uxi,
   divExample: step.call(docs.methods),
   'divLink.innerHTML': notice({
    description: `You are ready ! But to become a true uxian, first start by taking a look at <a href="/docs/example">these practical examples</a> to better understand the concept. <br/>`,
    link: `<b>important</b>: Read comments, test for yourself, and explore.`,
    type: 'success'
   })
  }
 },
})