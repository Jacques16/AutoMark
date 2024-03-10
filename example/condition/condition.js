//Use of [ condition ] with `[   ]`and {{ dynamic value }} with `{{  }}`
new AutoMark({
 el: '#app',
 data: {
  a: true,
  e: document.getElementsByTagName('body')[0],
  isOn: "/ignition.php",
  isOff: "/extinction.php",
 },
 frames: {
  'h1.innerHTML': 'The light is <a href=[ {{ a }} ? "{{ isOn }}" : "{{ isOff }}" ]>[ {{ a }} ? "on" : "off" ]</a>',
  
  'button': '[ !{{ a }} ? "Turn on" : "Turn off" ]',
  
  'button.className': '[ !{{ a }} ? "light" : "dark" ]',
  
  'button.onclick': '{{ verif() }}'
 },
 methods: {
  verif() {
   return this.a = this.a ? this.off() : this.on()
  },
  style(m, g) {
   return 'background-color:' + m + ';color:' + (g ? g : '#000')
  },
  off() {
   this.e.style = this.style("#000", "#FFF")
   return false
  },
  on() {
   this.e.style = this.style("#FFF")
   return true
  }
 }
})
