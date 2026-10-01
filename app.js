const itinerary = [
  ["26 OCT","🇪🇸 Barcelona",[
    ["14:00","🚄 Llegada Madrid → Barcelona","Hotel + equipaje"],
    ["15:00","🍜 Almuerzo",""],
    ["16:00","🚶 Passeig de Gràcia","Casa Batlló + La Pedrera exterior"],
    ["18:00","🏨 Hotel / prepararse",""],
    ["NOCHE","🎸 Simple Plan","Hora y venue por confirmar"]
  ]],
  ["27 OCT","🇪🇸 Barcelona",[
    ["09:30","🛍️ Decathlon Ciutat Vella","2 horas para comprar equipo de nieve"],
    ["11:30","⛪ Catedral + Barri Gòtic",""],
    ["13:00","🍜 Almuerzo","XiAn / 100 Montaditos"],
    ["14:00","🚶 Ramblas + Boqueria",""],
    ["16:00","🏘️ Born",""],
    ["17:00","⛪ Santa Maria del Mar",""],
    ["17:45","🌳 Parc de la Ciutadella",""],
    ["18:30","🌊 Barceloneta",""],
    ["19:30","🍽️ Cena",""]
  ]],
  ["28 OCT","🇪🇸 Barcelona",[
    ["09:30","⛪ Sagrada Família","Entrada recomendada"],
    ["12:00","🏛️ Casa Batlló + La Pedrera","Exterior"],
    ["13:15","🍜 Almuerzo",""],
    ["14:15","🏘️ Gràcia",""],
    ["16:00","🌳 Park Güell","Entrada opcional"],
    ["17:30","☕ Gràcia / cena",""]
  ]],
  ["29 OCT","🇫🇷 Paris",[
    ["09:00","✈️ Barcelona → París",""],
    ["16:00","🏨 Hotel Levallois","Dejar equipaje"],
    ["17:00","🏛️ Opéra Garnier","Exterior"],
    ["18:00","🌳 Tuileries",""],
    ["18:45","🖼️ Louvre","Exterior"],
    ["19:30","⛪ Notre-Dame / Île de la Cité",""],
    ["20:30","🍽️ Cena",""]
  ]],
  ["30 OCT","🇫🇷 Paris",[
    ["09:15","⛪ Montmartre","Sacré-Cœur + Place du Tertre"],
    ["11:30","🎭 Pigalle / Moulin Rouge",""],
    ["12:30","🥪 Almuerzo","Fric-Frac como opción"],
    ["13:30","🛍️ Opéra / Galeries Lafayette",""],
    ["15:00","🖼️ Louvre","2–3 horas"],
    ["18:00","🌳 Tuileries → Concorde",""],
    ["19:15","🌉 Pont Alexandre III → Invalides",""],
    ["20:00","🗼 Torre Eiffel",""]
  ]],
  ["31 OCT","🏴 Edinburgh",[
    ["10:40","✈️ París → Edinburgh","Llegada aprox. 11:30"],
    ["12:30","🏨 Hotel + equipaje",""],
    ["14:30","🏘️ Old Town","Royal Mile + St Giles + Victoria Street"],
    ["16:30","🏘️ Grassmarket",""],
    ["17:30","🎃 Prepararse","Halloween"],
    ["NOCHE","🎃 HALLOWEEN",""]
  ]],
  ["1 NOV","🏴 Edinburgh → Glasgow",[
    ["08:00","☕ Desayuno",""],
    ["08:45","🏰 Edinburgh Castle","Exterior"],
    ["10:15","🚶 Royal Mile",""],
    ["11:15","🏘️ Victoria Street + Grassmarket",""],
    ["12:30","🚆 Edinburgh → Glasgow","Objetivo 12:00–13:00"],
    ["13:30","🏨 Hotel + equipaje",""],
    ["14:30","🚶 Glasgow centro","George Square + Buchanan + Merchant City"],
    ["17:15","🎸 OVO Hydro",""],
    ["18:30","🎸 Papa Roach","FIJO"]
  ]],
  ["2 NOV","🏴 Glasgow",[
    ["10:00","🎓 University of Glasgow",""],
    ["11:30","🖼️ Kelvingrove Museum",""],
    ["13:00","🌳 Kelvingrove Park",""],
    ["13:30","🍔 Almuerzo","Bread Meats Bread como opción"],
    ["14:30","🏘️ West End",""],
    ["15:30","🛍️ Byres Road",""],
    ["16:30","🍻 Ashton Lane",""]
  ]],
  ["3 NOV","🏴 Glasgow → Edinburgh",[
    ["09:30","🚶 Glasgow","Pendientes / murals / centro"],
    ["13:00","🍜 Almuerzo",""],
    ["14:00","☕ West End / cafés / tiendas",""],
    ["16:30","🍽️ Cena temprana + equipaje",""],
    ["19:00","🚉 Glasgow Central",""],
    ["20:00","🚆 Glasgow → Edinburgh",""]
  ]],
  ["4 NOV","🏴 Edinburgh",[
    ["09:30","🏰 Edinburgh Castle","Entrada"],
    ["12:00","🚶 Royal Mile + St Giles",""],
    ["13:00","🍜 Almuerzo","Mosque Kitchen / Nile Valley como opciones"],
    ["14:00","🏘️ Victoria Street + Grassmarket",""],
    ["15:30","🏛️ Scottish Parliament",""],
    ["16:00","👑 Holyrood Palace","Exterior"],
    ["16:30","⛰️ Arthur's Seat","Si el clima acompaña"]
  ]],
  ["5 NOV","🇬🇧 London",[
    ["09:00","🚆 Edinburgh → London",""],
    ["13:30","🏨 Hotel + equipaje",""],
    ["15:00","🏛️ Big Ben + Parliament",""],
    ["16:00","🌳 St James's Park",""],
    ["17:00","👑 Buckingham Palace",""],
    ["18:00","🏛️ Trafalgar Square",""],
    ["19:00","🏘️ Covent Garden",""]
  ]],
  ["6 NOV","🇬🇧 London",[
    ["09:30","🏛️ Westminster",""],
    ["10:15","🌊 South Bank + London Eye","Exterior"],
    ["11:30","🖼️ Tate Modern","Opcional"],
    ["13:00","🍜 Borough Market",""],
    ["14:00","🎭 Shakespeare's Globe",""],
    ["15:30","🏙️ City + Millennium Bridge",""],
    ["16:15","⛪ St Paul's","Exterior"],
    ["17:00","🏬 Leadenhall Market",""],
    ["17:30","🌉 Tower Bridge",""]
  ]],
  ["7 NOV","🇬🇧 London",[
    ["09:30","⛪ St Paul's / City",""],
    ["10:30","🏬 Leadenhall Market",""],
    ["11:15","🌇 Horizon 22 / Sky Garden","Reserva gratuita si hay cupo"],
    ["12:00","⚓ St Katharine Docks",""],
    ["13:00","🍜 Almuerzo",""],
    ["14:30","🏘️ Covent Garden",""],
    ["15:30","🛍️ Seven Dials",""],
    ["16:15","🪄 Harry Potter Shop Oxford Street",""],
    ["17:00","🍜 Soho + Chinatown + Piccadilly",""]
  ]],
  ["8 NOV","🇬🇧 London → 🇳🇴 Tromsø",[
    ["08:00","☕ Desayuno / check-out",""],
    ["09:00","✈️ Aeropuerto",""],
    ["11:00","✈️ London → Tromsø","Llegada aprox. 15:30"],
    ["NOCHE","🌌 Preparar aurora / descansar",""]
  ]],
  ["9 NOV","🇳🇴 Tromsø",[
    ["10:00","🚶 Centro + puerto",""],
    ["12:00","🍜 Almuerzo",""],
    ["13:00","🐻 Polaria / puerto","Según clima"],
    ["15:00","🏨 Descanso",""],
    ["16:00","🌌 Tour de auroras",""],
    ["NOCHE","😴 Dormir temprano","Mañana crítica"]
  ]],
  ["10 NOV","🇳🇴 Tromsø → 🇸🇪 Kiruna → Abisko",[
    ["05:00","⏰ Despertar",""],
    ["06:00","🚌 Tromsø → Kiruna","⭐ CONEXIÓN CRÍTICA"],
    ["14:00","📍 Kiruna","Objetivo: 1 h de margen"],
    ["15:00","🚆 Kiruna → Abisko","⭐ NO PERDER"],
    ["16:00","🏨 Abisko","Llegada aprox."]
  ]],
  ["11 NOV","🇸🇪 Abisko → Kiruna",[
    ["08:00","☕ Desayuno",""],
    ["09:00","🎒 Equipaje",""],
    ["10:00","🚌 Abisko → Kiruna",""],
    ["12:00","🍜 Almuerzo",""],
    ["14:00","🚶 Kiruna","Plan relajado"],
    ["17:00","🌌 Tarde / noche",""]
  ]],
  ["12 NOV","🇸🇪 Kiruna",[
    ["09:30","🚶 Kiruna","Día completo"],
    ["12:00","🍜 Almuerzo",""],
    ["14:00","❄️ Actividad ártica / Icehotel","Por definir"],
    ["18:00","🌌 Noche",""]
  ]],
  ["13 NOV","🇸🇪 Kiruna → 🇸🇪 Stockholm",[
    ["09:00","☕ Desayuno",""],
    ["09:30","🚶 Último paseo Kiruna",""],
    ["11:30","🎒 Equipaje",""],
    ["13:00","✈️ Aeropuerto",""],
    ["15:45","✈️ Kiruna → Stockholm","Llegada aprox. 17:25"],
    ["19:00","🚶 Stockholm + cena",""]
  ]],
  ["14 NOV","🇸🇪 Stockholm → 🇪🇸 Madrid",[
    ["08:00","☕ Desayuno",""],
    ["08:30","🚶 Último paseo Stockholm",""],
    ["10:30","🎒 Equipaje / check-out",""],
    ["12:00","✈️ Aeropuerto",""],
    ["14:45","✈️ Stockholm → Madrid","Llegada aprox. 18:50"]
  ]],
  ["15 NOV","🇪🇸 Madrid → 🇵🇪 Lima",[
    ["08:00","☕ Desayuno",""],
    ["11:00","🎒 Equipaje / aeropuerto",""],
    ["13:45","✈️ Madrid → Lima","FIN DEL VIAJE ❤️"]
  ]]
];

