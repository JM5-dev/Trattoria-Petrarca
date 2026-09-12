const dishes = [
  { name:'Antipasto', cat:'Antipasti', image:'assets/img/antipasto.PNG', copy:'Salumi emiliani, formaggi stagionati, noci e sottoli: la tavola comincia sempre da qui.', ingredients:'prosciutto · salame · coppa · Parmigiano · noci · olive' },
  { name:'Gnocco fritto', cat:'Antipasti', image:'assets/img/gnoccofritto.PNG', copy:'Crescentine dorate, leggere e croccanti. Da aprire con le mani e riempire senza misura.', ingredients:'farina · strutto · prosciutto crudo · squacquerone' },
  { name:'Tris di tortelli', cat:'Primi', image:'assets/img/tortelli.PNG', copy:'Tortelli di erbette, tortelli di zucca e tortelli di patate, serviti con burro fuso e Parmigiano.', ingredients:'sfoglia all’uovo · erbette · zucca · patate · burro · Parmigiano' },
  { name:'Capellacci', cat:'Primi', image:'assets/img/capellacci.PNG', copy:'Pasta fresca ripiena, tirata a mano e condita con il gusto pieno della tradizione emiliana.', ingredients:'sfoglia all’uovo · ripieno · burro · Parmigiano' },
  { name:'Tagliatelle ai funghi', cat:'Primi', copy:'Sfoglia ruvida e funghi profumati, per un primo piatto boschivo e avvolgente.', ingredients:'sfoglia all’uovo · funghi · aglio · prezzemolo · Parmigiano' },
  { name:'Ravioli ai 4 formaggi', cat:'Primi', copy:'Ravioli cremosi con quattro formaggi e una salsa delicata.', ingredients:'sfoglia all’uovo · formaggi misti · burro · Parmigiano' },
  { name:'Ravioli al radicchio', cat:'Primi', image:'assets/img/ravioli.PNG', copy:'Ravioli dalla sfoglia sottile, con il carattere amarognolo del radicchio.', ingredients:'sfoglia all’uovo · radicchio · ricotta · burro · Parmigiano' },
  { name:'Roast Beef', cat:'Secondi', copy:'Carne tenera e rosata, servita con il suo fondo e un contorno di stagione.', ingredients:'manzo · fondo di cottura · olio · sale · pepe' },
  { name:'Tonnato', cat:'Secondi', copy:'Fettine morbide e salsa tonnata, un grande classico della tavola italiana.', ingredients:'vitello · tonno · capperi · acciughe · maionese' },
  { name:'Carne Salada', cat:'Secondi', copy:'Fettine sottili, saporite e profumate, da gustare con semplicità.', ingredients:'carne di manzo · sale · erbe aromatiche · olio' },
  { name:'Tartare', cat:'Secondi', copy:'Manzo battuto al coltello e condito al momento, fresco e preciso.', ingredients:'manzo · tuorlo · senape · capperi · cipolla' },
  { name:'Coniglio', cat:'Secondi', copy:'Cotto lentamente con aromi e fondo di cottura, tenero e profumato.', ingredients:'coniglio · erbe aromatiche · vino bianco · olive' },
  { name:'Tagliata di Manzo', cat:'Secondi', image:'assets/img/manzo.PNG', copy:'La nostra tagliata: crosta viva, cuore rosato, un filo d’olio e niente da nascondere.', ingredients:'controfiletto di manzo · olio · sale · pepe' },
  { name:'Tagliata di Cervo', cat:'Secondi', image:'assets/img/cervo.PNG', copy:'Filetti cotti sulla brace e profumati con alloro fresco. Semplicemente carne.', ingredients:'cervo · alloro · sale grosso · olio extravergine' },
  { name:'Panna cotta', cat:'Dolci', copy:'Morbida, setosa e servita con una guarnizione di stagione.', ingredients:'panna · zucchero · vaniglia · frutta' },
  { name:'Torta in Cantina', cat:'Dolci', image:'assets/img/tortacantina.PNG', copy:'Strati morbidi, cacao e una colata fondente. Il finale che arriva sempre troppo presto.', ingredients:'cioccolato fondente · biscotto · crema · cacao' },
  { name:'Zuppa inglese', cat:'Dolci', image:'assets/img/zuppainglese.PNG', copy:'Crema, pan di Spagna e una nota di liquore: il dolce emiliano nella sua versione più golosa.', ingredients:'crema pasticcera · pan di Spagna · alchermes · cacao' },
  { name:'Catalana', cat:'Dolci', copy:'Crema delicata con una superficie croccante e caramellata.', ingredients:'crema · vaniglia · zucchero di canna' },
  { name:'Tiramisù', cat:'Dolci', copy:'Savoiardi, caffè e crema al mascarpone: un finale intramontabile.', ingredients:'mascarpone · uova · caffè · cacao · savoiardi' },
  { name:'Semifreddi', cat:'Dolci', copy:'Dessert freddi e cremosi, preparati con i gusti della stagione.', ingredients:'panna · uova · frutta · cioccolato' }
];

