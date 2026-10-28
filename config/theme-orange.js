window.CURRENT_THEME = {
  bg: "#0c0c0c",
  text: "#ffaa55",
  accent: "#ff8822",
  cardBg: "rgba(30,18,8,0.7)",
  cardBorder: "#663311",
  bgOpacity: 0.2,
  grid:45,
  init(w, h) {},
  draw(ctx, w, h) {
    ctx.fillStyle = 'rgba(12,12,12,0.08)';
    ctx.fillRect(0,0,w,h);
    ctx.strokeStyle = this.accent;
    ctx.lineWidth = 0.4;
    for(let x=0;x<w;x+=this.grid){
      ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();
    }
    for(let y=0;y<h;y+=this.grid){
      ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();
    }
  }
}
