window.CURRENT_THEME = {
  bg: "#000",
  text: "#39ff14",
  accent: "#39ff14",
  cardBg: "rgba(0,22,0,0.72)",
  cardBorder: "#287a18",
  bgOpacity: 0.25,
  drops: [],
  chars: "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
  fontSize:16,
  init(w, h) {
    this.drops = Array(Math.floor(w / this.fontSize)).fill(0);
  },
  draw(ctx, w, h) {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = this.accent;
    ctx.font = this.fontSize + 'px Consolas';
    for(let i=0;i<this.drops.length;i++){
      const c = this.chars[Math.floor(Math.random()*this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;
      ctx.fillText(c,x,y);
      if(y > h && Math.random()>0.97) this.drops[i] = 0;
      this.drops[i]++;
    }
  }
}
