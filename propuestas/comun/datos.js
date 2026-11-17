/* Datos compartidos por las 3 propuestas. Editar aquí actualiza todas las versiones. */
window.CADENAS = {
  telefono: "314 138 22 85",
  telefonoLink: "tel:+523141382285",
  correo: "ventasts@gpcadenas.com",
  whatsRefaccionaria: "5213141382285",
  whatsTaller: "5213143536488",
  direccion: "Atún 11-12, Valle de las Garzas, 28219 Manzanillo, Col.",
  mapa: "https://www.google.com/maps?q=19.0870384,-104.2930196&z=17&output=embed",
  mapaLink: "https://maps.google.com/?q=19.0870384,-104.2930196",

  serviciosTaller: [
    "Cambio de aceite y filtros",
    "Alineación y balanceo de llantas",
    "Revisión y ajuste de frenos",
    "Mantenimiento del sistema de suspensión",
    "Diagnóstico del sistema eléctrico",
    "Cambio de bujías y afinación completa",
    "Reparación de radiador y sistema de enfriamiento",
    "Revisión de transmisión y dirección"
  ],

  estados: [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas",
    "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México",
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit",
    "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí",
    "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
  ],

  valores: [
    ["Servicio", "Brindamos excelencia en cada uno de los servicios que realizamos."],
    ["Trabajo en equipo", "Nos vinculamos con nuestros clientes en todo el proceso logístico."],
    ["Transparencia", "Actuamos con integridad, honestidad y claridad en el seguimiento de cada mercancía."],
    ["Responsabilidad", "Estamos comprometidos con la confianza de nuestros clientes."],
    ["Puntualidad", "Garantizamos la entrega en tiempo y forma de cada mercancía."],
    ["Confianza", "Damos respaldo total en cada envío y entrega."]
  ],

  /* cat: categoría para filtrar el catálogo */
  refacciones: [
    { n: "Bolsas de aire", d: "Componentes clave para la suspensión neumática de tractocamiones.", cat: "Suspensión y frenos" },
    { n: "Válvulas niveladoras", d: "Regulan la altura de la suspensión neumática.", cat: "Suspensión y frenos" },
    { n: "Varillas niveladoras", d: "Conectan válvulas con suspensión para mantener la altura.", cat: "Suspensión y frenos" },
    { n: "Válvulas de descarga rápida", d: "Mejoran tiempos de respuesta del sistema de frenos neumáticos.", cat: "Suspensión y frenos" },
    { n: "Rotochambers", d: "Cámaras de freno neumático para camiones pesados.", cat: "Suspensión y frenos" },
    { n: "Tambores", d: "Componentes del sistema de frenos traseros.", cat: "Suspensión y frenos" },
    { n: "Baleros", d: "Rodamientos que reducen la fricción en partes móviles.", cat: "Suspensión y frenos" },
    { n: "Retenes", d: "Sellan ejes rotativos para evitar fugas de aceite o grasa.", cat: "Suspensión y frenos" },
    { n: "Rines nuevos y usados", d: "Rines metálicos para camiones, varios tamaños disponibles.", cat: "Suspensión y frenos" },
    { n: "Tapas de maza", d: "Cubiertas para proteger la maza de rueda.", cat: "Suspensión y frenos" },

    { n: "Filtros de diésel", d: "Filtran impurezas del combustible para proteger el sistema de inyección.", cat: "Filtros y lubricantes" },
    { n: "Filtros de aire", d: "Evitan la entrada de polvo y contaminantes al motor.", cat: "Filtros y lubricantes" },
    { n: "Filtros de aceite", d: "Mantienen el aceite libre de partículas, prolongando la vida del motor.", cat: "Filtros y lubricantes" },
    { n: "Filtros cartucho", d: "Diseño interno de alta eficiencia para sistemas de filtrado específicos.", cat: "Filtros y lubricantes" },
    { n: "Aceite para motor", d: "Lubrica y protege componentes internos del motor.", cat: "Filtros y lubricantes" },
    { n: "Aceite para diferencial", d: "Diseñado para soportar altas presiones en sistemas de transmisión.", cat: "Filtros y lubricantes" },
    { n: "Aceite para dirección hidráulica", d: "Garantiza un funcionamiento suave y eficiente del sistema de dirección.", cat: "Filtros y lubricantes" },
    { n: "Anticongelante (garrafas)", d: "Protege el sistema de enfriamiento contra sobrecalentamiento y congelamiento.", cat: "Filtros y lubricantes" },
    { n: "Urea (DEF)", d: "Agente para reducción de emisiones en motores diésel.", cat: "Filtros y lubricantes" },
    { n: "Aditivo para diésel", d: "Mejora el rendimiento del combustible y la limpieza del sistema.", cat: "Filtros y lubricantes" },
    { n: "Aditivo para aceite", d: "Extiende la vida útil del aceite y reduce la fricción.", cat: "Filtros y lubricantes" },
    { n: "Aflojatodo", d: "Lubricante penetrante para liberar piezas oxidadas o atascadas.", cat: "Filtros y lubricantes" },
    { n: "Gas para clima (1 kg y 360 g)", d: "Refrigerante para aire acondicionado automotriz.", cat: "Filtros y lubricantes" },

    { n: "Mangueras para turbo", d: "Resistentes al calor y presión, conectan el turbo con el motor.", cat: "Mangueras y conexiones" },
    { n: "Mangueras armadas", d: "Mangueras listas para instalación con terminales.", cat: "Mangueras y conexiones" },
    { n: "Manguera plástica (varias medidas)", d: "Tubos plásticos para usos múltiples en tractocamión.", cat: "Mangueras y conexiones" },
    { n: "Manguera de servicio espiral azul y roja", d: "Mangueras flexibles para conexiones entre tracto y remolque.", cat: "Mangueras y conexiones" },
    { n: "Abrazaderas para turbo", d: "Sujetadores resistentes que aseguran las mangueras del turbo.", cat: "Mangueras y conexiones" },
    { n: "Abrazaderas para escape", d: "Fijan componentes del sistema de escape con alta tolerancia térmica.", cat: "Mangueras y conexiones" },
    { n: "Abrazaderas sin fin", d: "Versátiles para sujeción de mangueras en distintas aplicaciones.", cat: "Mangueras y conexiones" },
    { n: "Abrazaderas Dixon reforzadas", d: "Abrazaderas industriales de alta presión y resistencia.", cat: "Mangueras y conexiones" },
    { n: "Puerquitos", d: "Acoples neumáticos entre tracto y remolque.", cat: "Mangueras y conexiones" },
    { n: "Unidores rápidos de plástico y bronce", d: "Conectores rápidos para mangueras o líneas neumáticas.", cat: "Mangueras y conexiones" },
    { n: "Conexiones varias", d: "Piezas para unir diferentes tipos de mangueras o tuberías.", cat: "Mangueras y conexiones" },
    { n: "Tapones para radiador", d: "Sellan el radiador y controlan la presión interna.", cat: "Mangueras y conexiones" },
    { n: "Tapones para tanque de diésel", d: "Evitan fugas y contaminación en el tanque.", cat: "Mangueras y conexiones" },
    { n: "Tapones para tanque recuperador", d: "Tapa para el sistema auxiliar de refrigeración.", cat: "Mangueras y conexiones" },
    { n: "Ventiladores", d: "Ventiladores para enfriamiento de motor o cabina.", cat: "Mangueras y conexiones" },

    { n: "Focos (H11, H7, H4, etc.)", d: "Lámparas estándar para faros de vehículos pesados.", cat: "Eléctrico e iluminación" },
    { n: "Plafones LED e incandescentes", d: "Iluminación para caja o cabina, varios modelos.", cat: "Eléctrico e iluminación" },
    { n: "Lámparas", d: "Amplia variedad para iluminación del vehículo o caja.", cat: "Eléctrico e iluminación" },
    { n: "Fusibles", d: "Protegen circuitos eléctricos de sobrecargas.", cat: "Eléctrico e iluminación" },
    { n: "Terminales", d: "Conectores eléctricos para cables de batería o instalación.", cat: "Eléctrico e iluminación" },
    { n: "Relevadores", d: "Interruptores eléctricos de alta corriente para control de sistemas.", cat: "Eléctrico e iluminación" },
    { n: "Cable macho", d: "Conectores eléctricos para interconexión de remolque.", cat: "Eléctrico e iluminación" },
    { n: "Arrancador", d: "Motor auxiliar para iniciar la marcha del motor principal.", cat: "Eléctrico e iluminación" },
    { n: "Limpia contactos", d: "Limpia circuitos eléctricos sin dejar residuos.", cat: "Eléctrico e iluminación" },

    { n: "Llave extractora para filtros", d: "Herramienta para desmontar filtros de manera segura.", cat: "Herramientas" },
    { n: "Desarmadores", d: "Herramientas manuales para tornillos de distintos tipos.", cat: "Herramientas" },
    { n: "Llaves combinadas", d: "Herramientas dobles (abierta y estrella) para mecánica general.", cat: "Herramientas" },
    { n: "Matracas", d: "Herramientas para apriete rápido con dados intercambiables.", cat: "Herramientas" },
    { n: "Sargentos", d: "Prensas para fijar piezas durante reparaciones o ensamblado.", cat: "Herramientas" },
    { n: "Medidores de presión", d: "Instrumentos para medir presión de aire o fluidos.", cat: "Herramientas" },
    { n: "Piedra para pulir", d: "Accesorio abrasivo para dar acabado a superficies.", cat: "Herramientas" },

    { n: "Bandas de amarre", d: "Correas de tensión para asegurar la carga.", cat: "Carga y seguridad" },
    { n: "Cadenas armadas grado 70", d: "Cadenas resistentes para asegurar cargas pesadas.", cat: "Carga y seguridad" },
    { n: "Lonas de doble semirremolque y exceso de dimensiones", d: "Lonas de advertencia para seguridad en carga especial.", cat: "Carga y seguridad" },
    { n: "Conos naranjas de seguridad", d: "Para señalización vial o de zonas de trabajo.", cat: "Carga y seguridad" },
    { n: "Cinta negra", d: "Cinta adhesiva multiusos de alta resistencia.", cat: "Carga y seguridad" },
    { n: "Cinta gris", d: "Cinta ducto para reparaciones rápidas y provisionales.", cat: "Carga y seguridad" },
    { n: "Cinta doble cara", d: "Adhesiva en ambos lados para fijación sin tornillos.", cat: "Carga y seguridad" },
    { n: "Estopa", d: "Fibra para limpieza mecánica o absorción de aceites.", cat: "Carga y seguridad" },
    { n: "Aromatizantes varios", d: "Variedad de fragancias para la cabina del tracto.", cat: "Carga y seguridad" }
  ]
};

/* Utilidad común: arma un enlace de WhatsApp con mensaje */
window.CADENAS.whats = function (numero, mensaje) {
  return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
};
