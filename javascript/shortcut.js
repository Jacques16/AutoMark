docs.scut = {
 title: '1. Scut.',
 text: `Writing long code with Uxia still has an advantage. It allows you to cut each part into even smaller parts and have total control over every bit of your documents. But sometimes it's not always necessary. <br/> <br/>
To save time, you can also create a path without specifying its contents in its property by using <b>scut</b>.
   `,
 code: `var app = new Uxia({
     frames: {
      'divApp.style': 'border: 1px solid #ddd; padding: 20px;',
      'divApp.p.textContent': 'boo 🤯',
      //can contain an object
      'divApp.button': {
       wholeText: 'click me'
      },
      //can contain a method 
      'divApp.button.onclick': function() {
       //But to get access to 'divApp.style' you have to set the key as it is.
       this.frames['divApp.style'] += 'background-color:  red'
      }
     }
    })`
}

docs.multiE = {
 title: '1. Multiples Elements',
 text: ` It is sometimes necessary to display several elements of the same nature,
  for example several lists all having the same <code > li </code> tag. But with objects, each key is meant to be unique. You must therefore make the distinction by identifying each element. Example: <code> liA: 'a', liB: 'b'</code > .
  <br /> <br/>
 Or use a shortcut like this.`,
 code: `var app = new Uxia({
     name: 'app',
     frames: {
     ul: {
      //note* you can do 'ul.li': {...}
      li: {
      //Key must be numbers, display [0,+infinity].
      //You can't insert code here because 'li' is not a parent key.
      //But, if you want each 'li' to inherit a common property. Add $_prop: {...}.
        0: 'a',
        1: {
         wholeText: 'b'
        }
        ...
      }
     }
     }
    })`
}

var methods = new Uxia({
 name: 'methods',
 frames: {
  'divApp.className': 'container',
  "divApp.divLogo.innerHTML": uxi,
  divApp: {
   0: step.call(docs.scut),
   1: step.call(docs.multiE)
  }
 },
})