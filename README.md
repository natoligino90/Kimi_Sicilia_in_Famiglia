# Kimi_Sicilia_in_FamigliaMa# 🏖️ 
GB Viaggi Sicilia - Landing Page

Landing page ottimizzata per conversioni per il servizio di consulenza vacanze in Sicilia per famiglie.

## 📁 Struttura del Progetto

```
gb-viaggi-sicilia/
├── index.html              # Pagina principale (completa)
├── css/
│   └── style.css           # Stili completi (responsive)
├── js/
│   └── main.js             # Interattività e animazioni
├── images/
│   ├── hero/               # Immagini hero e sezioni principali
│   ├── icons/              # Icone SVG (già create)
│   ├── testimonials/       # Avatar testimonianze
│   ├── destinations/       # Immagini destinazioni (opzionali)
│   └── trust/              # Badge trust (già creato)
└── README.md
```

## 🚀 Deploy su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `gb-viaggi-sicilia`)
2. Carica tutti i file mantenendo la struttura delle cartelle
3. Vai su **Settings > Pages**
4. Seleziona il branch `main` e cartella `/ (root)`
5. Il sito sarà disponibile su `https://tuousername.github.io/gb-viaggi-sicilia/`

## 🎨 Personalizzazione

### Numero WhatsApp
Modifica tutti i link `wa.me/393331234567` in `index.html` con il numero reale di GB Viaggi.

### Colori
Modifica le variabili CSS in `css/style.css`:
```css
:root {
    --primary: #0D7377;        /* Colore principale teal */
    --accent: #F4A261;         /* Colore CTA arancione */
}
```

## 📸 IMMAGINI DA CARICARE

### OBBLIGATORIE (da sostituire con foto reali)

| Cartella | Nome File | Dimensione | Contenuto |
|----------|-----------|------------|-----------|
| `images/hero/` | `hero-main.jpg` | **1920x1080px** (16:9) | Vista panoramica Sicilia, mare cristallino, spiaggia |
| `images/hero/` | `family-stress.jpg` | **800x600px** (4:3) | Famiglia stressata davanti PC/ricerca caotica |
| `images/hero/` | `family-happy.jpg` | **800x600px** (4:3) | Famiglia felice in vacanza Sicilia, tramonto |
| `images/testimonials/` | `avatar-1.jpg` | **100x100px** (1:1) | Foto Maria R. (madre ~40 anni) |
| `images/testimonials/` | `avatar-2.jpg` | **100x100px** (1:1) | Foto Luca B. (padre ~45 anni) |
| `images/testimonials/` | `avatar-3.jpg` | **100x100px** (1:1) | Foto Giulia M. (madre ~35 anni) |
| `images/icons/` | `favicon.png` | **32x32px** | Favicon sito (logo GB Viaggi) |

### OPZIONALI (per espansioni future)

| Cartella | Nome File | Dimensione | Contenuto |
|----------|-----------|------------|-----------|
| `images/destinations/` | `cefalu.jpg` | 800x600px | Spiaggia di Cefalù |
| `images/destinations/` | `taormina.jpg` | 800x600px | Panorama Taormina/Isola Bella |
| `images/destinations/` | `san-vito.jpg` | 800x600px | San Vito Lo Capo |
| `images/destinations/` | `siracusa.jpg` | 800x600px | Siracusa/Ortigia |
| `images/destinations/` | `palermo.jpg` | 800x600px | Palermo centro storico |

### ✅ GIÀ CREATE (SVG - possono rimanere così)

Tutte le icone in `images/icons/*.svg` sono già create e funzionanti:
- `logo-gb-viaggi.svg` / `logo-gb-viaggi-white.svg`
- `phone.svg` / `phone-white.svg`
- `email-white.svg`
- `clock.svg`
- `check.svg` / `check-small.svg`
- `shield.svg`
- `chevron-down.svg`
- `whatsapp.svg` / `whatsapp-white.svg`
- `message.svg`
- `proposals.svg`
- `booking.svg`
- `arrow-right.svg`
- `no-payment.svg`
- `italy-flag.svg`
- `support.svg`
- `family.svg`
- `experience.svg`
- `star-filled.svg` / `star-half.svg`
- `facebook.svg`
- `instagram.svg`
- `trust/trustpilot-logo.svg`

## 💡 Consigli per le Immagini

- **Formato**: JPG per foto, PNG per icone con trasparenza, SVG per loghi
- **Compressione**: usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app) per ottimizzare
- **Hero**: usare foto con buon contrasto per il testo sovrapposto (overlay scuro già presente)
- **Testimonial**: foto reali o stock credibili, volti riconoscibili
- **Lazy loading**: già attivo nel codice JS
- **Alt text**: già inseriti nell'HTML per SEO

## 📱 Responsive

La landing è ottimizzata per:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## ⚡ Performance

- Lazy loading immagini
- Animazioni con Intersection Observer
- CSS ottimizzato
- Font Google Fonts con preconnect
- SVG invece di PNG per icone

## 📄 Licenza

© 2026 GB Viaggi S.r.l. - Tutti i diritti riservati.
