/* ═══════════════════════════════════════════
   MARVEL THREADS — script.js
═══════════════════════════════════════════ */

/* ─────────────────────────────────────
   PRODUCT DATA
───────────────────────────────────── */
const PRODS = [
  {id:1,  name:"IRON MAN MARK L",     hero:"Iron Man",        cat:"avengers", emoji:"🦾", price:1299, rating:4.8, rev:124, stock:8,  tag:"hot", colors:["#111","#1a1a1a","#7f0000","#3b3b3b"], desc:"Arc Reactor graphic tee inspired by Tony Stark's legendary Mark L suit. 100% premium ring-spun cotton with reinforced neckline.", fabric:"100% ring-spun cotton, 200 GSM. Machine washable.", care:"Cold wash, inside out. Do not bleach. Tumble dry low.", tags:["Iron Man","Avengers","Tech"]},
  {id:2,  name:"SHIELD AGENT",        hero:"Captain America", cat:"avengers", emoji:"🛡️", price:1199, rating:4.7, rev:98,  stock:15, tag:"",    colors:["#111","#1a56db","#3b3b3b","#fff"],    desc:"Classic vibranium shield emblem on a heavyweight cotton tee. For those who never give up, no matter what.", fabric:"100% combed cotton, 220 GSM. Pre-shrunk.", care:"Cold wash, gentle cycle. Iron on reverse.", tags:["Cap","Shield","Patriot"]},
  {id:3,  name:"GOD OF THUNDER",      hero:"Thor",            cat:"avengers", emoji:"⚡", price:1399, rating:4.9, rev:211, stock:5,  tag:"hot", colors:["#111","#6b21a8","#1a1a1a","#c0392b"],  desc:"Mjolnir lightning storm design. Worthy or not, this tee looks legendary. Glow-in-dark print option available.", fabric:"95% cotton, 5% elastane blend, 210 GSM.", care:"Cold wash. Do not iron on print.", tags:["Thor","Asgard","Lightning"]},
  {id:4,  name:"HULK SMASH",          hero:"Hulk",            cat:"avengers", emoji:"💚", price:1099, rating:4.5, rev:76,  stock:20, tag:"new", colors:["#111","#166534","#1a1a1a","#3b3b3b"],  desc:"Don't make him angry. Oversized gamma-green graphic on premium ring-spun cotton. Extra bold fit.", fabric:"100% cotton, 200 GSM. Relaxed fit.", care:"Warm wash. Tumble dry medium.", tags:["Hulk","Banner","Gamma"]},
  {id:5,  name:"BLACK WIDOW OPS",     hero:"Black Widow",     cat:"avengers", emoji:"🕷️", price:1249, rating:4.6, rev:88,  stock:12, tag:"",    colors:["#111","#7f0000","#1a1a1a","#3b3b3b"],  desc:"Classified. Red hourglass symbol on a tactical black tee. Natasha approved. Ultra-soft touch fabric.", fabric:"100% combed cotton, 180 GSM. Slim fit.", care:"Cold wash, delicate cycle.", tags:["Natasha","SHIELD","Spy"]},
  {id:6,  name:"HAWKEYE BULLSEYE",    hero:"Hawkeye",         cat:"avengers", emoji:"🎯", price:999,  rating:4.3, rev:45,  stock:18, tag:"",    colors:["#111","#7c3aed","#1a1a1a","#3b3b3b"],  desc:"Never misses. Target crosshair design with Clint Barton's signature arrow motif. Minimal and clean.", fabric:"100% cotton, 190 GSM.", care:"Machine wash cold.", tags:["Clint","Arrow","Shield"]},
  {id:7,  name:"THANOS SNAP",         hero:"Thanos",          cat:"villain",  emoji:"🟣", price:1499, rating:4.9, rev:302, stock:3,  tag:"ltd", colors:["#111","#6d28d9","#1a1a1a","#3b3b3b"],  desc:"Perfectly balanced, as all things should be. Infinity Gauntlet with all 6 stones. Limited edition foil print.", fabric:"100% premium cotton, 220 GSM. Heavy weight.", care:"Cold wash only. Do not dry clean.", tags:["Thanos","Gauntlet","Infinity"]},
  {id:8,  name:"LOKI'S MISCHIEF",     hero:"Loki",            cat:"villain",  emoji:"🐍", price:1349, rating:4.7, rev:156, stock:9,  tag:"",    colors:["#111","#065f46","#1a1a1a","#7c3aed"],  desc:"God of Mischief horned helmet silhouette on premium tee. I am burdened with glorious purpose.", fabric:"95% cotton, 5% poly, 200 GSM.", care:"Wash inside out. No bleach.", tags:["Loki","Asgard","God"]},
  {id:9,  name:"ULTRON PROTOCOL",     hero:"Ultron",          cat:"villain",  emoji:"🤖", price:1199, rating:4.4, rev:67,  stock:14, tag:"new", colors:["#111","#374151","#1a1a1a","#3b3b3b"],  desc:"There are no strings on me. Circuit pattern Ultron face design in metallic ink. Future-forward look.", fabric:"100% cotton, 200 GSM. Regular fit.", care:"Machine wash cold, tumble dry low.", tags:["Ultron","AI","Robot"]},
  {id:10, name:"SPIDER-MAN WEB",      hero:"Spider-Man",      cat:"avengers", emoji:"🕸️", price:1399, rating:5.0, rev:489, stock:7,  tag:"hot", colors:["#7f0000","#1a56db","#111","#1a1a1a"],  desc:"With great power comes great responsibility. Classic web pattern on friendly neighborhood tee.", fabric:"100% ring-spun cotton, 200 GSM.", care:"Cold wash, gentle cycle.", tags:["Spidey","Peter","Web"]},
  {id:11, name:"DOCTOR STRANGE",      hero:"Doctor Strange",  cat:"avengers", emoji:"🔮", price:1449, rating:4.8, rev:134, stock:6,  tag:"",    colors:["#111","#d97706","#1a1a1a","#3b3b3b"],  desc:"Sorcerer Supreme Eye of Agamotto design. I went forward in time to view alternate futures.", fabric:"100% combed cotton, 210 GSM.", care:"Cold wash. Iron on low.", tags:["Strange","Magic","Sorcerer"]},
  {id:12, name:"BLACK PANTHER",       hero:"Black Panther",   cat:"avengers", emoji:"🐾", price:1349, rating:4.9, rev:278, stock:10, tag:"",    colors:["#111","#1f2937","#3b3b3b","#7c3aed"],  desc:"Wakanda Forever. Vibranium suit claw mark graphic on premium matte black tee.", fabric:"100% cotton, 220 GSM. Structured fit.", care:"Machine wash cold.", tags:["T'Challa","Wakanda","King"]},
  {id:13, name:"SCARLET WITCH",       hero:"Scarlet Witch",   cat:"villain",  emoji:"🌀", price:1399, rating:4.6, rev:193, stock:4,  tag:"ltd", colors:["#7f0000","#111","#1a1a1a","#3b3b3b"],  desc:"Chaos magic hex energy design. Wanda Maximoff's swirling crimson power in foil ink.", fabric:"100% cotton, 200 GSM.", care:"Cold wash inside out.", tags:["Wanda","Chaos","Magic"]},
  {id:14, name:"VISION MIND STONE",   hero:"Vision",          cat:"avengers", emoji:"💎", price:1249, rating:4.5, rev:82,  stock:11, tag:"",    colors:["#7c2d12","#111","#1a56db","#1a1a1a"],  desc:"Mind Stone on forehead graphic. What is grief, if not love persevering. Soft-touch ink print.", fabric:"100% ring-spun cotton, 190 GSM.", care:"Machine wash cold, gentle cycle.", tags:["Vision","Stone","Mind"]},
  {id:15, name:"FALCON WINGS",        hero:"Falcon",          cat:"avengers", emoji:"🦅", price:1199, rating:4.4, rev:61,  stock:16, tag:"new", colors:["#1e40af","#111","#1a1a1a","#3b3b3b"],  desc:"EXO-7 Falcon wing spread design. America's new winged hero, soaring to new heights.", fabric:"100% cotton, 200 GSM. Regular fit.", care:"Machine wash.", tags:["Sam","Wings","Cap"]},
  {id:16, name:"WINTER SOLDIER",      hero:"Bucky Barnes",    cat:"avengers", emoji:"🦿", price:1299, rating:4.7, rev:109, stock:8,  tag:"",    colors:["#374151","#111","#1a1a1a","#3b3b3b"],  desc:"The longest winter. Vibranium arm star graphic on dark steel tee. Tactical and sharp.", fabric:"95% cotton, 5% elastane, 200 GSM.", care:"Cold wash. Tumble dry low.", tags:["Bucky","HYDRA","Shield"]},
  {id:17, name:"MAGNETO MASTER",      hero:"Magneto",         cat:"villain",  emoji:"🧲", price:1499, rating:4.8, rev:147, stock:5,  tag:"",    colors:["#7c3aed","#c0392b","#111","#1a1a1a"],  desc:"Master of magnetism. Helmet silhouette with magnetic field lines. Mutant and proud. Embroidered crest.", fabric:"100% premium cotton, 220 GSM.", care:"Cold wash only.", tags:["Magneto","Mutant","X-Men"]},
  {id:18, name:"VENOM SYMBIOTE",      hero:"Venom",           cat:"villain",  emoji:"🖤", price:1449, rating:4.9, rev:334, stock:3,  tag:"hot", colors:["#111","#1f2937","#374151","#1a1a1a"],  desc:"We are Venom. Alien symbiote tongue graphic in glossy black-on-black print. Pure darkness.", fabric:"100% cotton, 220 GSM. Boxy fit.", care:"Machine wash inside out.", tags:["Venom","Eddie","Symbiote"]},
  {id:19, name:"GUARDIANS",           hero:"Star-Lord",       cat:"avengers", emoji:"🌌", price:1349, rating:4.6, rev:172, stock:9,  tag:"",    colors:["#7c3aed","#1a56db","#111","#1a1a1a"],  desc:"Legendary outlaw crew. Guardians of the Galaxy Vol.3 tribute tee with galaxy wash effect.", fabric:"100% cotton, 200 GSM.", care:"Cold wash. Air dry recommended.", tags:["Quill","Groot","Rocket"]},
  {id:20, name:"ANT-MAN MICRO",       hero:"Ant-Man",         cat:"avengers", emoji:"🐜", price:1099, rating:4.3, rev:54,  stock:22, tag:"",    colors:["#c0392b","#111","#1a1a1a","#3b3b3b"],  desc:"Size doesn't matter. Pym particle molecular structure on a minimal graphic tee. Subtle science.", fabric:"100% cotton, 190 GSM.", care:"Machine wash cold.", tags:["Scott","Pym","Quantum"]},
  {id:21, name:"CAPTAIN MARVEL",      hero:"Captain Marvel",  cat:"avengers", emoji:"⭐", price:1399, rating:4.8, rev:214, stock:7,  tag:"",    colors:["#c0392b","#1a56db","#111","#d97706"],  desc:"Higher, further, faster. Binary mode energy burst design on premium heavyweight tee.", fabric:"100% ring-spun cotton, 210 GSM.", care:"Cold wash, gentle.", tags:["Carol","Cosmic","Binary"]},
  {id:22, name:"DEADPOOL MAXIMUM",    hero:"Deadpool",        cat:"avengers", emoji:"🌮", price:1499, rating:5.0, rev:421, stock:6,  tag:"hot", colors:["#c0392b","#111","#1a1a1a","#3b3b3b"],  desc:"Maximum effort. Fourth wall breaking Deadpool chimichanga graphic. X-Force approved.", fabric:"100% cotton, 220 GSM. Relaxed fit.", care:"Machine wash cold.", tags:["Wade","X-Force","Merc"]},
  {id:23, name:"WOLVERINE BERSERKER", hero:"Wolverine",       cat:"avengers", emoji:"🐺", price:1449, rating:4.9, rev:367, stock:4,  tag:"ltd", colors:["#92400e","#111","#1a1a1a","#3b3b3b"],  desc:"I'm the best there is at what I do. Adamantium claw slash on raw black tee. Faded vintage wash.", fabric:"100% cotton, 220 GSM. Vintage wash.", care:"Cold wash. Tumble dry low.", tags:["Logan","X-Men","Berserker"]},
  {id:24, name:"SHANG-CHI RINGS",     hero:"Shang-Chi",       cat:"avengers", emoji:"💍", price:1299, rating:4.6, rev:93,  stock:11, tag:"new", colors:["#d97706","#111","#1a1a1a","#c0392b"],  desc:"Ten Rings ancient power design. The legend returns. Heritage meets martial arts on premium cotton.", fabric:"100% combed cotton, 200 GSM.", care:"Cold wash. Do not bleach.", tags:["Shang-Chi","Rings","Wenwu"]},
  {id:25, name:"MOON KNIGHT",         hero:"Moon Knight",     cat:"avengers", emoji:"🌙", price:1349, rating:4.7, rev:128, stock:8,  tag:"",    colors:["#f5f5f5","#111","#6b7280","#1a1a1a"],  desc:"Khonshu's avatar. Crescent dart symbol on bone-white tee. Mr. Knight edition with glow-in-dark moon.", fabric:"100% cotton, 200 GSM.", care:"Cold wash inside out.", tags:["Marc","Khonshu","Moon"]},
  {id:26, name:"HELA DEATH GODDESS",  hero:"Hela",            cat:"villain",  emoji:"💀", price:1449, rating:4.8, rev:201, stock:5,  tag:"",    colors:["#065f46","#111","#1a1a1a","#3b3b3b"],  desc:"Asgard is not a place — it's a people. Hela's skull crown design. Worship the goddess of death.", fabric:"100% premium cotton, 210 GSM.", care:"Cold wash only.", tags:["Hela","Asgard","Death"]},
  {id:27, name:"DAREDEVIL DEVIL",     hero:"Daredevil",       cat:"avengers", emoji:"😈", price:1249, rating:4.5, rev:86,  stock:13, tag:"",    colors:["#7f1d1d","#111","#1a1a1a","#3b3b3b"],  desc:"Hell's Kitchen guardian. DD double-D emblem on midnight red premium tee. Born again edition.", fabric:"100% ring-spun cotton, 200 GSM.", care:"Machine wash cold.", tags:["Matt","NYC","Devil"]},
  {id:28, name:"MS. MARVEL STAR",     hero:"Ms. Marvel",      cat:"avengers", emoji:"🌟", price:1199, rating:4.4, rev:72,  stock:17, tag:"new", colors:["#7c3aed","#c0392b","#111","#1a1a1a"],  desc:"Embiggen! Noor energy burst design. Kamala Khan's crystalline power on bright premium cotton.", fabric:"100% cotton, 190 GSM.", care:"Machine wash cold, gentle.", tags:["Kamala","Noor","Hero"]},
  {id:29, name:"KINGPIN POWER",       hero:"Kingpin",         cat:"villain",  emoji:"💼", price:1349, rating:4.3, rev:49,  stock:19, tag:"",    colors:["#f5f5f5","#1f2937","#111","#1a1a1a"],  desc:"New York's most powerful. Minimal monogram tee inspired by Wilson Fisk. Subtle menace in plain sight.", fabric:"100% cotton, 220 GSM. Structured cut.", care:"Cold wash. Iron on low.", tags:["Fisk","NYC","Crime"]},
  {id:30, name:"IRON FIST DRAGON",    hero:"Iron Fist",       cat:"avengers", emoji:"🐉", price:1299, rating:4.5, rev:68,  stock:14, tag:"",    colors:["#d97706","#111","#065f46","#1a1a1a"],  desc:"The immortal Iron Fist, protector of K'un-Lun. Dragon medallion graphic on premium black tee.", fabric:"100% combed cotton, 200 GSM.", care:"Machine wash cold.", tags:["Danny","K'un-Lun","Fist"]},
];

