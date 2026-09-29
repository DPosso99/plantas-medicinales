/**
 * Base de Datos Etnobotánica de Plantas Medicinales
 * Resguardo Indígena de Muellamués - Guachucal, Nariño (Pueblo Pastos)
 * Proyecto de Grado / Trabajo Comunitario - Fondo Álvaro Ulcué Chocué
 * Autor: David Julián Taimal Poso
 */

const PLANTAS_INICIALES = [
  {
    id: 1,
    nombre_comun: "Chilca",
    nombre_ancestral: "Chilca de páramo / Chilca negra",
    nombre_cientifico: "Baccharis latifolia",
    familia: "Asteraceae",
    calidad: "Cálida (Caliente)",
    categoria: "Espiritual y Tradicional",
    ecosistema: "Rastrojos, zanjones y cercas vivas (2.900 - 3.200 msnm)",
    partes_usadas: "Hojas y brotes tiernos",
    usos_medicinales: [
      "Alivio de dolores articulares y reumatismo por frío",
      "Curación tradicional de 'mal aire' y 'espanto'",
      "Desinflamación de golpes, luxaciones y torceduras",
      "Baños de posparto para calentar el vientre"
    ],
    metodo_preparacion: "Cataplasma tibio con hojas soasadas al fuego untadas de manteca o alcohol; cocimiento para baños corporales combinado con chapil (aguardiente artesanal).",
    posologia: "Aplicar el emplasto tibio en la noche sobre la zona afectada, abrigar con paño de lana. Para baños, 1 vez al día durante 3 días consecutivos.",
    precauciones: "Uso predominantemente externo. No ingerir en infusiones concentradas por su alto contenido de resinas amargas.",
    saber_ancestral: "«La chilca es el abrigo del cuerpo; cuando entra el frío del viento o de la noche, una soasada con manteca o aguardiente saca el aire atrapado en los huesos.» — Sabedores de Simancas",
    imagen_url: "assets/images/chilca.jpg",
    imagen_fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Baccharis_latifolia_-_Flickr_-_Alex_Popovkin%2C_Bahia_%281%29.jpg/640px-Baccharis_latifolia_-_Flickr_-_Alex_Popovkin%2C_Bahia_%281%29.jpg",
    abundancia: "Abundante en todo el resguardo"
  },
  {
    id: 2,
    nombre_comun: "Frailejón",
    nombre_ancestral: "Abuelo del Agua / Flor de la Niebla",
    nombre_cientifico: "Espeletia pycnophylla",
    familia: "Asteraceae",
    calidad: "Fresca / Templada",
    categoria: "Respiratorio",
    ecosistema: "Páramo alto de Guachucal y faldas del Volcán Cumbal (3.200 - 3.800 msnm)",
    partes_usadas: "Hojas secas caídas y resina natural (trementina)",
    usos_medicinales: [
      "Afecciones pulmonares profundas, bronquitis y asma",
      "Tos ferina y catarro de páramo",
      "Dolores reumáticos y enfriamiento muscular",
      "Planta guardiana de las lagunas sagradas y nacimientos de agua"
    ],
    metodo_preparacion: "Infusión suave de una pequeña porción de hoja tierna seca en leche caliente o panela; resina frotada en el pecho.",
    posologia: "Media taza de infusión tibia por la noche antes de acostarse. Friegas de resina 2 veces por semana.",
    precauciones: "Especie protegida y sagrada del páramo. Está prohibido arrancarlo vivo; se recolectan únicamente las hojas basales ya secas caídas de manera respetuosa pidiendo permiso a la montaña.",
    saber_ancestral: "«El frailejón es el abuelo que cuida el agua y la neblina. Sus vellosidades atrapan la vida, y su resina limpia los pulmones del frío de la cumbre.» — Médicos Tradicionales de Muellamués",
    imagen_url: "assets/images/frailejon.jpg",
    imagen_fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Espeletia_pycnophylla_01.jpg/640px-Espeletia_pycnophylla_01.jpg",
    abundancia: "Silvestre en páramos altos"
  },
  {
    id: 3,
    nombre_comun: "Ruda",
    nombre_ancestral: "Ruda bendita / Ruda hembra y macho",
    nombre_cientifico: "Ruta graveolens",
    familia: "Rutaceae",
    calidad: "Muy Cálida (Caliente)",
    categoria: "Espiritual y Tradicional",
    ecosistema: "Huertas y chagras caseras abrigadas de Muellamués",
    partes_usadas: "Sumidades floridas, hojas y tallo",
    usos_medicinales: [
      "Limpias espirituales contra el 'malviento', 'ojo' y 'espanto'",
      "Alivio de cólicos menstruales espasmódicos",
      "Dolor de cabeza producido por corrientes frías",
      "Protección energética de las viviendas y recién nacidos"
    ],
    metodo_preparacion: "Ramillete para sobar el cuerpo (sahumerio o limpia en cruz); infusión muy diluida (media hojita por taza de agua con canela).",
    posologia: "Para limpias: 1 ramillete frotado al atardecer. Para tomas: máximo 1 tacita pequeña al día.",
    precauciones: "TOTALMENTE CONTRAINDICADA en el embarazo (alto poder abortivo y estimulante uterino). No suministrar a niños pequeños de forma interna.",
    saber_ancestral: "«La ruda es la guardiana del hogar. Si una persona viene con mala sombra o mal aire, la ruda marchita absorbe el daño para que no toque a los guaguas (niños).» — Mayora Yerbatera",
    imagen_url: "assets/images/ruda.jpg",
    imagen_fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ruta_graveolens_002.JPG/640px-Ruta_graveolens_002.JPG",
    abundancia: "Cultivada en huertas familiares"
  },
  {
    id: 4,
    nombre_comun: "Ortiga Mayor",
    nombre_ancestral: "Ortiga brava / Pringamoza de monte",
    nombre_cientifico: "Urtica dioica",
    familia: "Urticaceae",
    calidad: "Cálida (Caliente)",
    categoria: "Dolores e Inflamación",
    ecosistema: "Suelos negros fértiles, corrales y zanjones húmedos",
    partes_usadas: "Hojas frescas y raíces",
    usos_medicinales: [
      "Activación de la circulación sanguínea y alivio del entumecimiento",
      "Tratamiento tradicional de artritis y reumatismo",
      "Purificación de la sangre y anemia",
      "Ritual de renovación energética y despertar del cuerpo decaído"
    ],
    metodo_preparacion: "Ortigamiento tópico (frotar suavemente ramas frescas sobre articulaciones adoloridas); infusión de hojas secas (donde pierde el efecto urticante).",
    posologia: "Friegas suaves 1 vez cada 8 días. Infusión: 1 cucharada de hoja seca por litro de agua, tomar 2 vasos diarios.",
    precauciones: "Manipular con cuidado. No aplicar sobre heridas abiertas ni en pieles atópicas sensibles.",
    saber_ancestral: "«El ardor de la ortiga no es castigo sino despertar. Despierta la sangre que se ha enfriado por el viento y quita la pesadez del cuerpo que no quiere levantarse.» — Mayor del Resguardo",
    imagen_url: "assets/images/ortiga.jpg",
    abundancia: "Muy común en zanjones y linderos"
  },
  {
    id: 5,
    nombre_comun: "Llantén Mayor",
    nombre_ancestral: "Parche verde / Hoja de sanación",
    nombre_cientifico: "Plantago major",
    familia: "Plantaginaceae",
    calidad: "Fresca (Fría)",
    categoria: "Piel y Cicatrización",
    ecosistema: "Senderos húmedos, huertas, orillas de acequias",
    partes_usadas: "Hojas maduras frescas",
    usos_medicinales: [
      "Cicatrización rápida de heridas, quemaduras y llagas",
      "Alivio de gastritis, acidez y úlceras estomacales",
      "Desinflamatorio de garganta e infecciones bucales (gargarismos)",
      "Lavados oculares para ojos irritados"
    ],
    metodo_preparacion: "Hojas tibias untadas en aceite o manteca aplicadas como emplasto; jugo fresco machacado o decocción de 3 hojas por pocillo de agua.",
    posologia: "Tomar 1 vaso de cocimiento en ayunas para el estómago durante 9 días; cambiar emplasto cada 12 horas.",
    precauciones: "Lavar minuciosamente las hojas antes de procesarlas. Moderar tomas en personas con estreñimiento crónico.",
    saber_ancestral: "«El llantén es el parche de la tierra: refresca las llagas vivas, asienta el fuego quemante del estómago y cierra las heridas que ningún ungüento puede cerrar.» — Médica Tradicional",
    imagen_url: "assets/images/llanten.jpg",
    abundancia: "Abundante en todo el territorio"
  },
  {
    id: 6,
    nombre_comun: "Manzanilla",
    nombre_ancestral: "Estrella dulce / Flor del sosiego",
    nombre_cientifico: "Matricaria chamomilla",
    familia: "Asteraceae",
    calidad: "Templada / Ligeramente Fresca",
    categoria: "Digestivo",
    ecosistema: "Chagras familiares y Jardín Botánico Simancas",
    partes_usadas: "Flores (cabezuelas florales)",
    usos_medicinales: [
      "Cólicos digestivos en niños y adultos, flatulencias y diarreas",
      "Calmante de nervios, susto estomacal e insomnio leve",
      "Desinflamación de ojos cansados y conjuntivitis",
      "Baños relajantes de niños tras el baño de sol"
    ],
    metodo_preparacion: "Infusión de 1 puñito de flores secas en agua hirviendo tapada por 7 minutos con panela raspada.",
    posologia: "1 taza caliente después de comidas pesadas o antes de dormir.",
    precauciones: "Filtrar muy bien con tela de lienzo si se utiliza para gotas o lavado de ojos.",
    saber_ancestral: "«Una tacita de flor de manzanilla con panela tibia apacigua el susto del estómago y devuelve la tranquilidad al corazón desasosegado.» — Abuela de Muellamués",
    imagen_url: "assets/images/manzanilla.jpg",
    abundancia: "Frecuente en huertos familiares"
  },
  {
    id: 7,
    nombre_comun: "Romero",
    nombre_ancestral: "Hierba de la memoria y la fuerza",
    nombre_cientifico: "Salvia rosmarinus",
    familia: "Lamiaceae",
    calidad: "Cálida (Caliente)",
    categoria: "Dolores e Inflamación",
    ecosistema: "Huertos protegidos de heladas junto a tapiales",
    partes_usadas: "Hojas y sumidades floridas",
    usos_medicinales: [
      "Dolores de cabeza por frío y pesadez cerebral",
      "Estimulación de la memoria, concentración y agudeza mental",
      "Friegas para dolores musculares y reumatismo articular",
      "Fortalecimiento del cuero cabelludo y prevención de la caída"
    ],
    metodo_preparacion: "Macerado de ramas en alcohol o aguardiente artesanal (chapil) durante 15 días para frotaciones; cocimiento capilar.",
    posologia: "Friegas nocturnas en articulaciones o sienes; infusión de 1 ramita pequeña 1 vez al día.",
    precauciones: "Personas con hipertensión arterial alta no deben consumirlo en tomas orales continuas.",
    saber_ancestral: "«El romero aviva el pensamiento y ahuyenta los malos sueños; quien lleva una ramita en el sombrero o el bolsillo camina despierto y protegido del viento frío.» — Sabedor Pastos",
    imagen_url: "assets/images/romero.jpg",
    abundancia: "Cultivado ampliamente"
  },
  {
    id: 8,
    nombre_comun: "Toronjil",
    nombre_ancestral: "Melisa de huerta / Hierba del consuelo",
    nombre_cientifico: "Melissa officinalis",
    familia: "Lamiaceae",
    calidad: "Templada",
    categoria: "Nervios y Vitalidad",
    ecosistema: "Chagras caseras de tierra negra",
    partes_usadas: "Hojas frescas y cogollos",
    usos_medicinales: [
      "Palpitaciones del corazón, taquicardia por susto",
      "Tristeza profunda, congoja y duelo familiar",
      "Insomnio pertinaz y pesadillas",
      "Dolores de estómago provocados por estados de nerviosismo"
    ],
    metodo_preparacion: "Infusión de 5 hojas frescas en agua hirviendo, tapar y agregar unas gotas de limón y miel de páramo.",
    posologia: "1 taza tibia a media tarde y otra al momento de acostarse.",
    precauciones: "No sobrepasar las dosis indicadas si se están tomando medicamentos sedantes recetados.",
    saber_ancestral: "«Cuando el ánimo decae o el susto aprieta el pecho, el toronjil reconforta el espíritu y ayuda a soltar la congoja de los mayores.» — Mayora de la IPS Indígena",
    imagen_url: "assets/images/toronjil.jpg",
    abundancia: "Común en huertos"
  },
  {
    id: 9,
    nombre_comun: "Yerbabuena",
    nombre_ancestral: "Menta del campo / Menta pastusa",
    nombre_cientifico: "Mentha spicata",
    familia: "Lamiaceae",
    calidad: "Fresca",
    categoria: "Digestivo",
    ecosistema: "Orillas de arroyos, acequias y huertos irrigados",
    partes_usadas: "Hojas y tallos tiernos",
    usos_medicinales: [
      "Pesadez de estómago, indigestión y vómitos",
      "Tratamiento tradicional de parásitos intestinales en niños",
      "Dolores de cabeza por calor estomacal",
      "Aromatizante estomacal y refrescante del aliento"
    ],
    metodo_preparacion: "Infusión de hojas recién cortadas en agua o leche tibia con panela.",
    posologia: "1 taza tibia después de las comidas; en ayunas para parásitos durante 3 mañanas.",
    precauciones: "Evitar en casos de reflujo gastroesofágico severo o hernia hiatal.",
    saber_ancestral: "«La yerbabuena no falta en la cocina de los Pastos; quita el empacho de la comida pesada y sosiega las náuseas de los guaguas.» — Tradición oral de Muellamués",
    imagen_url: "assets/images/yerbabuena.jpg",
    abundancia: "Muy común en todas las veredas"
  },
  {
    id: 10,
    nombre_comun: "Caléndula",
    nombre_ancestral: "Botón de oro / Flor maravilla",
    nombre_cientifico: "Calendula officinalis",
    familia: "Asteraceae",
    calidad: "Fresca",
    categoria: "Piel y Cicatrización",
    ecosistema: "Huertas soleadas, jardines comunitarios",
    partes_usadas: "Flores abiertas",
    usos_medicinales: [
      "Cicatrización rápida de cortadas, raspones y quemaduras",
      "Úlceras gástricas y gastritis inflamatoria",
      "Infecciones por hongos en los pies y rozaduras",
      "Regulación de flujos y ciclos menstruales irregulares"
    ],
    metodo_preparacion: "Pomada artesanal con manteca lavada y cera de abejas; infusión de 4 cabezas de flor por jarra de agua.",
    posologia: "Aplicar la pomada dos veces al día en la piel limpia; infusión: 2 tazas al día entre comidas.",
    precauciones: "No ingerir durante los primeros meses de gestación. Probar primero en el antebrazo para descartar alergia.",
    saber_ancestral: "«La flor dorada que cura la carne; donde hay piel rota o quemada por el sol o la helada del páramo, la caléndula la restaura limpia.» — Médicos Tradicionales",
    imagen_url: "assets/images/calendula.jpg",
    abundancia: "Común cultivada"
  },
  {
    id: 11,
    nombre_comun: "Sauco",
    nombre_ancestral: "Árbol sagrado de la curación / Rayán blanco",
    nombre_cientifico: "Sambucus nigra",
    familia: "Adoxaceae",
    calidad: "Cálida (Flores templadas, corteza cálida)",
    categoria: "Respiratorio",
    ecosistema: "Linderos de parcelas, acequias y bordes de camino",
    partes_usadas: "Flores blancas agrupadas y corteza intermedia",
    usos_medicinales: [
      "Gripas fuertes, catarro de montaña y fiebre con escalofríos",
      "Sudorífico poderoso para expulsar la peste del cuerpo",
      "Inflamaciones agudas de garganta y amígdalas",
      "Tos irritativa y congestión de bronquios"
    ],
    metodo_preparacion: "Infusión de flores frescas con limón caliente y panela; cocimiento de corteza para gárgaras.",
    posologia: "Tomar 1 taza bien caliente bien arropado en la cama para sudar la fiebre.",
    precauciones: "Las hojas verdes y bayas crudas no deben consumirse crudas por contener principios amargos tóxicos.",
    saber_ancestral: "«El sauco es el árbol que cobija la casa. Cuando la helada cae y el pecho se tranca de flema, su flor es el remedio bendito para sudar la peste sin recaer.» — Sabedor Mayor",
    imagen_url: "assets/images/sauco.jpg",
    abundancia: "Muy abundante en el paisaje del resguardo"
  },
  {
    id: 12,
    nombre_comun: "Eucalipto",
    nombre_ancestral: "Árbol del vapor / Aromático mayor",
    nombre_cientifico: "Eucalyptus globulus",
    familia: "Myrtaceae",
    calidad: "Muy Cálida (Caliente)",
    categoria: "Respiratorio",
    ecosistema: "Bosques protectores, cerros y laderas de Guachucal",
    partes_usadas: "Hojas maduras adultas (falcadas)",
    usos_medicinales: [
      "Sinusitis, rinitis y obstrucción total de fosas nasales",
      "Vaporizaciones desinfectantes para viviendas en epidemias",
      "Asma por frío y tos con flemas espesas",
      "Alivio de dolores musculares por enfriamiento"
    ],
    metodo_preparacion: "Vahos: hervir 10 hojas en 2 litros de agua en olla de barro, cubrir la cabeza con una toalla e inhalar los vapores.",
    posologia: "Vaporizaciones de 10 minutos por la noche. No salir al frío inmediatamente después del vaho.",
    precauciones: "No acercar demasiado el rostro al vapor hirviente para evitar quemaduras. Evitar en niños menores de 3 años.",
    saber_ancestral: "«El vapor de eucalipto abre las puertas de la respiración trancada. En tiempos de peste o frío recio, purifica la casa entera de las malas miasmas.» — Comunidad de Muellamués",
    imagen_url: "assets/images/eucalipto.jpg",
    abundancia: "Muy abundante en plantaciones y cercas"
  },
  {
    id: 13,
    nombre_comun: "Cedrón",
    nombre_ancestral: "Hierba Luisa de huerto / Limoncillo andino",
    nombre_cientifico: "Aloysia citrodora",
    familia: "Verbenaceae",
    calidad: "Templada",
    categoria: "Digestivo",
    ecosistema: "Huertas protegidas del viento helado",
    partes_usadas: "Hojas aromáticas",
    usos_medicinales: [
      "Digestión lenta, pesadez estomacal y gases retenidos",
      "Espasmos gástricos y cólicos abdominales leves",
      "Tranquilizante suave ante la ansiedad o el susto",
      "Aroma de armonía familiar y hospitalidad tradicional"
    ],
    metodo_preparacion: "Infusión de 4 a 6 hojas por taza de agua hervida, reposar 5 minutos tapada.",
    posologia: "1 taza después de las comidas principales.",
    precauciones: "Planta muy segura. Evitar dosis excesivas durante meses prolongados sin descanso.",
    saber_ancestral: "«El cedrón aromatiza el hogar y suaviza las digestiones difíciles. Es la infusión de la cordialidad que se brinda a quien llega de visita al resguardo.» — Partera de Muellamués",
    imagen_url: "assets/images/cedron.jpg",
    abundancia: "Cultivado en solares familiares"
  },
  {
    id: 14,
    nombre_comun: "Altamisa",
    nombre_ancestral: "Artemisa del páramo / Hierba de limpia",
    nombre_cientifico: "Ambrosia peruviana",
    familia: "Asteraceae",
    calidad: "Muy Cálida (Caliente)",
    categoria: "Espiritual y Tradicional",
    ecosistema: "Orillas de caminos pedregosos y rastrojos soleados",
    partes_usadas: "Hojas y ramas floridas",
    usos_medicinales: [
      "Curación de 'mal viento' y expulsión de malas energías",
      "Dolores de huesos y reumatismo por enfriamiento brusco",
      "Enfriamiento de matriz en mujeres y regularización de la regla",
      "Baños amargos de despojo y descanso corporal"
    ],
    metodo_preparacion: "Macerado de hojas soasadas con alcohol alcanforado para friegas; cocimiento de ramas para baños de asiento.",
    posologia: "Baños de asiento durante 7 días continuos en la noche. Friegas musculares según necesidad.",
    precauciones: "Contraindicada durante el embarazo y lactancia. Uso predominantemente externo.",
    saber_ancestral: "«Planta brava de fuerza para arrancar el frío enquistado en las coyunturas y alejar las malas influencias que traen decaimiento y pesadez.» — Curandero de Muellamués",
    imagen_url: "assets/images/altamisa.jpg",
    abundancia: "Frecuente en rastrojos"
  },
  {
    id: 15,
    nombre_comun: "Chuquiragua",
    nombre_ancestral: "Flor del Caminante / Flor de la Resistencia",
    nombre_cientifico: "Chuquiraga jussieui",
    familia: "Asteraceae",
    calidad: "Cálida",
    categoria: "Nervios y Vitalidad",
    ecosistema: "Cumbres escarpadas y arenales de páramo (3.300 - 4.000 msnm)",
    partes_usadas: "Flores anaranjadas espinosas y tallos leñosos",
    usos_medicinales: [
      "Resistencia a la fatiga extrema del montañés y caminante",
      "Mal de altura (soroche) y dolores de pecho por frío de páramo",
      "Alivio de inflamaciones de próstata y vías urinarias",
      "Estimulante de las defensas y vigor corporal"
    ],
    metodo_preparacion: "Decocción (hervido fuerte durante 8 minutos) de 2 flores secas con panela.",
    posologia: "1 pocillo tibio en la mañana antes de subir a labores de páramo o faenas agrícolas.",
    precauciones: "Por ser espinosa, colar con cuidado. No usar en personas con úlceras sangrantes activas.",
    saber_ancestral: "«La flor que no se dobla ante el hielo. Los antiguos caminantes de los Pastos masticaban sus flores para no sucumbir a la fatiga ni al congelamiento de las cumbres.» — Relato de pastoreo",
    imagen_url: "assets/images/chuquiragua.jpg",
    abundancia: "Exclusiva de páramo alto"
  },
  {
    id: 16,
    nombre_comun: "Poleo de Páramo",
    nombre_ancestral: "Muña silvestre / Poleo frío-caliente",
    nombre_cientifico: "Minthostachys mollis",
    familia: "Lamiaceae",
    calidad: "Cálida (Caliente)",
    categoria: "Digestivo",
    ecosistema: "Peñascos, quebradas y laderas del páramo",
    partes_usadas: "Hojas y espigas florales aromáticas",
    usos_medicinales: [
      "Empacho, dolor de barriga y diarrea causada por frío",
      "Mal de páramo, mareo de montaña y vértigo",
      "Gases estomacales y flatulencias fétidas",
      "Conservación tradicional de papas contra la polilla en bodegas"
    ],
    metodo_preparacion: "Infusión de 1 ramita fresca en agua caliente recién bajada de la candela.",
    posologia: "1 taza después de las comidas o durante viajes por la cordillera.",
    precauciones: "No administrar en cantidades concentradas a mujeres gestantes.",
    saber_ancestral: "«El poleo calienta la barriga cuando el viento la infla y la destiempla. Es el mejor compañero para subir a la cordillera y espantar el mareo.» — Sabedor del Territorio",
    imagen_url: "assets/images/poleo.jpg",
    abundancia: "Común en zonas pedregosas"
  },
  {
    id: 17,
    nombre_comun: "Borraja",
    nombre_ancestral: "Estrella de cielo / Flor azul de la fiebre",
    nombre_cientifico: "Borago officinalis",
    familia: "Boraginaceae",
    calidad: "Fresca",
    categoria: "Respiratorio",
    ecosistema: "Chagras de suelo fértil y zonas hortícolas",
    partes_usadas: "Flores azules y hojas tiernas",
    usos_medicinales: [
      "Brotar la enfermedad en sarampión, viruela y varicela",
      "Fiebres altas y delirios calientes en niños",
      "Bronquitis aguda, catarro y tos con garganta irritada",
      "Depurativo y diurético suave"
    ],
    metodo_preparacion: "Infusión de flores en agua caliente con miel de abejas pura y unas gotas de limón.",
    posologia: "1 taza 3 veces al día mientras persista el cuadro febril o eruptivo.",
    precauciones: "Utilizar preferentemente las flores; evitar tomas de hojas viejas por periodos largos.",
    saber_ancestral: "«Las flores celestes de la borraja brotan la enfermedad hacia afuera; limpian el calor de la sangre en los niños que arden en calentura.» — Partera tradicional",
    imagen_url: "assets/images/borraja.jpg",
    abundancia: "Frecuente en huertos familiares"
  },
  {
    id: 18,
    nombre_comun: "Penco / Cabuya",
    nombre_ancestral: "Maguey sagrado / Árbol de mil usos",
    nombre_cientifico: "Agave americana",
    familia: "Asparagaceae",
    calidad: "Templada / Ligeramente Fresca",
    categoria: "Dolores e Inflamación",
    ecosistema: "Linderos secos, laderas y barrancos erosionados",
    partes_usadas: "Savia del corazón (chawarmishki), pulpa de penca y fibra",
    usos_medicinales: [
      "Dolores severos de artritis y descalcificación ósea",
      "Fortalecimiento pulmonar de personas ancianas",
      "Cicatrización antiséptica y desinfección de llagas",
      "Regulación digestiva y protector intestinal"
    ],
    metodo_preparacion: "Cocimiento de la savia dulce extraída del capado del maguey; pulpa asada aplicada en cataplasmas sobre coyunturas.",
    posologia: "1 pocillo de miel de penco cocida en ayunas durante 15 días.",
    precauciones: "La savia fresca sin hervir puede ocasionar dermatitis intensa por oxalatos de calcio.",
    saber_ancestral: "«El penco es columna del territorio. Su fibra teje el costal y su savia nutre los huesos desgastados de nuestros abuelos que trabajaron la tierra.» — Mayor comunero",
    imagen_url: "assets/images/penco.jpg",
    abundancia: "Abundante en linderos de Muellamués"
  },
  {
    id: 19,
    nombre_comun: "Sábila",
    nombre_ancestral: "Penca protectora / Cristal de agua",
    nombre_cientifico: "Aloe vera",
    familia: "Asphodelaceae",
    calidad: "Muy Fresca (Fría)",
    categoria: "Piel y Cicatrización",
    ecosistema: "Patios abrigados y solares protegidos de heladas",
    partes_usadas: "Cristal interno de la hoja (gel traslúcido)",
    usos_medicinales: [
      "Cicatrización acelerada de quemaduras graves por fuego o sol",
      "Gastritis erosiva, reflujo y úlceras pépticas",
      "Purificación interna y alivio del estreñimiento",
      "Protección energética de la entrada de las casas contra envidias"
    ],
    metodo_preparacion: "Dejar desangrar la penca en agua para retirar la aloína amarilla (yodo amargo); extraer el cristal puro y licuar o aplicar directo.",
    posologia: "1 trozo de cristal en ayunas con jugo de naranja durante 7 días; aplicación tópica 3 veces al día en la piel.",
    precauciones: "Lavar minuciosamente para remover el acíbar amarillo laxante. Contraindicada en el embarazo y en diarreas.",
    saber_ancestral: "«El cristal de la sábila apaga cualquier fuego interior. Se cuelga con cinta roja tras la puerta para llamar la paz y proteger el hogar de miradas pesadas.» — Costumbre ancestral",
    imagen_url: "assets/images/sabila.jpg",
    abundancia: "Cultivada en patios protegidos"
  },
  {
    id: 20,
    nombre_comun: "Matico",
    nombre_ancestral: "Hierba del soldado / Hoja cicatrizante",
    nombre_cientifico: "Piper aduncum",
    familia: "Piperaceae",
    calidad: "Cálida",
    categoria: "Piel y Cicatrización",
    ecosistema: "Zanjones resguardados y orillas de quebradas andinas",
    partes_usadas: "Hojas lanceoladas y espigas",
    usos_medicinales: [
      "Detención inmediata de hemorragias en cortes de machete o azadón",
      "Cicatrización antiséptica de heridas profundas",
      "Lavados ginecológicos y baños de recuperación posparto",
      "Alivio de úlceras varicosas y llagas rebeldes"
    ],
    metodo_preparacion: "Hojas frescas estrujadas y aplicadas directamente sobre la herida que sangra; decocción concentrada para lavados.",
    posologia: "Aplicación inmediata como hemostático; lavados antisépticos 2 veces al día.",
    precauciones: "De uso principalmente tópico. No consumir dosis orales excesivas.",
    saber_ancestral: "«El gran cicatrizante de la montaña. Detiene la sangre al instante y limpia las heridas profundas de machete o espina sin dejar que se pudra la carne.» — Mayor campesino",
    imagen_url: "assets/images/matico.jpg",
    abundancia: "Frecuente en quebradas abrigadas"
  },
  {
    id: 21,
    nombre_comun: "Valeriana de Páramo",
    nombre_ancestral: "Raíz de la calma / Raíz del sueño hondo",
    nombre_cientifico: "Valeriana plantaginea",
    familia: "Caprifoliaceae",
    calidad: "Templada",
    categoria: "Nervios y Vitalidad",
    ecosistema: "Pajonales húmedos del páramo alto de Muellamués",
    partes_usadas: "Raíz y rizomas de fuerte aroma terroso",
    usos_medicinales: [
      "Insomnio pertinaz y dificultad para conciliar el descanso",
      "Ataques de histeria, angustia y temblores nerviosos",
      "Espasmos musculares por tensión y dolor tensional de cuello",
      "Equilibrio del pulso acelerado por estados de susto"
    ],
    metodo_preparacion: "Decocción suave de un fragmento pequeño de raíz machacada hervida durante 5 minutos en agua o leche.",
    posologia: "Media taza antes de ir a dormir. Tomar por periodos cortos de máximo 10 días seguidos.",
    precauciones: "No combinar con bebidas alcohólicas ni con sedantes químicos. No operar herramientas pesadas tras su toma.",
    saber_ancestral: "«La raíz de la valeriana aquieta la mente cuando los pensamientos no dejan reposar al cuerpo. Olor fuerte que duerme el desespero y devuelve la paz.» — Sabedor del Páramo",
    imagen_url: "assets/images/valeriana.jpg",
    abundancia: "Silvestre en pajonales húmedos"
  },
  {
    id: 22,
    nombre_comun: "Malva Silvestre",
    nombre_ancestral: "Malva dulce / Flor de la suavidad",
    nombre_cientifico: "Malva sylvestris",
    familia: "Malvaceae",
    calidad: "Fresca",
    categoria: "Digestivo",
    ecosistema: "Borde de huertas, caminos, acequias y potreros",
    partes_usadas: "Hojas y flores moradas",
    usos_medicinales: [
      "Inflamaciones digestivas, irritación estomacal y estreñimiento leve",
      "Gargarismos para amígdalas irritadas y encías sangrantes",
      "Lavados de piel en bebés para rozaduras e irritaciones",
      "Desinflamación de hemorroides con baños tibios de asiento"
    ],
    metodo_preparacion: "Infusión o maceración en frío de hojas y flores para aprovechar sus mucílagos suavizantes.",
    posologia: "1 taza tibia 2 a 3 veces al día; lavados tópicos tantas veces como se requiera.",
    precauciones: "Planta sumamente noble y segura para todas las edades.",
    saber_ancestral: "«La malva suaviza y desinflama todo lo que esté caliente y enrojecido; es el remedio de las madres para bañar la piel tierna de los recién nacidos.» — Partera de Muellamués",
    imagen_url: "assets/images/malva.jpg",
    abundancia: "Muy común en todo el resguardo"
  },
  {
    id: 23,
    nombre_comun: "Hierba Mora",
    nombre_ancestral: "Mora de monte / Culebrilla",
    nombre_cientifico: "Solanum nigrum",
    familia: "Solanaceae",
    calidad: "Fresca",
    categoria: "Piel y Cicatrización",
    ecosistema: "Rastrojos húmedos, escombros y cercas de cultivo",
    partes_usadas: "Hojas verdes frescas",
    usos_medicinales: [
      "Curación tradicional del herpes zóster ('culebrilla')",
      "Alivio de la erisipela y ardor punzante en la piel",
      "Desinflamación de golpes con calor concentrado",
      "Calmante tópico de dolores neurálgicos superficiales"
    ],
    metodo_preparacion: "Hojas machacadas con una pizca de sal marina y aplicada como emplasto frío directamente sobre la lesión.",
    posologia: "Cambiar el emplasto 2 veces al día, cubriendo con tela de algodón limpia.",
    precauciones: "USO ESTRICTAMENTE EXTERNO. Sus frutos verdes y tomas orales concentradas son tóxicos por solanina.",
    saber_ancestral: "«El emplasto de hierba mora corta la culebrilla y el ardor rabioso de la erisipela cuando la piel arde en fuego vivo.» — Yerbatero tradicional",
    imagen_url: "assets/images/hierbamora.jpg",
    abundancia: "Común en rastrojos húmedos"
  },
  {
    id: 24,
    nombre_comun: "Diente de León",
    nombre_ancestral: "Achicoria amarilla / Amargo purificador",
    nombre_cientifico: "Taraxacum officinale",
    familia: "Asteraceae",
    calidad: "Fresca / Templada",
    categoria: "Depurativo y Renal",
    ecosistema: "Praderas, potreros de pastoreo y caminos",
    partes_usadas: "Raíz profunda y hojas tiernas",
    usos_medicinales: [
      "Depuración del hígado graso e ictericia",
      "Estimulación de la digestión de grasas y vesícula biliar",
      "Eliminación de toxinas y retención de líquidos (diurético natural)",
      "Limpieza de la piel afectada por acné o toxinas acumuladas"
    ],
    metodo_preparacion: "Decocción de la raíz seca (hervir 5 minutos); hojas frescas comidas en ensaladas antes de florecer.",
    posologia: "1 taza de cocimiento en ayunas durante 14 días consecutivos.",
    precauciones: "No consumir en caso de cálculos biliares de gran tamaño u obstrucción de vías biliares sin supervisión.",
    saber_ancestral: "«La flor amarilla que amarga en la boca pero endulza la sangre; limpia el hígado entorpecido por los pesares, las cóleras y los excesos.» — Mayor de Muellamués",
    imagen_url: "assets/images/diente_leon.jpg",
    abundancia: "Muy abundante en praderas y pastizales"
  }
];

// Clave en localStorage para persistencia comunitaria
const STORAGE_KEY = 'plantas_muellamues_v2';

// Función para obtener las plantas actuales (localStorage o iniciales)
function obtenerPlantas() {
  const guardadas = localStorage.getItem(STORAGE_KEY);
  if (guardadas) {
    try {
      return JSON.parse(guardadas);
    } catch (e) {
      console.error('Error parseando plantas de localStorage:', e);
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PLANTAS_INICIALES));
  return PLANTAS_INICIALES;
}

// Función para guardar cambios
function guardarPlantas(plantas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plantas));
}

// Restaurar catálogo original
function reiniciarCatalogo() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PLANTAS_INICIALES));
  return PLANTAS_INICIALES;
}
