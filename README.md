# Skate & Tattoo E-commerce

## Descripción
E-commerce de productos de skate y tatuajes desarrollado con React y Firebase. 
Los usuarios pueden explorar productos por categorías, ver detalles, 
agregar al carrito, gestionar cantidades y finalizar la compra con un 
formulario de checkout que guarda la orden en Firestore.

## Demo en producción
 **[Ver aplicación desplegada](https://skatetatto-project.onrender.com)**

## Estructura del proyecto

```plaintext
e-commerce-project/
├── public/
│   └── img/
│       └── Logo.png
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── Cart.css
│   │   ├── CartWidget/
│   │   │   ├── CartWidget.jsx
│   │   │   └── CartWidget.css
│   │   ├── CheckoutForm/
│   │   │   ├── CheckoutForm.jsx
│   │   │   └── CheckoutForm.css
│   │   ├── ItemCount/
│   │   │   ├── ItemCount.jsx
│   │   │   └── ItemCount.css
│   │   ├── ItemDetail/
│   │   │   ├── ItemDetail.jsx
│   │   │   └── ItemDetail.css
│   │   ├── ItemList/
│   │   │   ├── ItemList.jsx
│   │   │   └── ItemList.css
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   ├── containers/
│   │   ├── ItemDetailContainer/
│   │   │   └── ItemDetailContainer.jsx
│   │   └── ItemListContainer/
│   │       ├── ItemListContainer.jsx
│   │       └── ItemListContainer.css
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── themeContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── firebase.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```
## Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con todos los productos |
| `/categoria/skate` | Productos de skate |
| `/categoria/tattoo` | Productos de tatuaje |
| `/producto/:id` | Detalle de un producto |
| `/cart` | Carrito de compras |
| `/checkoutform` | Formulario de finalización de compra |

## Tecnologías utilizadas
- React 18
- React Router DOM (navegación)
- Context API (estado del carrito)
- Firebase / Firestore (base de datos)A
- CSS personalizado (estilo skate/tattoo)

##  Características
- Listado de productos desde Firebase
- Filtrado por categorías (Skate / Tattoo)
- Detalle de producto con contador de unidades
- Carrito de compras con contexto global
- Badge en el ícono del carrito con total de unidades
- Checkout con validación de formulario
- Generación de orden en Firestore

## Instalación
1. Clona el repositorio:
   git clone https://github.com/tu-usuario/ecommerce-skate-tattoo.git

2. Instala las dependencias:
   npm install

3. Configura Firebase:
   - Crea un archivo `.env` en la raíz
   - Agrega las credenciales de Firebase
      VITE_FIREBASE_API_KEY="AIzaSyBSOiob1Q9YAdkQCQbsu2nwX_TboCl8dnY"
      VITE_FIREBASE_AUTH_DOMAIN="e-commerce-skate.firebaseapp.com"
      VITE_FIREBASE_PROJECT_ID="e-commerce-skate"
      VITE_FIREBASE_STORAGE_BUCKET="e-commerce-skate.firebasestorage.app"
      VITE_FIREBASE_MESSAGING_SENDER_ID="839786941504
      VITE_FIREBASE_APP_ID="1:839786941504:web:f8abfc382800518457a3a5"

4. Inicia el servidor de desarrollo:
   npm run dev

##  Autor
**Daniel Felipe Castro** - https://github.com/danielfelipeca98

