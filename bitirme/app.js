function alertShow(mesaj){
    alert(mesaj);
}

function btnClick(){
    addRow();
}

function addRow(){
    var tbl=document.getElementById("mytable");
    var tr = tbl.insertRow();
    var tdsira = tr.insertCell();
    var tdisim = tr.insertCell();
    var tdsoyad = tr.insertCell();
    var tdbagis = tr.insertCell();

    var isim = document.getElementById("isim");
    var soyad = document.getElementById("soyad");
    var bagis = document.getElementById("bagis");

    tdsira.appendChild(document.createTextNode("1"));
    tdisim.appendChild(document.createTextNode(isim.value));
    tdsoyad.appendChild(document.createTextNode(soyad.value));
    tdbagis.appendChild(document.createTextNode(bagis.value));

    isim.value="";
    soyad.value="";
    bagis.value="";
    tel.value="";
    cvv.value="";
    kno.value="";
    skt.value="";


    tr.appendChild(tdsira);
    tr.appendChild(tdisim);
    tr.appendChild(tdsoyad);
    tr.appendChild(tdbagis);

    table.appendChild(tr);
    

}