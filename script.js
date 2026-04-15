// ===== UBICACIONES =====
const UBICACIONES = {
    'aeropuerto_gdl': { nombre: '✈️ Aeropuerto GDL', lat: 20.5213, lng: -103.3039 },
    'base_aerea': { nombre: '🛡️ Base Aérea Militar', lat: 20.5167, lng: -103.4167 },
    'aeropuerto_pvr': { nombre: '✈️ Aeropuerto Puerto Vallarta', lat: 20.6295, lng: -105.2539 },
    'hyatt': { nombre: '🏨 Hyatt Regency Andares', lat: 20.6296, lng: -103.3881 },
    'hilton': { nombre: '🏨 Hilton Midtown', lat: 20.6547, lng: -103.3263 },
    'jw_marriott': { nombre: '🏨 JW Marriott', lat: 20.6309, lng: -103.3913 },
    'fiesta_americana': { nombre: '🏨 Grand Fiesta Americana', lat: 20.6365, lng: -103.3809 },
    'westin': { nombre: '🏨 The Westin', lat: 20.6531, lng: -103.3227 },
    'ac_hotel': { nombre: '🏨 AC Hotel Expo', lat: 20.6234, lng: -103.3683 },
    'fiesta_inn': { nombre: '🏨 Fiesta Inn Expo', lat: 20.6218, lng: -103.3697 },
    'ibis': { nombre: '🏨 Ibis Guadalajara', lat: 20.6547, lng: -103.3263 },
    'estadio_gdl': { nombre: '🏟️ Estadio Guadalajara', lat: 20.5867, lng: -103.3125 },
    'estadio_jalisco': { nombre: '🏟️ Estadio Jalisco', lat: 20.6547, lng: -103.3263 },
    'sports_arena': { nombre: '🏋️ Sports Arena Club', lat: 20.6234, lng: -103.3683 },
    'academia_aga': { nombre: '⚽ Academia AGA', lat: 20.5867, lng: -103.3125 }
};

