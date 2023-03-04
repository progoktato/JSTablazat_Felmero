function Kiszamol() {
    const aOldal = parseFloat(document.getElementById("ID_egyik_befogo").value);
    const bOldal = parseFloat(document.getElementById("ID_masik_befogo").value);
    let eredmeny = Math.round(Math.sqrt(aOldal ** 2 + bOldal ** 2) * 100) / 100;
    document.getElementById("ID_eredmeny").innerHTML = eredmeny;
}
