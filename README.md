diff --git a/inmobiliaria/README.md b/inmobiliaria/README.md
index 7959ce4269342e8ede1d06bded69ec800d8503d9..1023f2cb07f21617a067da30ac4acf9657d275d3 100644
--- a/inmobiliaria/README.md
+++ b/inmobiliaria/README.md
@@ -1,69 +1,21 @@
-# React + TypeScript + Vite
+# Urban Nest UI
 
-This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
+Interfaz de ejemplo para una inmobiliaria construida con React 18, Vite y TypeScript.
 
-Currently, two official plugins are available:
+## Scripts
 
-- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
+- `npm install`
+- `npm run dev` para entorno de desarrollo
+- `npm run build` para compilar
 
-## Expanding the ESLint configuration
+## Estructura
 
-If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:
+- `public/images` recursos estáticos
+- `src/components` componentes compartidos
+- `src/pages` vistas de enrutamiento
+- `src/data` datos mock
+- `src/styles/globals.css` estilos globales y Tailwind
 
-```js
-export default tseslint.config([
-  globalIgnores(['dist']),
-  {
-    files: ['**/*.{ts,tsx}'],
-    extends: [
-      // Other configs...
+## Notas de diseño
 
-      // Remove tseslint.configs.recommended and replace with this
-      ...tseslint.configs.recommendedTypeChecked,
-      // Alternatively, use this for stricter rules
-      ...tseslint.configs.strictTypeChecked,
-      // Optionally, add this for stylistic rules
-      ...tseslint.configs.stylisticTypeChecked,
-
-      // Other configs...
-    ],
-    languageOptions: {
-      parserOptions: {
-        project: ['./tsconfig.node.json', './tsconfig.app.json'],
-        tsconfigRootDir: import.meta.dirname,
-      },
-      // other options...
-    },
-  },
-])
-```
-
-You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:
-
-```js
-// eslint.config.js
-import reactX from 'eslint-plugin-react-x'
-import reactDom from 'eslint-plugin-react-dom'
-
-export default tseslint.config([
-  globalIgnores(['dist']),
-  {
-    files: ['**/*.{ts,tsx}'],
-    extends: [
-      // Other configs...
-      // Enable lint rules for React
-      reactX.configs['recommended-typescript'],
-      // Enable lint rules for React DOM
-      reactDom.configs.recommended,
-    ],
-    languageOptions: {
-      parserOptions: {
-        project: ['./tsconfig.node.json', './tsconfig.app.json'],
-        tsconfigRootDir: import.meta.dirname,
-      },
-      // other options...
-    },
-  },
-])
-```
+Se utiliza TailwindCSS con un esquema de color basado en `--brand: #4913EC`. Los íconos provienen de Material Symbols y las fuentes de Google Fonts.