const SIZES = ["XS","S","M","L","XL","XXL"];

const PROMOS = {
  HERO20:   "20% off applied! 🦸",
  AVENGERS: "₹200 off Avengers orders! 🛡️",
  THANOS:   "50% off — the snap worked! 👊"
};

const REVIEWS = [
  {n:"Aryan K",  av:"A", prod:"Iron Man Mark L",     stars:5, txt:"Absolutely love this tee! Quality is insane and the print doesn't fade after washing. Wearing it to every Marvel movie night."},
  {n:"Sneha R",  av:"S", prod:"Scarlet Witch",       stars:5, txt:"The foil print is stunning! Gets so many compliments. Sized up as recommended and it fits perfectly."},
  {n:"Rahul M",  av:"R", prod:"Thanos Snap",         stars:4, txt:"Great quality. The limited edition feel is real — came in special packaging too. Would buy again."},
  {n:"Priya D",  av:"P", prod:"Spider-Man Web",      stars:5, txt:"Literally my favourite shirt now. The web pattern is detailed and the cotton is super soft. 10/10!"},
  {n:"Vikram S", av:"V", prod:"Wolverine Berserker", stars:5, txt:"The vintage wash effect looks amazing in person. Feels like a collector's piece. Claws approved!"},
  {n:"Ananya T", av:"A", prod:"Moon Knight",         stars:4, txt:"Love the glow-in-dark moon detail. Slight delay in shipping but worth the wait. Quality is premium."},
];