// ===== RUTAS =====
const RUTAS = {
    'aeropuerto_gdl|hyatt': {
        principal: {
            distancia: '30.2 km',
            tiempo: '60 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara (Carr. Guadalajara-Chapala km 17.5), se toma el Blvd. Aeropuerto hacia la carretera México 23/44, continuando por Calz. Lázaro Cárdenas hasta tomar la salida hacia Av. Patria. Se avanza por dicha avenida hasta llegar a Paseo Andares en Zapopan.',
            url: 'https://acortar.link/mWlDGe'
        },
        secundaria: {
            distancia: '39.5 km',
            tiempo: '60 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara (Carr. Guadalajara-Chapala km 17.5), se toma el Blvd. Aeropuerto hacia la carretera México 23/44, continuando por Periférico Sur hasta tomar la salida hacia Av. Patria. Se avanza por dicha avenida hasta llegar a Paseo Andares en Zapopan.',
            url: 'https://acortar.link/mWlDGe'
        },
        terciaria: {
            distancia: '39.4 km',
            tiempo: '70 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara (Carr. Guadalajara-Chapala km 17.5), se toma el Blvd. Aeropuerto hacia la carretera México 23/44, continuando por Av. Periférico Poniente Manuel Gómez Morín hasta tomar la salida hacia Av. Acueducto en Puerta de Hierro, Zapopan. Se finaliza por Av. Acueducto hasta llegar a Paseo Andares, Zapopan.',
            url: 'https://acortar.link/mWlDGe'
        }
    },
    'aeropuerto_gdl|hilton': {
        principal: {
            distancia: '25.8 km',
            tiempo: '45 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Calz. Lázaro Cárdenas hasta tomar la salida hacia Avenida México. Se continúa por Avenida México hasta llegar al Hotel Hilton Midtown en el Centro.',
            url: 'https://acortar.link/uJtpVX'
        },
        secundaria: {
            distancia: '35.2 km',
            tiempo: '50 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Periférico Sur hasta la salida hacia Avenida México. Se finaliza por Avenida México hasta el Hotel Hilton Midtown.',
            url: 'https://acortar.link/uJtpVX'
        },
        terciaria: {
            distancia: '36.5 km',
            tiempo: '55 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Av. Periférico Poniente Manuel Gómez Morín, luego hacia Avenida México hasta llegar al Hotel Hilton Midtown.',
            url: 'https://acortar.link/uJtpVX'
        }
    },
    'aeropuerto_gdl|jw_marriott': {
        principal: {
            distancia: '28.5 km',
            tiempo: '55 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Calz. Lázaro Cárdenas hasta Av. Patria. Se continúa hacia Zapopan hasta llegar al JW Marriott.',
            url: 'https://acortar.link/azJQU0'
        },
        secundaria: {
            distancia: '38.0 km',
            tiempo: '60 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Periférico Sur hasta Av. Patria. Se continúa hacia Zapopan hasta llegar al JW Marriott.',
            url: 'https://acortar.link/azJQU0'
        },
        terciaria: {
            distancia: '38.5 km',
            tiempo: '65 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Av. Periférico Poniente Manuel Gómez Morín hasta Av. Acueducto. Se finaliza hacia Zapopan hasta llegar al JW Marriott.',
            url: 'https://acortar.link/azJQU0'
        }
    },
    'aeropuerto_gdl|fiesta_americana': {
        principal: {
            distancia: '29.0 km',
            tiempo: '55 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Calz. Lázaro Cárdenas hasta Av. Patria. Se continúa hacia Zapopan hasta llegar a Grand Fiesta Americana.',
            url: 'https://acortar.link/CHs14D'
        },
        secundaria: {
            distancia: '38.5 km',
            tiempo: '60 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Periférico Sur hasta Av. Patria. Se continúa hacia Zapopan hasta llegar a Grand Fiesta Americana.',
            url: 'https://acortar.link/CHs14D'
        },
        terciaria: {
            distancia: '39.0 km',
            tiempo: '65 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Av. Periférico Poniente Manuel Gómez Morín hasta Av. Acueducto. Se finaliza hacia Zapopan hasta llegar a Grand Fiesta Americana.',
            url: 'https://acortar.link/CHs14D'
        }
    },
    'aeropuerto_gdl|westin': {
        principal: {
            distancia: '26.0 km',
            tiempo: '48 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Calz. Lázaro Cárdenas hasta Avenida México. Se continúa hacia el Centro hasta llegar a The Westin.',
            url: 'https://acortar.link/0ClILt'
        },
        secundaria: {
            distancia: '35.5 km',
            tiempo: '52 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Periférico Sur hasta Avenida México. Se continúa hacia el Centro hasta llegar a The Westin.',
            url: 'https://acortar.link/0ClILt'
        },
        terciaria: {
            distancia: '37.0 km',
            tiempo: '57 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara, se toma el Blvd. Aeropuerto hacia México 23/44, continuando por Av. Periférico Poniente Manuel Gómez Morín hasta Avenida México. Se continúa hacia el Centro hasta llegar a The Westin.',
            url: 'https://acortar.link/0ClILt'
        }
    },
    'aeropuerto_gdl|ac_hotel': {
        principal: {
            distancia: '46.5 km',
            tiempo: '56 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara hacia AC Hotel by Marriott Guadalajara Expo.',
            url: 'https://acortar.link/6zI82z'
        },
        secundaria: {
            distancia: '12.2 km',
            tiempo: '32 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara hacia AC Hotel by Marriott Guadalajara Expo (ruta alternativa).',
            url: 'https://acortar.link/6zI82z'
        },
        terciaria: {
            distancia: '296 km',
            tiempo: '3 hrs 46 min',
            descripcion: 'Desde el Aeropuerto Internacional de Puerto Vallarta hacia AC Hotel by Marriott Guadalajara Expo.',
            url: 'https://acortar.link/6zI82z'
        }
    },
    'aeropuerto_gdl|fiesta_inn': {
        principal: {
            distancia: '63.9 km',
            tiempo: '70 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara hacia Fiesta Inn Guadalajara Expo.',
            url: 'https://acortar.link/iRJc5U'
        },
        secundaria: {
            distancia: '18.8 km',
            tiempo: '50 min',
            descripcion: 'Desde la B.A.M. 5 hacia Fiesta Inn Guadalajara Expo.',
            url: 'https://acortar.link/iRJc5U'
        },
        terciaria: {
            distancia: '298 km',
            tiempo: '3 hrs 45 min',
            descripcion: 'Desde el Aeropuerto Internacional de Puerto Vallarta hacia Fiesta Inn Guadalajara Expo.',
            url: 'https://acortar.link/iRJc5U'
        }
    },
    'aeropuerto_gdl|ibis': {
        principal: {
            distancia: '52.5 km',
            tiempo: '70 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara hacia ibis Guadalajara Expo.',
            url: 'https://acortar.link/cTWssk'
        },
        secundaria: {
            distancia: '21.7 km',
            tiempo: '32 min',
            descripcion: 'Desde el Colegio del Aire hacia ibis Guadalajara Expo.',
            url: 'https://acortar.link/cTWssk'
        },
        terciaria: {
            distancia: '298 km',
            tiempo: '3 hrs 45 min',
            descripcion: 'Desde el Aeropuerto Internacional de Puerto Vallarta hacia ibis Guadalajara Expo.',
            url: 'https://acortar.link/cTWssk'
        }
    },
    'aeropuerto_gdl|estadio_gdl': {
        principal: {
            distancia: '37.1 km',
            tiempo: '60 min',
            descripcion: 'Desde el Aeropuerto Internacional de Guadalajara hacia Estadio Akron.',
            url: 'https://acortar.link/rpvUBZ'
        },
        secundaria: {
            distancia: '12.0 km',
            tiempo: '30 min',
            descripcion: 'Desde la Base Aérea Militar Colegio del Aire hacia Estadio Akron.',
            url: 'https://acortar.link/rpvUBZ'
        },
        terciaria: {
            distancia: '294.0 km',
            tiempo: '3 hrs 30 min',
            descripcion: 'Desde el Aeropuerto Internacional de Puerto Vallarta hacia Estadio Akron.',
            url: 'https://acortar.link/rpvUBZ'
        }
    },
    'base_aerea|estadio_gdl': {
        principal: {
            distancia: '32.2 km',
            tiempo: '1h 13 min',
            descripcion: 'Carretera Chapala – Calz. Lázaro Cárdenas – Av. Vallarta – Av. Del Bajío.',
            url: 'https://acortar.link/b8iENb'
        },
        secundaria: {
            distancia: '38.8 km',
            tiempo: '1h 33 min',
            descripcion: 'Carretera Chapala – Periférico Sur – Av. Aviación – Av. Del Bajío.',
            url: 'https://acortar.link/b8iENb'
        },
        terciaria: {
            distancia: '52.2 km',
            tiempo: '1 hrs 17 min',
            descripcion: 'Carretera Chapala – Nuevo Periférico Oriente – Av. Vallarta – Av. Del Bajío.',
            url: 'https://acortar.link/b8iENb'
        }
    }
};

