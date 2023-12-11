let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: fuchsia;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: fuchsia;">Estudio programación web y hago contenido de tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