const QUIZ_QS = [
  {q:"What's your vibe?",        opts:["Strategic & calculated","Raw power & rage","Quick & witty","Mysterious & dark"]},
  {q:"Your ideal weapon?",       opts:["High-tech gadgets","Mjolnir / brute force","Web-shooters","Magic spells"]},
  {q:"Your fighting style?",     opts:["Tactics & technology","Pure strength","Speed & agility","Stealth & precision"]},
];

/* ─────────────────────────────────────
   STATE
───────────────────────────────────── */
let cart=[], wish=[], recent=[], quizA=[];
let modalId=null, modalSz="M", coStep=0, discount=0;
let fabOpen=false, curFilter="all", curSort="d", maxP=2000, darkMode=true, drawerTab="cart";

/* ─────────────────────────────────────
   THREE.JS HERO
───────────────────────────────────── */
(function initHero(){
  const cv = document.getElementById('heroCanvas');
  const R  = new THREE.WebGLRenderer({canvas:cv, alpha:true, antialias:true});
  R.setPixelRatio(Math.min(devicePixelRatio, 2));
  R.setSize(innerWidth, innerHeight);

  const sc  = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, .1, 100);
  cam.position.z = 5;

  // Particles
  const geo = new THREE.BufferGeometry();
  const N = 2000;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - .5) * 22;
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  sc.add(new THREE.Points(geo, new THREE.PointsMaterial({color:0xe02020, size:.035, transparent:true, opacity:.55})));

  // Rotating rings
  const mk = (size, c, op) => new THREE.Mesh(
    new THREE.TorusGeometry(size, size * 0.02, 16, 90),
    new THREE.MeshBasicMaterial({color:c, wireframe:true, transparent:true, opacity:op})
  );
  const t1 = mk(1.5, 0xe02020, .22); sc.add(t1);
  const t2 = mk(1.0, 0xf0c040, .18); sc.add(t2);

  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / innerWidth  - .5) * 2;
    my = (e.clientY / innerHeight - .5) * -2;
  });
  window.addEventListener('resize', () => {
    cam.aspect = innerWidth / innerHeight;
    cam.updateProjectionMatrix();
    R.setSize(innerWidth, innerHeight);
  });

  (function loop(){
    requestAnimationFrame(loop);
    t1.rotation.x += .004; t1.rotation.y += .003;
    t2.rotation.x -= .003; t2.rotation.z += .005;
    cam.position.x += (mx * .3 - cam.position.x) * .04;
    cam.position.y += (my * .3 - cam.position.y) * .04;
    R.render(sc, cam);
  })();
})();

