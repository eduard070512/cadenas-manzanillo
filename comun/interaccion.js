/* Comportamiento común (JavaScript puro, sin librerías).
   Cada propuesta usa los mismos IDs y le da su propio estilo con CSS. */
(function () {
  "use strict";
  var D = window.CADENAS;
  var $ = function (s) { return document.getElementById(s); };
  var esc = function (t) { return t.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* ---------- Menú móvil y encabezado ---------- */
  var top = document.querySelector(".top");
  var nav = $("nav"), burger = $("burger");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var abierto = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", abierto);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", false); }
    });
  }
  function onScroll() { if (top) top.classList.toggle("is-solid", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Estados ---------- */
  var ulEstados = $("estados");
  if (ulEstados) {
    ulEstados.innerHTML = D.estados.map(function (e) {
      return '<li' + (e === "Colima" ? ' class="is-home"' : "") + ">" + e + "</li>";
    }).join("");
  }

  /* ---------- Valores ---------- */
  var cajaValores = $("valores");
  if (cajaValores) {
    cajaValores.innerHTML = D.valores.map(function (v) {
      return "<div><h4>" + v[0] + "</h4><p>" + v[1] + "</p></div>";
    }).join("");
  }

  /* ---------- Taller: selección de servicios → WhatsApp ---------- */
  var ulServ = $("servicios"), btnTaller = $("btnTaller");
  if (ulServ && btnTaller) {
    ulServ.innerHTML = D.serviciosTaller.map(function (s, i) {
      return '<li><label><input type="checkbox" value="' + i + '"><span>' + s + "</span></label></li>";
    }).join("");
    var textoBase = btnTaller.textContent;
    ulServ.addEventListener("change", function () {
      var sel = Array.prototype.map.call(ulServ.querySelectorAll("input:checked"), function (c) { return D.serviciosTaller[c.value]; });
      if (!sel.length) {
        btnTaller.classList.add("is-off"); btnTaller.textContent = textoBase; btnTaller.href = "#"; return;
      }
      btnTaller.classList.remove("is-off");
      btnTaller.textContent = "Consultar " + sel.length + (sel.length === 1 ? " servicio" : " servicios") + " por WhatsApp";
      btnTaller.href = D.whats(D.whatsTaller, "Hola, me interesa información sobre los siguientes servicios del taller:\n" + sel.map(function (s) { return "- " + s; }).join("\n"));
    });
  }

  /* ---------- Refaccionaria: catálogo con búsqueda, categorías y lista ---------- */
  var cat = $("catalogo");
  if (cat) {
    var buscar = $("buscar"), cats = $("cats"), vacio = $("vacio");
    var lista = $("lista"), listaN = $("listaN"), listaEnviar = $("listaEnviar"), listaLimpiar = $("listaLimpiar");
    var elegidos = [];
    var catActual = "Todas";
    var POR_PAGINA = 12, mostrar = POR_PAGINA;
    var verMas = document.createElement("button");
    verMas.type = "button"; verMas.className = "ver-mas"; verMas.id = "verMas";
    cat.insertAdjacentElement("afterend", verMas);
    verMas.addEventListener("click", function () { mostrar += POR_PAGINA; pintar(); });
    var categorias = ["Todas"].concat(D.refacciones.reduce(function (a, r) { if (a.indexOf(r.cat) < 0) a.push(r.cat); return a; }, []));

    if (cats) {
      cats.innerHTML = categorias.map(function (c) {
        return '<button type="button" data-cat="' + c + '"' + (c === catActual ? ' class="is-on"' : "") + ">" + c + "</button>";
      }).join("");
      cats.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        catActual = b.dataset.cat; mostrar = POR_PAGINA;
        Array.prototype.forEach.call(cats.children, function (x) { x.classList.toggle("is-on", x === b); });
        pintar();
      });
    }

    var normal = function (t) { return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); };

    function pintar() {
      var q = buscar ? normal(buscar.value.trim()) : "";
      var vis = D.refacciones.filter(function (r) {
        return (catActual === "Todas" || r.cat === catActual) && (!q || normal(r.n + " " + r.d + " " + r.cat).indexOf(q) > -1);
      });
      var total = vis.length;
      verMas.hidden = total <= mostrar;
      verMas.textContent = "Ver más refacciones (" + (total - mostrar) + ")";
      vis = vis.slice(0, mostrar);
      cat.innerHTML = vis.map(function (r) {
        var on = elegidos.indexOf(r.n) > -1;
        return '<article class="item' + (on ? " is-sel" : "") + '" data-n="' + esc(r.n) + '">' +
          "<small>" + r.cat + "</small><h5>" + r.n + "</h5><p>" + r.d + "</p>" +
          '<button type="button" aria-pressed="' + on + '">' + (on ? "✓ En tu lista" : "+ Agregar a la lista") + "</button></article>";
      }).join("");
      if (vacio) vacio.hidden = vis.length > 0;
    }

    function actualizarLista() {
      if (!lista) return;
      lista.hidden = elegidos.length === 0;
      listaN.textContent = elegidos.length;
      listaEnviar.href = D.whats(D.whatsRefaccionaria, "Hola, me interesa consultar precio y disponibilidad de las siguientes refacciones:\n" + elegidos.map(function (n) { return "- " + n; }).join("\n"));
    }

    cat.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var n = b.closest(".item").dataset.n;
      var i = elegidos.indexOf(n);
      if (i > -1) elegidos.splice(i, 1); else elegidos.push(n);
      pintar(); actualizarLista();
    });
    if (buscar) buscar.addEventListener("input", function () { mostrar = POR_PAGINA; pintar(); });
    if (listaLimpiar) listaLimpiar.addEventListener("click", function () { elegidos = []; pintar(); actualizarLista(); });
    pintar();
  }

  /* ---------- Año del pie de página ---------- */
  var anio = $("anio"); if (anio) anio.textContent = new Date().getFullYear();

  /* ---------- Animaciones al hacer scroll ---------- */
  var animables = document.querySelectorAll(".sec h2, .sec .split > *, .two > *, .card, .feat, .mv__item, .div-card, .bento > *, [data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    animables.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }
})();
