# Software Interactivo de Plantas Medicinales del Resguardo Indígena de Muellamués

> **Pueblo Indígena de Los Pastos • Municipio de Guachucal, Nariño, Colombia**  
> **Trabajo de Grado y Retribución Comunitaria • Fondo Álvaro Ulcué Chocué (ICETEX / MinInterior)**  
> **Autor:** David Julián Taimal Poso  
> **Programa:** Ingeniería de Sistemas e Informática — Universidad Nacional de Colombia Sede Medellín  

---

## 🌿 Descripción del Proyecto

Este software interactivo fue desarrollado como producto final del trabajo comunitario comprometido ante el **Cabildo Indígena de Muellamués** y el **Fondo de Comunidades Indígenas Álvaro Ulcué Chocué** del ICETEX. 

Su propósito central es **salvaguardar, digitalizar y poner al alcance pedagógico de la comunidad el conocimiento etnobotánico ancestral** acumulado por mayoras, sabedores, parteras y médicos tradicionales del Resguardo de Muellamués, articulando la riqueza natural del páramo nariñense con la soberanía tecnológica y cultural.

---

## 🌟 Características Principales

1. **Catálogo Etnobotánico Completo (24 Plantas Emblemáticas):**
   - Chilca, Frailejón, Ruda, Ortiga, Llantén, Manzanilla, Romero, Toronjil, Yerbabuena, Caléndula, Sauco, Eucalipto, Cedrón, Altamisa, Chuquiragua, Poleo de Páramo, Borraja, Penco, Sábila, Matico, Valeriana de Páramo, Malva Silvestre, Hierba Mora y Diente de León.
   - Nombres comunes, nombres ancestrales Pastos, clasificación botánica binomial y familias.

2. **Cosmovisión Térmica de los Pastos:**
   - Clasificación de plantas según su energía biocultural: **Cálidas (Calientes)**, **Frescas (Frías)** y **Templadas**.
   - Identificación de tratamientos para dolencias físicas y afecciones culturales propias del territorio: *Mal de Viento*, *Espanto*, *Susto*, *Malora*, baños de posparto y sahumerios ceremoniales con chapil.

3. **Buscador Inteligente en Tiempo Real:**
   - Filtrado simultáneo por síntomas, dolencias comunes (ej. *reumatismo, tos, gastritis, mal aire*), hábitat en Muellamués o nombre botánico.

4. **Accesibilidad Oral Comunitaria (Web Speech API):**
   - Sistema de lectura de viva voz integrado en español andino para que adultos mayores, personas con baja visión o niños de las escuelas del resguardo puedan escuchar el saber medicinal directamente.

5. **Impresión de Fichas de Campo Etnobotánicas:**
   - Formato optimizado para imprimir fichas técnicas botánicas limpias directamente en papel o exportarlas a PDF para talleres educativos y archivos del Cabildo.

6. **Panel de Custodia y Administración del Cabildo (`admin.html`):**
   - Protegido por clave de acceso (`muellamues2026`).
   - Gestión CRUD completa (Crear, Editar, Eliminar plantas).
   - Exportación de la base de datos a formato estándar **JSON** para respaldo en los equipos del Cabildo.
   - Importación de respaldos y restauración del catálogo original.
   - Persistencia local mediante `localStorage` (funciona 100% offline sin costo de servidores).

---

## 🚀 Despliegue en Línea (Vercel / Netlify / GitHub Pages)

El proyecto está diseñado bajo estándares web puros (HTML5 semántico, CSS3 modular y JavaScript ES6), lo que permite desplegarlo de manera gratuita, rápida y permanente en cualquier plataforma estática o serverless.

### Opción 1: Despliegue en Vercel (Recomendado)
1. Instalar la herramienta CLI de Vercel si no la tiene:
   ```bash
   npm i -g vercel
   ```
2. Desde la carpeta `software-interactivo`, ejecutar:
   ```bash
   vercel --prod
   ```
3. Seguir las instrucciones interactivas en consola para vincular su cuenta gratuita de Vercel.

### Opción 2: Despliegue en GitHub Pages
1. Crear un repositorio público en GitHub (ej. `https://github.com/DPosso99/plantas-medicinales`).
2. Subir los archivos de esta carpeta a la rama `main`.
3. En la configuración del repositorio (**Settings** > **Pages**), activar el despliegue desde la rama `main` (raíz `/`).
4. Quedará disponible en `https://dposso99.github.io/plantas-medicinales/`.

---

---

## 🏛️ Símbolos e Identidad Territorial del Resguardo de Muellamués

La plataforma honra la identidad ancestral e institucional del territorio a través de sus insignias oficiales:

1. **Bandera del Resguardo Indígena de Muellamués:**
   - **Blanco (Superior):** Espiritualidad, pureza, nieblas tutelares del páramo andino y paz comunitaria.
   - **Verde (Central):** La Madre Tierra (*Pachamama*), los campos fértiles, las huertas medicinales tradicionales (*Jardín Simancas*) y la soberanía alimentaria.
   - **Negro (Inferior):** La tierra fértil de la chagra nariñense, la firmeza, resistencia y memoria histórica de los mayores.
2. **Emblema Central del Cabildo:**
   - Custodia el **Bastón de Mando** (símbolo sagrado de autoridad comunitaria, justicia propia y autonomía), erigido frente al Sol radiante, los cerros sagrados y las fuentes de agua de páramo.
3. **El Sol de los Pastos:**
   - Estrella milenaria de ocho puntas que sintetiza los solsticios, los equinoccios, las cuatro direcciones y los ciclos agrícolas del altiplano.

---

## 🏛️ Créditos y Agradecimientos

- **Cabildo Indígena de Muellamués** — Gran Territorio de los Pastos.
- **Jardín Botánico Medicinal Simancas** e **IPS Indígena de Muellamués**.
- **Comunidad de Sabedores, Mayores y Mayoras** guardianes de la palabra y la semilla.
- **Fondo Álvaro Ulcué Chocué (ICETEX - Ministerio del Interior)**.
- **Universidad Nacional de Colombia Sede Medellín** — Facultad de Minas.