let map;
let originSelect = document.getElementById('originSelect');
let destinationSelect = document.getElementById('destinationSelect');
let searchRoutesBtn = document.getElementById('searchRoutesBtn');
let routesDisplayPanel = document.getElementById('routesDisplayPanel');
let routesContainer = document.getElementById('routesContainer');

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    populateSelects();
    setupEventListeners();
});

// ===== INICIALIZAR MAPA =====
function initializeMap() {
    map = L.map('map').setView([20.519, -103.36], 12);
    
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    });
    
    osmLayer.addTo(map);
}

// ===== POBLAR SELECTORES =====
function populateSelects() {
    // Limpiar opciones existentes
    originSelect.innerHTML = '<option value="">Selecciona un punto de origen</option>';
    destinationSelect.innerHTML = '<option value="">Selecciona un punto de destino</option>';
    
    // Agregar opciones
    Object.keys(UBICACIONES).forEach(key => {
        const ubicacion = UBICACIONES[key];
        
        const optionOrigen = document.createElement('option');
        optionOrigen.value = key;
        optionOrigen.textContent = ubicacion.nombre;
        originSelect.appendChild(optionOrigen);
        
        const optionDestino = document.createElement('option');
        optionDestino.value = key;
        optionDestino.textContent = ubicacion.nombre;
        destinationSelect.appendChild(optionDestino);
    });
}

// ===== CONFIGURAR EVENT LISTENERS =====
function setupEventListeners() {
    searchRoutesBtn.addEventListener('click', buscarRutas);
}

// ===== BUSCAR RUTAS =====
function buscarRutas() {
    const origen = originSelect.value;
    const destino = destinationSelect.value;
    
    if (!origen || !destino) {
        alert('Por favor selecciona origen y destino');
        return;
    }
    
    if (origen === destino) {
        alert('El origen y destino no pueden ser iguales');
        return;
    }
    
    // Buscar ruta
    const rutaKey = `${origen}|${destino}`;
    const ruta = RUTAS[rutaKey];
    
    if (!ruta) {
        alert('No hay rutas disponibles para esta combinación');
        return;
    }
    
    // Mostrar rutas
    mostrarRutas(origen, destino, ruta);
}

// ===== MOSTRAR RUTAS =====
function mostrarRutas(origen, destino, ruta) {
    const origenNombre = UBICACIONES[origen].nombre;
    const destinoNombre = UBICACIONES[destino].nombre;
    
    document.getElementById('routeTitle').textContent = `${origenNombre} → ${destinoNombre}`;
    
    routesContainer.innerHTML = '';
    
    // Ruta Principal
    routesContainer.innerHTML += crearTarjetaRuta('Principal', ruta.principal, '#0066ff');
    
    // Ruta Secundaria
    routesContainer.innerHTML += crearTarjetaRuta('Secundaria', ruta.secundaria, '#ff9900');
    
    // Ruta Terciaria
    routesContainer.innerHTML += crearTarjetaRuta('Terciaria', ruta.terciaria, '#00cc00');
    
    routesDisplayPanel.style.display = 'block';
    
    // Scroll a las rutas
    setTimeout(() => {
        routesDisplayPanel.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ===== CREAR TARJETA DE RUTA =====
function crearTarjetaRuta(tipo, ruta, color) {
    return `
        <div class="route-card" style="border-left: 5px solid ${color};">
            <div class="route-type" style="color: ${color};">● Ruta ${tipo}</div>
            <div class="route-info">
                <span>📍 ${ruta.distancia}</span>
                <span>⏱️ ${ruta.tiempo}</span>
            </div>
            <div class="route-description">
                ${ruta.descripcion}
            </div>
            <a href="${ruta.url}" target="_blank" class="btn-maps" style="background-color: ${color};">
                📍 Abrir en Google Maps
            </a>
        </div>
    `;
}