const route = ["Madrid","Barcelona","Paris","Edinburgh","Glasgow","London","Tromsø","Kiruna","Abisko","Stockholm","Madrid"];

const docs = [
  ["✈️","Vuelos","Pasajes aéreos","Pendientes de vincular"],
  ["🚆","Trenes","Billetes ferroviarios","Pendientes de vincular"],
  ["🚌","Buses","Tromsø → Kiruna","Pendiente de vincular"],
  ["🎸","Entradas","Simple Plan + Papa Roach","QR pendientes"],
  ["📄","Otros","Seguro, reservas, etc.","Pendientes"]
];

const hotels = ["🇪🇸 Barcelona","🇫🇷 Paris","🏴 Edinburgh","🏴 Glasgow","🇬🇧 London","🇳🇴 Tromsø","🇸🇪 Abisko","🇸🇪 Kiruna","🇸🇪 Stockholm"];

function mapsUrl(q){ return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q); }

function renderPlan(){
  const days = document.getElementById("days");
  days.innerHTML = itinerary.map(([date,city,items])=>`
    <article class="day">
      <div class="day-head"><span class="day-date">${date}</span><span class="city">${city}</span></div>
      <div class="timeline">
        ${items.map(([time,title,sub])=>`
          <div class="item">
            <div class="time">${time}</div>
            <div>
              <div class="item-title">${title}</div>
              ${sub?`<div class="item-sub">${sub}</div>`:""}
              <div class="actions">
                ${title.includes("→") || title.includes("Decathlon") || title.includes("Sagrada") || title.includes("Louvre") || title.includes("Eiffel") || title.includes("Harry Potter")
                  ? `<a href="${mapsUrl(title.replace(/[🏨✈️🚆🚌🛍️⛪🖼️🗼🪄]/g,""))}" target="_blank" rel="noopener">📍 Maps</a>` : ""}
              </div>
            </div>
          </div>`).join("")}
      </div>
    </article>`).join("");
}

