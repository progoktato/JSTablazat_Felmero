function SorSzamValtozas() {
    document.getElementById("ID_span_sorok_szama").innerHTML = document.getElementById("ID_sorok_szama").value;
}

function CellaSzamValtozas() {
    document.getElementById("ID_span_cellak_szama").innerHTML = document.getElementById("ID_cellak_szama").value;
}

function Letrehoz() {
    const sorokSzama = document.getElementById("ID_sorok_szama").value;
    const cellakSzama = document.getElementById("ID_cellak_szama").value;

    const tablazat = document.getElementById("ID_tablazat");
    for (let sorIndex = 0; sorIndex < sorokSzama; sorIndex++) {
        const TRelem = document.createElement("tr");
        for (let cellaIndex = 0; cellaIndex < cellakSzama; cellaIndex++) {
            let cellaElem;
            if (sorIndex == 0 && document.getElementById("ID_elso_sor_kiemelt").checked) {
                cellaElem = document.createElement("th");
            }
            else {
                cellaElem = document.createElement("td");
            }
            TRelem.appendChild(cellaElem);
        }
        tablazat.appendChild(TRelem);
    }
}