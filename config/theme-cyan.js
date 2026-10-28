window.CURRENT_THEME = {
  bg: "#041014",
  text: "#4ee0d0",
  accent: "#2ce2d2",
  cardBg: "rgba(6,30,34,0.7)",
  cardBorder: "#0f554d",
  bgOpacity: 0.2,
  dots:[],
  init(w, h) {
    this.dots = [];
    for(let i=0;i<80;i++){
      this.dots.push({
        x:Math.random()*w,
        y:Math.random()*h,
        vx:(Math.random()-0.5)*0.6,
        vy:(Math.random()-0.5)*0.6
      })
    }
  },
  draw(ctx, w, h) {
    ctx.fillStyle = 'rgba(4,16,20,0.07)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = this.accent;
    this.dots.forEach(d=>{
      ctx.beginPath();ctx.arc(d.x,d.y,1.2,0,Math.PI*2);ctx.fill();
      d.x += d.vx;
      d.y += d.vy;
      if(d.x<0||d.x>w) d.vx *= -1;
      if(d.y<0||d.y>h) d.vy *= -1;
    })
  }
}
