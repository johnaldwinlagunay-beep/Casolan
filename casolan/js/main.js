var D={
restaurant:{t:'Restaurant',d:'Freshly prepared dishes and refreshing drinks, made to satisfy every craving.',cover:'salmon',loc:'Ground Floor, Main Building',hrs:'8:00 AM to 10:00 PM',
team:[['MA','Chef Marco Alvarez','Executive Chef','Fifteen years in fine dining, known for grilled seafood and steaks.'],['EW','Elena Ward','Pastry Chef','Creates our daily desserts and signature sweets.'],['DC','Daniel Cho','Head Server','Leads the dining room team and guest service.'],['SR','Sofia Reyes','Bar Manager','Designs our cocktails, coffee and refreshers.']],
items:[
['Lemon Herb Grilled Salmon','Fresh salmon fillet grilled with lemon, herbs and roasted tomatoes.','₱890','salmon','Mains'],
['Grilled Ribeye Steak','Thick-cut ribeye grilled to order, served with roasted potatoes and tomatoes.','₱1,650','ribeye','Mains'],
['Herb Roast Chicken','Whole roasted chicken with baby potatoes, carrots and broccolini.','₱980','chicken','Mains'],
['Spaghetti Carbonara','Creamy egg and cheese sauce with crisp bacon and fresh herbs.','₱520','carbonara','Mains'],
['Seafood Paella','Saffron rice with prawns, mussels, squid and garden peas.','₱1,200','paella','Mains'],
['Signature Burger','Juicy beef patty, melted cheese, greens and golden fries.','₱480','burger','Mains'],
['Caesar Salad','Crisp romaine, shaved parmesan, croutons and grilled chicken.','₱380','caesar','Starters'],
['Tomato Basil Soup','Roasted tomato soup with cream and a cheese toastie.','₱320','soup','Starters'],
['Chocolate Lava Cake','Warm chocolate cake with a molten center.','₱360','lava','Desserts'],
['Crème Brûlée','Vanilla custard with a caramelized crust and fresh berries.','₱340','brulee','Desserts'],
['Blueberry Cheesecake','Creamy cheesecake on a biscuit base with blueberry topping.','₱320','cheesecake','Desserts'],
['Signature Cocktails','Fresh mint and passion fruit cocktails served over ice.','₱320','cocktails','Drinks'],
['Strawberry Mango Smoothie','Layered strawberry and mango blended fresh.','₱220','smoothie','Drinks'],
['Brown Sugar Milk Tea','Creamy milk tea with brown sugar syrup and pearls.','₱180','milktea','Drinks'],
['Iced Latte','Chilled espresso over cold milk, lightly foamed.','₱190','latte','Drinks']]},
hotel:{t:'Hotel',d:'Comfortable rooms and suites for a restful stay. Reservations by phone or message.',cover:'suite',loc:'Floors 2 to 5, Main Building. Front Desk in the lobby',hrs:'Front Desk open 24 hours',
team:[['IM','Isabel Moreno','Front Desk Manager','Handles reservations, check-in and guest requests.'],['LT','Lucas Tan','Concierge','Helps with transport, tours and recommendations.'],['HC','Hannah Cruz','Housekeeping Supervisor','Keeps every room clean and ready.']],
items:[
['Standard Room','A calm room with a king bed, city view, work chair and private bath.','From ₱3,800 / night','standard'],
['Deluxe Room','Spacious room with a plush bed, sitting area, warm lighting and a window view.','From ₱5,200 / night','deluxe'],
['Grand Deluxe','Elegant grey and white design with LED accents, wardrobe and vanity.','From ₱6,500 / night','grand'],
['Suite','Large suite with a study space, lounge chair and generous storage.','From ₱8,500 / night','suite'],
['Premier Suite','Our finest room, with an arched LED headboard, dressing area and city light views.','From ₱11,000 / night','premier']]},
music:{t:'Music Lounge',d:'Live music, great drinks and a relaxed atmosphere. Guests 18 and above after 8:00 PM.',cover:'stage',loc:'Second Floor, East Wing',hrs:'6:00 PM to 2:00 AM',
team:[['VL','Victor Lane','Entertainment Manager','Plans nightly programs and special events.'],['MS','Maya Santos','Resident Band Leader','Leads our house band, playing every weekend.'],['NP','Noah Perez','Sound Engineer','Keeps every performance crisp and balanced.']],
items:[
['Main Stage Lounge','Warm lights, bar tables and a full stage for live acts.','Tables by reservation','records'],
['Starlight Stage','Stage with a starry backdrop, full drum kit and keyboards.','Event bookings available','stage'],
['Acoustic Corner','Brick-walled corner with a drum kit, mics and cozy seating.','Open nightly','brick'],
['Private Karaoke Room','Private room with leather seating and colored lights.','By reservation','karaoke']]},
gaming:{t:'Gaming Lounge',d:'An exciting space for evening entertainment. Guests 18 and above only. Showcase only.',cover:'poker',loc:'Lower Level, West Wing',hrs:'6:00 PM to 2:00 AM, 18+ only',
team:[['AC','Adrian Cole','Floor Manager','Supervises the lounge and guest experience.'],['CW','Clara Wong','Dealer Supervisor','Leads our trained table staff.'],['ER','Ethan Ramos','Guest Relations','Assists with inquiries and private tables.']],
items:[
['Red Round Table','Round table with plush red seating beneath a crystal chandelier.','Tables by reservation','poker'],
['Grand Hall','Spacious hall with multiple tables and a bar nearby.','Open nightly','hall'],
['Velvet Room','Red carpet room with a classic green felt table and leather seating.','Private bookings','lounge'],
['Card Room','Bold card-themed decor with a dedicated table area.','Private bookings','cards']]}
};
var $=function(i){return document.getElementById(i)},nav=$('nav');
var home=$('home'),cat=$('cat');
$('cats').innerHTML=Object.keys(D).map(function(k){var c=D[k];return '<a class="card" href="#'+k+'"><div class="ph"><img loading="lazy" src="img/'+c.cover+'.jpg" alt="'+c.t+'"></div><div class="tx"><h3>'+c.t+'</h3><p>'+c.d.split('. ')[0].replace(/\.$/,'')+'</p></div></a>'}).join('');
function show(k){
  if(!D[k]){cat.classList.add('hide');home.classList.remove('hide');nav.classList.toggle('solid',scrollY>60);return}
  var c=D[k],g='',h='';
  $('ct').textContent=c.t;$('cd').textContent=c.d;
  $('tm').innerHTML=c.team.map(function(m){return '<div class="mem"><div class="av">'+m[0]+'</div><div><b>'+m[1]+'</b><i>'+m[2]+'</i><p>'+m[3]+'</p></div></div>'}).join('');
  c.items.forEach(function(it,i){
    if(it[4]&&it[4]!==g){if(g)h+='</div>';g=it[4];h+='<h4>'+g+'</h4><div class="grid">'}
    else if(!g&&!i)h+='<h4>'+(k==='hotel'?'Rooms &amp; Suites':'Our Spaces')+'</h4><div class="grid">';
    h+='<button class="card" data-i="'+i+'"><div class="ph"><img loading="lazy" src="img/'+it[3]+'.jpg" alt="'+it[0]+'"></div><div class="tx"><h3>'+it[0]+'</h3><p>'+it[1]+'</p><div class="pr">'+it[2]+'</div></div></button>'});
  $('items').innerHTML=h+'</div>';
  $('items').onclick=function(e){var b=e.target.closest('.card');if(b)openM(c,c.items[+b.dataset.i])};
  home.classList.add('hide');cat.classList.remove('hide');nav.classList.add('solid');scrollTo(0,0)}