function renderRoute(){
  document.getElementById("route").innerHTML = route.map((x,i)=>`
    <div class="stop">📍 ${x}</div>${i<route.length-1?'<span class="arrow">→</span>':''}
  `).join("");
}

function renderDocs(){
  document.getElementById("docsGrid").innerHTML = docs.map(([icon,name,desc,status])=>`
    <article class="doc">
      <div style="font-size:28px">${icon}</div>
      <h3>${name}</h3><div class="item-sub">${desc}</div>
      <div class="status">${status}</div>
      <span class="link">＋ Añadir enlace después</span>
    </article>`).join("");
}

function renderHotels(){
  document.getElementById("hotelsGrid").innerHTML = hotels.map(city=>`
    <article class="hotel">
      <h3>${city}</h3>
      <div class="status">🏨 Reserva pendiente de vincular</div>
      <span class="link">＋ Añadir reserva después</span>
    </article>`).join("");
}

document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
    window.scrollTo({top:0,behavior:"smooth"});
  });
});

document.getElementById("nowBtn").addEventListener("click",()=>{
  alert("🆘 Modo viaje: esta sección la iremos conectando al día actual y a la próxima actividad. El 10 NOV destacará la conexión Tromsø → Kiruna → Abisko.");
});

document.getElementById("nextTitle").textContent = "26 OCT · Barcelona";
document.getElementById("nextText").textContent = "Primer día del viaje · Madrid → Barcelona · Simple Plan por la noche";

renderPlan(); renderRoute(); renderDocs(); renderHotels();
