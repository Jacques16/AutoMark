<!DOCTYPE html>
<html>

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Dynamic value</title>
</head>

<body>
 <view-marker name="dynamic-value"></view-marker>
<script src="res/AutoMark.js"></script>
<script>
 const app = new AutoMark({
  name: "dynamic-value",
  data: {
   header: {
    h1: "AutoMark.js",
   },
   text: {
    p: "Happiness makes up in height what it lacks in length.",
    btn: {
     change: "change the title"
    }
   }
  },
  frames: {
   h1: "{{ header.h1 }}",
   p: "{{ text.p }}",
   button: {
    textContent: "{{ text.btn.change }}",
    onclick() {
     //!To change h1 value, please, do not use this syntax:
     //this.frames.h1 = this.text.p
     /**
      * because h1 content is a dynamic Value {{ header.h1 }} so you must update header.h1 to change it. 
      *
      * **/
     //Use this instead
     this.header.h1 = this.text.p
    }
   }
  }
 })
</script>
</body>

</html>