/* ─────────────────────────────────────
   CURSOR
───────────────────────────────────── */
const $cur  = document.getElementById('cur');
const $curR = document.getElementById('curR');
document.addEventListener('mousemove', e => {
  $cur.style.left  = e.clientX + 'px';
  $cur.style.top   = e.clientY + 'px';
  setTimeout(() => {
    $curR.style.left = e.clientX + 'px';
    $curR.style.top  = e.clientY + 'px';
  }, 90);
});

/* ─────────────────────────────────────
   SCROLL → progress + nav + FAB
───────────────────────────────────── */
window.addEventListener('scroll', () => {
  const pct = scrollY / (document.body.scrollHeight - innerHeight) * 100;
  document.getElementById('prog').style.width = pct + '%';
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 55);
  const vis = scrollY > 350;
  document.querySelectorAll('.fab-item').forEach(e => e.classList.toggle('vis', vis));
});

/* ─────────────────────────────────────
   LOADER
───────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('gone');
    renderProducts();
    renderReviews();
  }, 1950);
});

/* ─────────────────────────────────────
   TOAST
───────────────────────────────────── */
function toast(msg, type = '') {
  const icons = {ok:'✓', info:'ℹ', '':'⚡'};
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = `<span>${icons[type] || '⚡'}</span> ${msg}`;
  document.getElementById('toasts').appendChild(t);
  setTimeout(() => {
    t.style.animation = 'tOut .25s ease forwards';
    setTimeout(() => t.remove(), 280);
  }, 2700);
}

