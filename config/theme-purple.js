window.CURRENT_THEME = {
  bg: "#070614",
  text: "#b8c8f0",
  accent: "#72aaff",
  cardBg: "rgba(15,20,40,0.65)",
  cardBorder: "#253366",
  bgOpacity: 0.18,
  stars: [],
  init(w, h) {
    this.stars = [];
    for(let i=0;i<120;i++){
      this.stars.push({
        x:Math.random()*w,
        y:Math.random()*h,
        r:Math.random()*1.2+0.2,
        speed:Math.random()*0.3+0.1
      })
    }
  },
  draw(ctx, w, h) {
    ctx.fillStyle = 'rgba(7,6,20,0.12)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = this.accent;
    this.stars.forEach(s=>{
      ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
      s.y += s.speed;
      if(s.y>h){ s.y=0; s.x=Math.random()*w; }
    })
  }
}
