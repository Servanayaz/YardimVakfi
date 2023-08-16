function alertShow(mesaj){
    alert(mesaj);
}

function btnClick(){
    addRow();
}

function addRow(){
    var tbl=document.getElementById("mmytable");
    var tr = tbl.insertRow();
    var tdsira = tr.insertCell();
    var tdisim = tr.insertCell();
    var tdsoyad = tr.insertCell();
    var tdtelefon = tr.insertCell();
    var tdadres = tr.insertCell();
    var tdemail = tr.insertCell();
    var tdhastane = tr.insertCell();
    var tdrahatsizlik = tr.insertCell();

    var isim = document.getElementById("isim");
    var soyad = document.getElementById("soyad");
    var telefon = document.getElementById("telefon");
    var adres = document.getElementById("adres");
    var email = document.getElementById("email");
    var hastane = document.getElementById("hastane");
    var rahatsizlik = document.getElementById("rahatsizlik");


    tdsira.appendChild(document.createTextNode("1"));
    tdisim.appendChild(document.createTextNode(isim.value));
    tdsoyad.appendChild(document.createTextNode(soyad.value));
    tdtelefon.appendChild(document.createTextNode(telefon.value));
    tdadres.appendChild(document.createTextNode(adres.value));
    tdemail.appendChild(document.createTextNode(email.value));
    tdhastane.appendChild(document.createTextNode(hastane.value));
    tdrahatsizlik.appendChild(document.createTextNode(rahatsizlik.value));

    isim.value="";
    soyad.value="";
    telefon.value="";
    adres.value="";
    email.value="";
    hastane.value="";
    rahatsizlik.value="";


    tr.appendChild(tdsira);
    tr.appendChild(tdisim);
    tr.appendChild(tdsoyad);
    tr.appendChild(tdtelefon);
    tr.appendChild(tdadres);
    tr.appendChild(tdemail);
    tr.appendChild(tdhastane);
    tr.appendChild(tdrahatsizlik);

    table.appendChild(tr);
    

}