/* ─────────────────────────────────────
   CONFETTI
───────────────────────────────────── */
function confetti() {
  const cols = ['#e02020','#f0c040','#fff','#22c55e','#7c3aed'];
  for (let i = 0; i < 55; i++) {
    const c = document.createElement('div');
    c.className = 'conf';
    c.style.cssText = `left:${Math.random()*100}vw;background:${cols[i%5]};width:${5+Math.random()*8}px;height:${5+Math.random()*8}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${1.2+Math.random()*1.8}s;animation-delay:${Math.random()*.4}s;`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* ─────────────────────────────────────
   STAR HTML
───────────────────────────────────── */
function starsHTML(r) {
  return Array.from({length:5}, (_,i) =>
    `<span class="star${i < Math.round(r) ? '' : ' off'}">★</span>`
  ).join('');
}

/* ─────────────────────────────────────
   RENDER PRODUCTS
───────────────────────────────────── */
function getList(override) {
  let list = override || PRODS.filter(p =>
    (curFilter === 'all' || p.cat === curFilter) && p.price <= maxP
  );
  if (!override) {
    if      (curSort === 'pl') list = [...list].sort((a,b) => a.price  - b.price);
    else if (curSort === 'ph') list = [...list].sort((a,b) => b.price  - a.price);
    else if (curSort === 'r')  list = [...list].sort((a,b) => b.rating - a.rating);
    else if (curSort === 'n')  list = [...list].sort((a,b) => b.id     - a.id);
  }
  return list;
}

function renderProducts(override) {
  const g = document.getElementById('pgrid');
  g.innerHTML = '';
  const list = getList(override);
  if (!list.length) {
    g.innerHTML = '<div class="grid-empty">NO PRODUCTS MATCH — TRY A DIFFERENT FILTER</div>';
    return;
  }
  list.forEach((p, i) => {
    const inW   = wish.some(w => w.id === p.id);
    const spct  = Math.min(100, Math.round(p.stock / 25 * 100));
    const scol  = p.stock <= 4 ? '#f97316' : p.stock <= 10 ? 'var(--gold)' : 'var(--green)';
    const el    = document.createElement('div');
    el.className = 'card';
    el.dataset.id = p.id;
    el.style.animationDelay = (i % 8) * .055 + 's';
    el.innerHTML = `
      <div class="card-badges">
        <span class="badge ${p.cat === 'avengers' ? 'av' : p.cat === 'villain' ? 'vi' : 'cl'}">${p.cat.toUpperCase()}</span>
        ${p.tag === 'hot' ? '<span class="badge hot">🔥 HOT</span>' : p.tag === 'new' ? '<span class="badge new">NEW</span>' : p.tag === 'ltd' ? '<span class="badge ltd">LIMITED</span>' : ''}
      </div>
      <button class="card-wish${inW ? ' on' : ''}" data-id="${p.id}">${inW ? '♥' : '♡'}</button>
      <div class="card-img">
        <div class="card-emoji" style="background:${p.colors[0]}">${p.emoji}</div>
        <div class="card-shine"></div>
        <div class="card-colors">
          ${p.colors.map((c,ci) => `<div class="cdot${ci===0?' on':''}" style="background:${c}" data-color="${c}" data-pid="${p.id}"></div>`).join('')}
        </div>
        <div class="stock-row">
          <div class="stock-lbl" style="color:${scol}">${p.stock<=4?`ONLY ${p.stock} LEFT`:p.stock<=10?`${p.stock} IN STOCK`:'IN STOCK'}</div>
          <div class="stock-track"><div class="stock-fill" style="width:${spct}%;background:${scol}"></div></div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-sub">${p.hero}</div>
        <div class="card-name">${p.name}</div>
        <div class="stars">${starsHTML(p.rating)}<span class="rc" style="margin-left:4px">(${p.rev})</span></div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-sizes">${['S','M','L','XL'].map(s=>`<span class="csz">${s}</span>`).join('')}</div>
        <div class="card-foot">
          <div class="card-price">₹${p.price.toLocaleString()} <span>INR</span></div>
          <div class="card-btns">
            <button class="btn view" data-view="${p.id}">VIEW</button>
            <button class="btn add" id="qadd${p.id}" data-qadd="${p.id}">ADD +</button>
          </div>
        </div>
      </div>`;

    // 3D tilt
    el.addEventListener('mousemove', e => {
      const r  = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top)  / r.height - .5) * -15;
      const ry = ((e.clientX - r.left) / r.width  - .5) * 15;
      el.style.transform = `perspective(880px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
      el.style.transition = 'transform .07s';
      const sh = el.querySelector('.card-shine');
      sh.style.setProperty('--sx', ((e.clientX - r.left) / r.width  * 100) + '%');
      sh.style.setProperty('--sy', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform  = 'perspective(880px) rotateX(0) rotateY(0) scale(1)';
      el.style.transition = 'transform .48s cubic-bezier(.34,1.56,.64,1)';
    });

    g.appendChild(el);
  });
  updateSuggest();
}

/* delegated click handler for the grid */
document.getElementById('pgrid').addEventListener('click', e => {
  const wb  = e.target.closest('.card-wish');
  const vb  = e.target.closest('[data-view]');
  const ab  = e.target.closest('[data-qadd]');
  const dot = e.target.closest('.cdot');

  if (wb)  { e.stopPropagation(); toggleWish(+wb.dataset.id); return; }
  if (vb)  { e.stopPropagation(); openModal(+vb.dataset.view); return; }
  if (ab)  { e.stopPropagation(); quickAdd(+ab.dataset.qadd); return; }
  if (dot) {
    e.stopPropagation();
    const card = dot.closest('.card');
    card.querySelector('.card-emoji').style.background = dot.dataset.color;
    card.querySelectorAll('.cdot').forEach(d => d.classList.remove('on'));
    dot.classList.add('on');
    return;
  }
  const card = e.target.closest('.card');
  if (card && !e.target.closest('button') && !e.target.closest('.cdot')) openModal(+card.dataset.id);
});

/* ─────────────────────────────────────
   FILTER / SORT / PRICE
───────────────────────────────────── */
document.querySelectorAll('.fb').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.fb, .nav-link').forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  const match = document.querySelector(`.nav-link[data-f="${b.dataset.f}"]`);
  if (match) match.classList.add('on');
  curFilter = b.dataset.f;
  renderProducts();
}));

document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.nav-link, .fb').forEach(x => x.classList.remove('on'));
  l.classList.add('on');
  const fb = document.querySelector(`.fb[data-f="${l.dataset.f}"]`);
  if (fb) fb.classList.add('on');
  curFilter = l.dataset.f;
  renderProducts();
  document.getElementById('shop').scrollIntoView({behavior:'smooth'});
}));

document.getElementById('sortSel').addEventListener('change', e => {
  curSort = e.target.value;
  renderProducts();
});

const prR = document.getElementById('priceR');
const prV = document.getElementById('priceVal');
prR.addEventListener('input', () => {
  maxP = +prR.value;
  prV.textContent = '₹' + maxP;
  renderProducts();
});

/* ─────────────────────────────────────
   LIVE SEARCH (navbar)
───────────────────────────────────── */
const $ns  = document.getElementById('nSearch');
const $sd  = document.getElementById('sDrop');

$ns.addEventListener('input', () => {
  const q = $ns.value.trim().toLowerCase();
  if (!q) { $sd.style.display = 'none'; return; }
  const res = PRODS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.hero.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  ).slice(0, 5);
  if (!res.length) { $sd.style.display = 'none'; return; }
  $sd.style.display = 'block';
  $sd.innerHTML = res.map(p => `
    <div class="sd-item" data-id="${p.id}">
      <span class="sd-emoji">${p.emoji}</span>
      <span class="sd-name">${p.name}</span>
      <span class="sd-price">₹${p.price.toLocaleString()}</span>
    </div>`).join('');
});

$sd.addEventListener('click', e => {
  const item = e.target.closest('.sd-item');
  if (item) { $sd.style.display='none'; $ns.value=''; openModal(+item.dataset.id); }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-search')) $sd.style.display = 'none';
});

/* ─────────────────────────────────────
   AI SMART SEARCH
───────────────────────────────────── */
document.getElementById('aiGo').addEventListener('click', doAISearch);
document.getElementById('aiIn').addEventListener('keydown', e => { if(e.key==='Enter') doAISearch(); });

async function doAISearch() {
  const q   = document.getElementById('aiIn').value.trim();
  const msg = document.getElementById('aiMsg');
  if (!q) return;
  msg.innerHTML = '<span style="color:var(--red)">⚡ Searching with AI…</span>';

  try {
    const plist = PRODS.map(p => `id:${p.id} name:"${p.name}" cat:${p.cat} price:${p.price} rating:${p.rating}`).join('\n');
    const res   = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: 'You are a Marvel merchandise store AI. Given a query and product list, return: REPLY: [1 sentence response] | IDS: [comma-separated matching product IDs]. Return only products that truly match.',
        messages: [{role:'user', content:`Query: "${q}"\nProducts:\n${plist}`}]
      })
    });
    const data  = await res.json();
    const txt   = data.content?.[0]?.text || '';
    const reply = ((txt.match(/REPLY:\s*([^|]+)/) || [])[1] || '').trim();
    const rawIds= (txt.match(/IDS:\s*(.+)/)        || [])[1] || '';
    const ids   = rawIds.split(',').map(s => parseInt(s.trim())).filter(Boolean);
    const found = PRODS.filter(p => ids.includes(p.id));
    msg.innerHTML = `<span style="color:var(--gold)">⚡ AI:</span> ${reply}`;
    if (found.length) { renderProducts(found); document.getElementById('shop').scrollIntoView({behavior:'smooth'}); }
  } catch {
    // keyword fallback
    const q2   = q.toLowerCase();
    const priceMatch = q2.match(/under\s*[₹]?\s*(\d+)/);
    let res = PRODS.filter(p =>
      p.name.toLowerCase().includes(q2) ||
      p.hero.toLowerCase().includes(q2) ||
      p.cat.toLowerCase().includes(q2)  ||
      p.tags.some(t => t.toLowerCase().includes(q2))
    );
    if (priceMatch) res = res.filter(p => p.price <= parseInt(priceMatch[1]));
    if (!res.length) res = PRODS;
    msg.innerHTML = `<span style="color:var(--gold)">⚡</span> Showing ${res.length} result${res.length!==1?'s':''} for your search`;
    renderProducts(res);
    document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  }
}

/* ─────────────────────────────────────
   RECENTLY VIEWED
───────────────────────────────────── */
function addRecent(id) {
  recent = recent.filter(x => x !== id);
  recent.unshift(id);
  if (recent.length > 4) recent.length = 4;
  const sec  = document.getElementById('recentSec');
  sec.style.display = 'block';
  document.getElementById('recentRow').innerHTML = recent.map(rid => {
    const p = PRODS.find(x => x.id === rid);
    return `<div class="mini-card" data-view="${p.id}">
      <span class="mc-emoji">${p.emoji}</span>
      <div class="mc-name">${p.name}</div>
      <div class="mc-price">₹${p.price.toLocaleString()}</div>
    </div>`;
  }).join('');
}
document.getElementById('recentRow').addEventListener('click', e => {
  const c = e.target.closest('[data-view]');
  if (c) openModal(+c.dataset.view);
});

/* ─────────────────────────────────────
   SUGGESTIONS
───────────────────────────────────── */
function updateSuggest() {
  if (!cart.length) { document.getElementById('suggestSec').style.display = 'none'; return; }
  const cats = cart.map(i => i.cat);
  const sug  = PRODS.filter(p => cats.includes(p.cat) && !cart.some(c => c.id === p.id)).slice(0, 6);
  if (!sug.length) { document.getElementById('suggestSec').style.display = 'none'; return; }
  document.getElementById('suggestSec').style.display = 'block';
  document.getElementById('suggestRow').innerHTML = sug.map(p =>
    `<div class="mini-card" data-view="${p.id}">
      <span class="mc-emoji">${p.emoji}</span>
      <div class="mc-name">${p.name}</div>
      <div class="mc-price">₹${p.price.toLocaleString()}</div>
    </div>`
  ).join('');
}
document.getElementById('suggestRow').addEventListener('click', e => {
  const c = e.target.closest('[data-view]');
  if (c) openModal(+c.dataset.view);
});

/* ─────────────────────────────────────
   CART
───────────────────────────────────── */
function openCart()  { document.getElementById('cartDrawer').classList.add('open');    document.getElementById('overlay').classList.add('on'); }
function closeCart() { document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('overlay').classList.remove('on'); }

document.getElementById('cartIB').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('overlay').addEventListener('click', () => {
  closeCart(); closePM(); closeSG(); closeCO(); closeQZ();
});

function quickAdd(id) {
  const p   = PRODS.find(x => x.id === id);
  const btn = document.getElementById('qadd' + id);
  addToCart(p, 'M');
  if (btn) {
    btn.textContent = '✓ DONE';
    btn.classList.add('done');
    setTimeout(() => { btn.textContent = 'ADD +'; btn.classList.remove('done'); }, 1500);
  }
}

function addToCart(prod, size) {
  const ex = cart.find(i => i.id === prod.id && i.size === size);
  if (ex) ex.qty++;
  else cart.push({...prod, size, qty:1});
  updateCart();
  toast(prod.name + ' added to cart! 🛒', 'ok');
  confetti();
  updateSuggest();
}

function removeItem(id, sz)    { cart = cart.filter(i => !(i.id===id && i.size===sz)); updateCart(); updateSuggest(); }
function changeQty(id, sz, d) {
  const it = cart.find(i => i.id===id && i.size===sz);
  if (it) { it.qty += d; if (it.qty <= 0) removeItem(id, sz); else updateCart(); }
}

function updateCart() {
  const n     = cart.reduce((s,i) => s + i.qty, 0);
  document.getElementById('cDot').textContent     = n;
  document.getElementById('cartTabN').textContent = n;

  const items = document.getElementById('cartItems');
  const foot  = document.getElementById('drawerFoot');
  const empty = document.getElementById('cartEmpty');

  if (!cart.length) { empty.style.display='block'; items.innerHTML=''; foot.style.display='none'; return; }
  empty.style.display = 'none';
  foot.style.display  = 'block';

  const base  = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const total = Math.round(base * (1 - discount/100));
  document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString();

  items.innerHTML = cart.map(it => `
    <div class="ci">
      <div class="ci-emo">${it.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${it.name}</div>
        <div class="ci-meta">SIZE: ${it.size}</div>
        <div class="ci-p">₹${Math.round(it.price * it.qty * (1 - discount/100)).toLocaleString()}</div>
        <div class="ci-qty">
          <button class="qb" onclick="changeQty(${it.id},'${it.size}',-1)">−</button>
          <span class="qn">${it.qty}</span>
          <button class="qb" onclick="changeQty(${it.id},'${it.size}',1)">+</button>
        </div>
      </div>
      <button class="ci-rm" onclick="removeItem(${it.id},'${it.size}')">✕</button>
    </div>`).join('');
}

/* cart tabs */
document.querySelectorAll('.dtab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.dtab').forEach(x => x.classList.remove('on'));
  t.classList.add('on');
  drawerTab = t.dataset.tab;
  const isCart = drawerTab === 'cart';
  document.getElementById('cartItems').style.display  = isCart ? 'block' : 'none';
  document.getElementById('cartEmpty').style.display  = isCart && !cart.length ? 'block' : 'none';
  document.getElementById('wishItems').style.display  = isCart ? 'none' : 'block';
  document.getElementById('drawerFoot').style.display = isCart && cart.length ? 'block' : 'none';
}));

/* promo */
document.getElementById('promoBtn').addEventListener('click', () => {
  const code = document.getElementById('promoIn').value.trim().toUpperCase();
  const el   = document.getElementById('promoMsg');
  if (PROMOS[code]) {
    discount = code==='THANOS' ? 50 : code==='HERO20' ? 20 : 0;
    el.style.color   = 'var(--green)';
    el.textContent   = PROMOS[code];
    updateCart();
    toast('Promo applied! 🎉', 'info');
  } else {
    el.style.color = 'var(--red)';
    el.textContent = 'Invalid code. Try HERO20, AVENGERS, or THANOS';
  }
});

/* ─────────────────────────────────────
   WISHLIST
───────────────────────────────────── */
document.getElementById('wishIB').addEventListener('click', () => {
  openCart();
  document.querySelector('.dtab[data-tab="wish"]').click();
});

function toggleWish(id) {
  const p   = PRODS.find(x => x.id === id);
  const idx = wish.findIndex(w => w.id === id);
  if (idx >= 0) { wish.splice(idx,1); toast('Removed from wishlist', 'info'); }
  else          { wish.push(p);       toast('Saved to wishlist! ♥', 'info');  }
  updateWish();
  const wb = document.querySelector(`.card-wish[data-id="${id}"]`);
  if (wb) { wb.classList.toggle('on', wish.some(w=>w.id===id)); wb.textContent = wish.some(w=>w.id===id)?'♥':'♡'; }
}

function updateWish() {
  document.getElementById('wDot').textContent     = wish.length;
  document.getElementById('wishTabN').textContent = wish.length;
  const el    = document.getElementById('wishList');
  const empty = document.getElementById('wishEmpty');
  if (!wish.length) { empty.style.display='block'; el.innerHTML=''; return; }
  empty.style.display = 'none';
  el.innerHTML = wish.map(p => `
    <div class="wi">
      <div class="wi-emo">${p.emoji}</div>
      <div class="wi-body">
        <div class="wi-name">${p.name}</div>
        <div class="wi-price">₹${p.price.toLocaleString()}</div>
        <button class="wi-add" onclick="addToCart(PRODS.find(x=>x.id===${p.id}),'M');document.querySelector('.dtab[data-tab=\\'cart\\']').click()">ADD TO CART</button>
      </div>
      <button class="ci-rm" onclick="toggleWish(${p.id})">✕</button>
    </div>`).join('');
}

/* ─────────────────────────────────────
   PRODUCT MODAL
───────────────────────────────────── */
function openModal(id) {
  const p    = PRODS.find(x => x.id === id);
  modalId    = id;
  modalSz    = 'M';
  addRecent(id);

  const inW  = wish.some(w => w.id === id);
  const dd   = new Date(); dd.setDate(dd.getDate() + 5);
  const dstr = dd.toLocaleDateString('en-IN', {day:'numeric', month:'short'});

  document.getElementById('pmGrid').innerHTML = `
    <div class="pm-left" id="pmLeft">
      <div class="pm-big" id="pmBig">${p.emoji}</div>
      <div class="pm-toggle">
        <button class="pt-btn on"  onclick="this.classList.add('on');this.nextElementSibling.classList.remove('on');document.getElementById('pmBig').style.transform=''">FRONT</button>
        <button class="pt-btn"     onclick="this.classList.add('on');this.previousElementSibling.classList.remove('on');document.getElementById('pmBig').style.transform='scaleX(-1)'">BACK</button>
      </div>
      <div class="pm-swatches">
        ${p.colors.map((c,i) => `<div class="swatch${i===0?' on':''}" style="background:${c}" onclick="document.getElementById('pmLeft').style.background='${c}22';document.querySelectorAll('.swatch').forEach(s=>s.classList.remove('on'));this.classList.add('on')"></div>`).join('')}
      </div>
    </div>
    <div class="pm-right">
      <div class="pm-cat">${p.cat.toUpperCase()} · MCU OFFICIAL</div>
      <div class="pm-name">${p.name}</div>
      <div class="pm-hero">INSPIRED BY ${p.hero.toUpperCase()}</div>
      <div class="pm-stars">${starsHTML(p.rating)}<span class="rc" style="margin-left:5px">${p.rating} (${p.rev} reviews)</span></div>
      <div class="pm-tabs">
        <button class="pmtab on" onclick="switchPMTab(this,'desc')">DESCRIPTION</button>
        <button class="pmtab"    onclick="switchPMTab(this,'fab')">FABRIC</button>
        <button class="pmtab"    onclick="switchPMTab(this,'care')">CARE</button>
      </div>
      <div class="pm-panel on" id="pmt-desc">${p.desc}</div>
      <div class="pm-panel"    id="pmt-fab">
        <table>
          <tr><td>Material</td><td>${p.fabric}</td></tr>
          <tr><td>Fit</td><td>Regular / Classic cut</td></tr>
          <tr><td>Neck</td><td>Crew neck</td></tr>
          <tr><td>Sleeve</td><td>Short sleeve</td></tr>
          <tr><td>Origin</td><td>Made in India</td></tr>
        </table>
      </div>
      <div class="pm-panel" id="pmt-care">${p.care}</div>
      <div class="pm-price">₹${p.price.toLocaleString()}</div>
      <div class="pm-delivery">🚚 Estimated delivery by <span>${dstr}</span></div>
      ${p.stock <= 4 ? `<div class="pm-stock">⚠️ Only ${p.stock} left in stock — order soon!</div>` : ''}
      <div class="pm-sz-lbl">SELECT SIZE <a href="#" onclick="openSG();return false">SIZE GUIDE →</a></div>
      <div class="pm-sizes">
        ${SIZES.map(s => `<button class="msz${s==='M'?' on':''}" onclick="document.querySelectorAll('.msz').forEach(b=>b.classList.remove('on'));this.classList.add('on');modalSz='${s}'">${s}</button>`).join('')}
      </div>
      <div class="pm-btns">
        <button class="pm-add" onclick="addToCart(PRODS.find(x=>x.id===${id}),modalSz);closePM()">ADD TO CART →</button>
        <button class="pm-wsh${inW?' on':''}" onclick="toggleWish(${id});this.classList.toggle('on')">♡</button>
      </div>
      <div class="pm-tags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
    </div>`;

  document.getElementById('pmodal').classList.add('open');
  document.getElementById('overlay').classList.add('on');
}

function switchPMTab(btn, key) {
  document.querySelectorAll('.pmtab').forEach(b => b.classList.remove('on'));
  document.querySelectorAll('.pm-panel').forEach(p => p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('pmt-' + key).classList.add('on');
}

function closePM() {
  document.getElementById('pmodal').classList.remove('open');
  document.getElementById('overlay').classList.remove('on');
}
document.getElementById('pmodalX').addEventListener('click', closePM);

/* ─────────────────────────────────────
   SIZE GUIDE
───────────────────────────────────── */
function openSG() {
  document.getElementById('sgModal').classList.add('open');
  document.getElementById('overlay').classList.add('on');
}
function closeSG() {
  document.getElementById('sgModal').classList.remove('open');
  if (!document.getElementById('pmodal').classList.contains('open'))
    document.getElementById('overlay').classList.remove('on');
}

/* ─────────────────────────────────────
   CHECKOUT
───────────────────────────────────── */
document.getElementById('checkoutBtn').addEventListener('click', () => { closeCart(); openCO(); });

function openCO() {
  coStep = 0;
  goStep(0);
  document.getElementById('coModal').classList.add('open');
  document.getElementById('overlay').classList.add('on');
}
function closeCO() {
  document.getElementById('coModal').classList.remove('open');
  document.getElementById('overlay').classList.remove('on');
}

function goStep(s) {
  coStep = s;
  for (let i = 0; i <= 4; i++) {
    const p = document.getElementById('cop' + i);
    if (p) p.classList.toggle('on', i === s);
  }
  document.querySelectorAll('.cstep').forEach((el,i) => {
    el.classList.toggle('on',   i === s);
    el.classList.toggle('done', i < s);
  });
  if (s === 3) {
    const base = cart.reduce((sum,i) => sum + i.price * i.qty, 0);
    document.getElementById('osTotal').textContent = '₹' + Math.round(base * (1 - discount/100)).toLocaleString();
    document.getElementById('osList').innerHTML = cart.map(i =>
      `<div class="os-item">
        <span class="os-emo">${i.emoji}</span>
        <span class="os-name">${i.name} (${i.size}) ×${i.qty}</span>
        <span class="os-p">₹${Math.round(i.price * i.qty * (1 - discount/100)).toLocaleString()}</span>
      </div>`
    ).join('');
  }
}

function selPay(el) {
  document.querySelectorAll('.pay-opt').forEach(p => p.classList.remove('on'));
  el.classList.add('on');
}

function placeOrder() {
  const id = '#MCU-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('sucId').textContent = id;
  cart = []; discount = 0;
  updateCart();
  goStep(4);
  confetti();
  toast('Order placed! 🎉', 'ok');
}

/* ─────────────────────────────────────
   AI HERO QUIZ
───────────────────────────────────── */
let qzStep = 0;

function openQZ() {
  qzStep = 0; quizA = [];
  renderQZ();
  document.getElementById('qzModal').classList.add('open');
  document.getElementById('overlay').classList.add('on');
}
function closeQZ() {
  document.getElementById('qzModal').classList.remove('open');
  document.getElementById('overlay').classList.remove('on');
}

function renderQZ() {
  const body = document.getElementById('qzBody');
  if (qzStep >= QUIZ_QS.length) {
    body.innerHTML = `<div class="qz-spin"><div class="spinner"></div><p>CONSULTING THE MULTIVERSE…</p></div>`;
    runQzAI();
    return;
  }
  const q = QUIZ_QS[qzStep];
  body.innerHTML = `
    <div class="qz-q">Q${qzStep+1} of 3 — ${q.q}</div>
    <div class="qz-opts">
      ${q.opts.map(o => `<button class="qz-opt" onclick="pickQZ(this,'${o.replace(/'/g,"\\'")}')">${o}</button>`).join('')}
    </div>`;
}

function pickQZ(btn, opt) {
  document.querySelectorAll('.qz-opt').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  quizA.push(opt);
  setTimeout(() => { qzStep++; renderQZ(); }, 380);
}

async function runQzAI() {
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 280,
        system: 'You are a fun Marvel personality quiz AI. Based on answers, pick the best matching Marvel hero and a shirt. Format strictly: HERO: [hero name] | SHIRT_ID: [product id number] | REASON: [2 sentence explanation]',
        messages: [{role:'user', content:`Quiz answers: ${quizA.join(', ')}. Products: ${PRODS.map(p=>`id:${p.id} ${p.name} (${p.hero})`).join(', ')}`}]
      })
    });
    const data   = await res.json();
    const txt    = data.content?.[0]?.text || '';
    const hero   = ((txt.match(/HERO:\s*([^|]+)/)     || [])[1] || 'Iron Man').trim();
    const sid    = parseInt((txt.match(/SHIRT_ID:\s*(\d+)/) || [])[1]) || 1;
    const reason = ((txt.match(/REASON:\s*(.+)/s)     || [])[1] || 'You embody this hero perfectly!').trim().substring(0, 180);
    const prod   = PRODS.find(p => p.id === sid) || PRODS[Math.floor(Math.random() * PRODS.length)];
    showQzResult(hero, reason, prod);
  } catch {
    const prod = PRODS[Math.floor(Math.random() * PRODS.length)];
    showQzResult(prod.hero, 'You embody the spirit of this hero perfectly! This shirt was made for you.', prod);
  }
}

function showQzResult(hero, reason, prod) {
  document.getElementById('qzBody').innerHTML = `
    <div class="qz-result">
      <span class="qzr-emoji">${prod.emoji}</span>
      <div class="qzr-title">YOU ARE ${hero.toUpperCase()}!</div>
      <p class="qzr-text">${reason}</p>
      <div class="qzr-shirt">YOUR PERFECT SHIRT</div>
      <div class="qzr-name">${prod.name}</div>
      <div class="qzr-price">₹${prod.price.toLocaleString()}</div>
      <div class="qzr-btns">
        <button class="qzr-view"  onclick="closeQZ();openModal(${prod.id})">VIEW SHIRT →</button>
        <button class="qzr-retry" onclick="qzStep=0;quizA=[];renderQZ()">RETRY</button>
      </div>
    </div>`;
}

/* ─────────────────────────────────────
   REVIEWS
───────────────────────────────────── */
function renderReviews() {
  document.getElementById('rvGrid').innerHTML = REVIEWS.map(r => `
    <div class="rv-card">
      <div class="rv-head">
        <div class="rv-av">${r.av}</div>
        <div>
          <div class="rv-name">${r.n}</div>
          <div class="rv-prod">${r.prod}</div>
        </div>
      </div>
      <div class="stars" style="margin-bottom:0">${starsHTML(r.stars)}</div>
      <p class="rv-text">${r.txt}</p>
    </div>`).join('');
}

/* ─────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────── */
document.getElementById('themeBtn').addEventListener('click', () => {
  darkMode = !darkMode;
  const r = document.documentElement.style;
  r.setProperty('--bg',      darkMode ? '#050505' : '#f0f0f0');
  r.setProperty('--surface', darkMode ? '#0f0f0f' : '#ffffff');
  r.setProperty('--card',    darkMode ? '#141414' : '#fafafa');
  r.setProperty('--border',  darkMode ? '#1e1e1e' : '#e0e0e0');
  r.setProperty('--border2', darkMode ? '#2a2a2a' : '#d0d0d0');
  r.setProperty('--text',    darkMode ? '#f2f2f2' : '#111111');
  r.setProperty('--text2',   darkMode ? '#999'    : '#555');
  r.setProperty('--text3',   darkMode ? '#555'    : '#999');
  document.getElementById('themeBtn').textContent = darkMode ? '🌙' : '☀️';
  toast(darkMode ? 'Dark mode on 🌙' : 'Light mode on ☀️', 'info');
});

/* ─────────────────────────────────────
   FAB
───────────────────────────────────── */
function toggleFab() {
  fabOpen = !fabOpen;
  const btn = document.getElementById('fabMain');
  btn.innerHTML   = fabOpen ? '✕' : '＋';
  btn.style.background = fabOpen ? 'var(--border2)' : 'var(--red)';
}
