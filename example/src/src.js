<!DOCTYPE html>
<html>

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title></title>
 <style>
  img {
   width: 100%;
   height: 300px;
   object-fit: cover;
  }
  input {
   border: 1px solid #ddd;
  }
 </style>
</head>

<body>
 <view-marker name="src"></view-marker>
 <script src="res/AutoMark.js"></script>
 <script>
  const app = new AutoMark({
   name: 'src',
   data: {
    bind: {
     path: ''
    }
   },
   frames: {
    //on-update will watch if input value was changed and it will be insert in [ ´path´ ]
    'input.on-value': ['bind.path'],
    'input.placeholder': ['`logo.png` is available ... '],
  
    // {{ src() }} is a function who return image path
    'div.img.src': '{{ src() }}',
    'div.img.xmodel': 'dx'
   },
  
   methods: {
    // note: Here, Automark control {{ src() }} It will be executed as much as necessary to update the data.
    //Here `src` is mentioned 2 time
    src() {
     return 'res/logo/' + this.bind.path
    }
   }
  })
 </script>
</body>

</html>
