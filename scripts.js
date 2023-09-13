document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.parallax-container');
  const layers = document.querySelectorAll('.parallax-layer');

  container.addEventListener('mousemove', (e) => {
    const xOffset = (e.clientX / container.offsetWidth - 0.5) * -40; // X-Position des Mauszeigers im Container (-50 bis 50)
    const yOffset = (e.clientY / container.offsetHeight - 0.5) * -40; // Y-Position des Mauszeigers im Container (-50 bis 50)
    
    layers.forEach((layer, index) => {
      const speed = index + 1; // Geschwindigkeit des Parallax-Effekts für jede Ebene
      let xShift = 0;
      let yShift = 0;
    
      if (index === 0) {
        // Mond geht gegen die Mausbewegung
        xShift = -xOffset * speed;
        yShift = -yOffset * speed;
      } else if (index === 1) {
        // Berg geht zum Mauszeiger
        xShift = xOffset * speed;
        yShift = yOffset * speed;
      } else if (index === 2) {
        // Fügen Sie hier Ihre spezifischen Anweisungen für layer3 hinzu
        xShift = xOffset * speed / 2;
        yShift = yOffset * speed / 2;
      } else if (index === 3) {
        // Fügen Sie hier Ihre spezifischen Anweisungen für layer3 hinzu
        xShift = xOffset * speed / 2;
        yShift = yOffset * speed / 2;
      } 

      layer.style.transform = `translate(${xShift}px, ${yShift}px)`;
    });
  });
});
