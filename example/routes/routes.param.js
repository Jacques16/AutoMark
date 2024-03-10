<!DOCTYPE html>
<html>

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Tuto - route 1</title>
</head>

<body>
<view-marker name="param"></view-marker>
</body>

<script src="res/page.js"></script>
<script src="res/AutoMark.js"></script>
<script>

var Profile = {
 divProfile: {
 h1: 'User info',
 p: {
  0: 'user: {{ $page.params.pseudo }}',
  1: 'age: {{ $page.params.age }} years old',
  2: 'country flag : {{ $page.params.country }}'
}
}
}
var Home = {
 divHome: {
 h1: 'Home page',
 p: 'Welcome {{ $page.params.pseudo }}!',
 }
}

function to (q) {
 return {
  textContent: q,
  onclick: q
 }
}

 new AutoMark({
  name: 'param',
  page: {
   
   routes: [
 { path: '/profile/:pseudo/:age/:country', temp: Profile, name: 'profile-page' },
 { path: '/home/:pseudo', temp: Home, name: 'home-page' }
    ],
    
    view: 'aside.divRouter'
  },
  data: {
   user: {
    pseudo: 'Lyard',
    age: '21',
    country: '🏴‍☠️'
   }
  },
  frames: {
   aside:{
    divRouter: ''
   },
   button: {
    0: to('profile'),
    1: to('home')
   }
  },
  methods: {
   home() {
    page('/home/' + this.user.pseudo)
   },
   profile () {
    page('/profile/' + this.user.pseudo + '/' + this.user.age + '/' + this.user.country);
   },
   onmounted () {
    page('/home/' + this.user.pseudo);
   }
  }
 })
</script>
</html>
