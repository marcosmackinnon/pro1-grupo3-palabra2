/* Query String: */
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idCategorias = qsObj.get("idCategorias"); 

/* Llamar a elementos del HTML: */
let padreDetalle = document.querySelector(".padreDetalle")
let categoryDetalle = document.querySelector(".categoryDetalle")








