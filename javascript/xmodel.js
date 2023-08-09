 
  docs.frames = {
   title: '1. Get access by <code> this.frames </code>',
   text: `
   To access an element, you can use <code>this.frames</code>.
   `,
   code: `var app = new Uxia({
     name: "xm",
     frames: {
      div: {
       h1: 'Hello world',
       p: 'some text'
      },
      'div.onclick': function() {
       this.frames.div.h1 = "Hello uxia"
      }
     }
    })`
  }

  docs.xmodel = {
   title: '2. Have access to an element by <code>xmodel</code>',
   text: `This method is much more interesting because we also have access to some useful Uxia functions: functions start with <code>$_ </code>.
   
   ${notice({
    description: `<code> $_parent()  </code> (retourn HTMLElement) <br/ > <code> $_remove()</code>(necessary to remove element).`,
    link: `Visit <a href="/docs/example/remove&toggle.html">this page</a> to see a removal example.`,
    type: `info`
   })}
 
   Also, going through xmodel will reduce the amount of your code. <br/> <br/> <b>important:</b> <code>xmodel</code> must always be inside an object.
   
   `,
   code: `var app = new Uxia({
   name: 'xm',
    frames: {
     div: {
      h1: 'Hello world',
      p: 'some text',
      xmodel: "x",
     },
     'div.onclick': function() {
      this.x.h1 = "Hello uxia"
      this.x.p = "😂"
     }
    }
   })`
  }

  var methods = new Uxia({
   name: 'xm',
   frames: {
    'divApp.className': 'container',
    "divApp.divLogo.innerHTML": uxi,
    divApp: {
     0: step.call(docs.frames),
     1: step.call(docs.xmodel)
    }
   },
  })