function route(){var k=location.hash.slice(1);if(k==='contact')return;show(k)}
function openM(c,it){$('mi').src='img/'+it[3]+'.jpg';$('mi').alt=it[0];$('mn').textContent=it[0];$('mp').textContent=it[2];$('md').textContent=it[1];
  $('mm').innerHTML='<b>Find us:</b> '+c.loc+'<br><b>Hours:</b> '+c.hrs;$('mod').classList.add('on')}
function closeM(){$('mod').classList.remove('on')}
$('mx').onclick=closeM;$('mod').onclick=function(e){if(e.target===this)closeM()};
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
document.querySelectorAll('[data-home]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();history.pushState(null,'',location.pathname);show('')})});
addEventListener('hashchange',route);route();
addEventListener('scroll',function(){nav.classList.toggle('solid',scrollY>60||!cat.classList.contains('hide'))});
if(window.Typed)new Typed('#typed',{strings:['Dine. Stay. Play. Unwind.','Welcome to Casolan'],typeSpeed:60,backSpeed:30,backDelay:1500,loop:true});
var hero=$('hero'),last=0;
function rip(e){var n=Date.now();if(n-last<90)return;last=n;var p=e.touches?e.touches[0]:e,r=hero.getBoundingClientRect(),s=document.createElement('span');
  s.className='rip';s.style.left=p.clientX-r.left+'px';s.style.top=p.clientY-r.top+'px';hero.appendChild(s);setTimeout(function(){s.remove()},1300)}
hero.addEventListener('mousemove',rip);hero.addEventListener('touchmove',rip,{passive:true});