const menuGrid = document.querySelector('#menu-grid');
const renderMenu = (category = 'Tutti') => {
  menuGrid.innerHTML = dishes.filter(dish => category === 'Tutti' || dish.cat === category).map(dish => `<article class="dish-card bg-ink p-6 md:p-8 min-h-[235px] flex flex-col justify-between border border-transparent"><div><span class="eyebrow">${dish.cat}</span></div><div><h3 class="font-serif text-2xl mb-2">${dish.name}</h3><p class="text-xs leading-5 text-cream/45">${dish.copy}</p></div></article>`).join('');
};
renderMenu();
document.querySelector('#filters').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  document.querySelectorAll('#filters .pill').forEach(pill => pill.classList.remove('active'));
  button.classList.add('active');
  renderMenu(button.dataset.cat);
});

const dishImage = document.querySelector('#dish-image');
const photoDishes = dishes.filter(dish => dish.image);
const updateDish = (dish, index) => {
  dishImage.src = dish.image;
  dishImage.alt = `${dish.name} - fotografia del piatto`;
  dishImage.style.opacity = '0';
  window.setTimeout(() => { dishImage.style.opacity = '1'; }, 120);
  document.querySelector('#dish-number').textContent = `Piatto ${String(index + 1).padStart(2, '0')}`;
  document.querySelector('#dish-name').textContent = dish.name;
  document.querySelector('#dish-copy').textContent = dish.copy;
  document.querySelector('#dish-ingredients').textContent = dish.ingredients;
};

const dishButtons = document.querySelector('#dish-buttons');
photoDishes.forEach((dish, index) => {
  const button = document.createElement('button');
  button.className = `pill ${index === 0 ? 'active ' : ''}rounded-full border border-cream/20 px-3 py-2 text-[10px] uppercase tracking-[.12em]`;
  button.textContent = String(index + 1).padStart(2, '0');
  button.title = dish.name;
  button.onclick = () => {
    document.querySelectorAll('#dish-buttons .pill').forEach(pill => pill.classList.remove('active'));
    button.classList.add('active');
    updateDish(dish, index);
  };
  dishButtons.appendChild(button);
});
updateDish(photoDishes[0], 0);

document.querySelectorAll('a[href^="tel:"]').forEach(link => { link.href = 'tel:+390522878500'; link.textContent = '+39 0522 878500'; });
document.querySelector('#booking-form')?.parentElement.remove();
document.querySelectorAll('#booking .eyebrow').forEach(label => {
  if (label.textContent.trim() === 'Orari') label.parentElement.remove();
});
document.querySelectorAll('#booking p').forEach(paragraph => {
  if (paragraph.textContent.includes('Via del Pratello')) paragraph.innerHTML = 'Località Selvapiana, 82<br>42026 Canossa RE';
  if (paragraph.textContent.includes('via del Pratello')) paragraph.textContent = 'Per cene intime, tavolate rumorose e tutto ciò che sta nel mezzo. Vi aspettiamo a Località Selvapiana.';
  if (paragraph.textContent.includes('Mar — Dom')) paragraph.innerHTML = 'Lunedì · Chiuso<br>Martedì — Domenica · 8:00 — 14:00 / 19:00 — 00:00';
});
