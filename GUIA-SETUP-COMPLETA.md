# 📘 GUÍA COMPLETA - English Planner PDF Only

## 📁 ESTRUCTURA DEL PROYECTO

```
English-Planner-PDF-Only/
├── .gitignore
├── README.md
├── vercel.json
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── public/
    │   ├── manifest.json
    │   ├── icon-192x192.png (DEBES CREARLO)
    │   └── icon-512x512.png (DEBES CREARLO)
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── lib/
        │   └── utils.js
        ├── context/
        │   └── PlannerContext.jsx
        ├── services/
        │   └── exportToPDF.js
        ├── pages/
        │   └── PreviewPage.js
        └── components/
            ├── EditableTextarea.jsx
            └── ui/
                ├── button.jsx
                ├── card.jsx
                ├── tabs.jsx
                ├── badge.jsx
                ├── separator.jsx
                └── input.jsx
```

---

## 🎯 PASOS PARA CREAR EL PROYECTO

### MÉTODO 1: Crear directamente en GitHub (RECOMENDADO PARA TI)

#### PASO 1: Crear el repositorio
1. Ve a: https://github.com/new
2. Repository name: `English-Planner-PDF-Only`
3. Description: `English Teachers Planner - PDF Export Only Version`
4. Public
5. NO marcar "Add README"
6. Click "Create repository"

#### PASO 2: Crear estructura de carpetas en GitHub
1. Click "creating a new file"
2. En el nombre escribe: `frontend/src/.gitkeep`
3. Commit: "Initial structure"

#### PASO 3: Subir archivos raíz
Ve subiendo uno por uno desde los archivos que descargaste:

**Archivos en la raíz:**
- `.gitignore`
- `README.md`
- `vercel.json`

**Cómo subir:**
1. Click "Add file" → "Create new file"
2. Nombre: `.gitignore`
3. Copiar contenido del archivo descargado
4. Commit changes

#### PASO 4: Subir archivos de frontend/
Repetir el proceso para cada archivo, usando la ruta completa:

**Ejemplo para package.json:**
- Nombre: `frontend/package.json`
- Copiar contenido
- Commit

**Lista de archivos a subir:**
```
frontend/index.html
frontend/package.json
frontend/vite.config.js
frontend/tailwind.config.js
frontend/postcss.config.js
frontend/public/manifest.json
frontend/src/main.jsx
frontend/src/App.jsx
frontend/src/index.css
frontend/src/lib/utils.js
frontend/src/context/PlannerContext.jsx
frontend/src/services/exportToPDF.js
frontend/src/pages/PreviewPage.js
frontend/src/components/EditableTextarea.jsx
frontend/src/components/ui/button.jsx
frontend/src/components/ui/card.jsx
frontend/src/components/ui/tabs.jsx
frontend/src/components/ui/badge.jsx
frontend/src/components/ui/separator.jsx
frontend/src/components/ui/input.jsx
```

---

### MÉTODO 2: Desde tu computadora con PowerShell

```powershell
# 1. Crear carpeta del proyecto
cd Desktop
mkdir English-Planner-PDF-Only
cd English-Planner-PDF-Only

# 2. Crear estructura de carpetas
mkdir frontend
cd frontend
mkdir src, public, "src\lib", "src\context", "src\services", "src\pages", "src\components", "src\components\ui"

# 3. Copiar archivos descargados a sus ubicaciones
# (Copiar manualmente desde C:\Users\josew\Downloads a las carpetas correspondientes)

# 4. Inicializar git
cd ..
git init
git add .
git commit -m "feat: initial PDF-only planner"

# 5. Conectar con GitHub
git remote add origin https://github.com/josewhite72-beep/English-Planner-PDF-Only.git
git branch -M main
git push -u origin main
```

---

## 📋 MAPA DE ARCHIVOS (dónde poner cada archivo descargado)

