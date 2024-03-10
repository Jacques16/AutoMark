<!DOCTYPE html>
<html>

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Tuto - remove && toggle</title>
</head>

<body>
 <view-marker name="remove-tuto"></view-marker>
 <view-marker name="toggle-tuto"></view-marker>
</body>
<script src="res/AutoMark.js"></script>
<script>
 //divison will work like a component, its dynamic && can be update easily by arguments or variable
 const module = function(text, xm) {
  var d = new Date()
  return {
   h1: text,
   p: `this text was added at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
   xmodel: xm
  }
 }
 //We will insert function btn who return a object and just modify content by arg
 const btn = function(a, b) {
  return {
   textContent: a,
   onclick: b
  }
 }
 const app = new AutoMark(
  {
   name: "remove-tuto",
   frames: {
    'aside.style': 'border: 2px solid #ddd; padding: 20px',
    'aside.div': module("Remove", "faa"),
    'aside.button': {
     0: btn("effacer du dom", "{{ remove()  }}"),
     1: btn("Ajouter au dom", "{{ add() }}"),
    }
   },
   methods: {
    remove() {
     //You can remove Uxia element only by "divison" xmodel 
     var remove = this.faa.$remove;
     remove ? remove() : alert("divison element was already deleted by AutoMark");
    },
    add() {
     //re-add element again
     return this.frames['aside.div'] = module("Re-added", 'faa')
    }
   }
  },
  
  {
   name: "toggle-tuto",
   data: {
    show: true
   },
   frames: {
    'aside.style': 'border: 2px solid #ddd; padding: 20px; border-top: none',
    'aside.div': module('Toggle', 'app2'),
    'aside.div.onupdate': '{{ show }}',
    'aside.button': btn('[ {{ show }} ? "hide" : "show" ]', function() {
     return this.show = !this.show ? true : false
    })
   }
  }
 )

</script>

</html>