| Archivo descargado | Ubicación en el proyecto |
|-------------------|-------------------------|
| `.gitignore` | `/.gitignore` |
| `README.md` | `/README.md` |
| `vercel.json` | `/vercel.json` |
| `package.json` | `/frontend/package.json` |
| `vite.config.js` | `/frontend/vite.config.js` |
| `tailwind.config.js` | `/frontend/tailwind.config.js` |
| `postcss.config.js` | `/frontend/postcss.config.js` |
| `index.html` | `/frontend/index.html` |
| `manifest.json` | `/frontend/public/manifest.json` |
| `main.jsx` | `/frontend/src/main.jsx` |
| `App.jsx` | `/frontend/src/App.jsx` |
| `index.css` | `/frontend/src/index.css` |
| `utils.js` | `/frontend/src/lib/utils.js` |
| `PlannerContext.jsx` | `/frontend/src/context/PlannerContext.jsx` |
| `exportToPDF.js` | `/frontend/src/services/exportToPDF.js` |
| `PreviewPage.js` | `/frontend/src/pages/PreviewPage.js` |
| `EditableTextarea.jsx` | `/frontend/src/components/EditableTextarea.jsx` |
| `button.jsx` | `/frontend/src/components/ui/button.jsx` |
| `card.jsx` | `/frontend/src/components/ui/card.jsx` |
| `tabs.jsx` | `/frontend/src/components/ui/tabs.jsx` |
| `badge.jsx` | `/frontend/src/components/ui/badge.jsx` |
| `separator.jsx` | `/frontend/src/components/ui/separator.jsx` |
| `input.jsx` | `/frontend/src/components/ui/input.jsx` |

---

## ⚙️ DESPUÉS DE SUBIR TODO

### En tu computadora:
```powershell
cd C:\Users\josew\Desktop\English-Planner-PDF-Only\frontend
npm install
npm run dev
```

### Para deployar en Vercel:
1. Ve a: https://vercel.com/new
2. Click "Import Git Repository"
3. Selecciona: `English-Planner-PDF-Only`
4. Configuración:
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

---

## 🎨 IMPORTANTE: ICONOS PWA

Necesitas crear 2 iconos:
- `frontend/public/icon-192x192.png` (192x192 px)
- `frontend/public/icon-512x512.png` (512x512 px)

**Puedes usar:**
- https://www.canva.com (crear icono simple)
- https://favicon.io/favicon-generator/ (generar desde texto)
- O copiar los del proyecto antiguo si los tienes

---

## ✅ CHECKLIST FINAL

Antes de hacer deploy, verifica:

- [ ] Todos los archivos están en sus carpetas correctas
- [ ] package.json tiene jspdf y jspdf-autotable
- [ ] Los iconos PWA están en /frontend/public/
- [ ] `npm install` corre sin errores
- [ ] `npm run dev` abre la app en localhost
- [ ] PreviewPage.js dice "Export PDF" (no "Export Word")
- [ ] Git está inicializado y pusheado a GitHub
- [ ] Vercel está conectado al repo

---

## 🆘 TROUBLESHOOTING

**Error: "Cannot find module '@/lib/utils'"**
- Verifica que vite.config.js tiene el alias configurado
- Verifica que utils.js está en src/lib/utils.js

**Error: "jsPDF is not defined"**
- Verifica que package.json tiene "jspdf": "^2.5.2"
- Corre `npm install` de nuevo

**Error en Vercel: "Build failed"**
- Verifica Root Directory: `frontend`
- Verifica Build Command: `npm run build`
- Verifica Output Directory: `dist`

**Botón sigue diciendo "Export Word"**
- Verifica que PreviewPage.js tiene exportDocx: 'Exportar PDF'
- Limpia caché: Ctrl+Shift+Delete
- Prueba en modo incógnito

---

## 📞 SOPORTE

Si algo falla, revisa:
1. GitHub tiene todos los archivos
2. npm install corrió sin errores
3. vite.config.js tiene el alias '@' configurado
4. Vercel apunta a la carpeta `frontend`

¡Listo! 🚀
