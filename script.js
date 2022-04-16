const hasla = ["KOłDRA", "POŚCIEL","SEN","OSIOŁ","LENIWIEC","WYPOCZYNEK","JASKRAWY","MARTWY","SENNY","ODPOCZYNEK"];

function getRandom(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}

document.getElementById("przycisk").addEventListener("click", startNewGame);

var znak = [];

znak[0] = "A";
znak[1] = "Ą";
znak[2] = "B";
znak[3] = "C";
znak[4] = "Ć";
znak[5] = "D";
znak[6] = "E";
znak[7] = "Ę";
znak[8] = "F";
znak[9] = "G";
znak[10] = "H";
znak[11] = "I";
znak[12] = "J";
znak[13] = "K";
znak[14] = "L";
znak[15] = "Ł";
znak[16] = "M";
znak[17] = "N";
znak[18] = "Ń";
znak[19] = "O";
znak[20] = "Ó";
znak[21] = "P";
znak[22] = "Q";
znak[23] = "R";
znak[24] = "S";
znak[25] = "Ś";
znak[26] = "T";
znak[27] = "U";
znak[28] = "V";
znak[29] = "W";
znak[30] = "X";
znak[31] = "Y";
znak[32] = "Z";
znak[33] = "Ż";
znak[34] = "Ź";


function startNewGame() 
{
    document.getElementById("wynik").innerHTML = "";
    traf = [];
    document.getElementById("div3").innerHTML = "<img src='img/krok0.png'>"
    litery = [];
    x = 0;
    z = 0;
    y = 0;
    holder = "";
    strzal = false;
    pudlo = 0;
    


    wordNumber = getRandom(0, hasla.length);
    haslo = hasla[wordNumber];


    for (letter of haslo) 
        {
            litery[x] = letter;
            x++;
        }

    for (let x = 0; x < litery.length; ++x) 
        {
            holder = holder + "-";
        }

    document.getElementById("haslo1").innerHTML = holder;

    var tresc_diva = "";

    for (let z = 0; z <= 34; z++) 
        {
           var element = "lit" + z;
            tresc_diva = tresc_diva + '<div class="znak" style="float:left;" onclick="check(' + z + ')"  id="' + element + '">' + znak[z] + '</div>';
                if ((z + 1) % 7 == 0) 
                {
                tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
                }
        }

    document.getElementById("znaki").innerHTML = tresc_diva;
}
window.onload = startNewGame();


function check(nr) 
{
    strzal = false;
    holder = "";



        for (let x = 0; x < litery.length; ++x) 
        {
            if (litery[x] === znak[nr]) 
            {
                strzal = true;
                traf[x] = znak[nr]
            }
        }




        for (let y = 0; y < litery.length; ++y) 
        {
            if (traf[y] != undefined) 
            {
                holder = holder + traf[y] + "";
            } 
              else 
                {
                    holder = holder + "-";
                }

        }
    document.getElementById("haslo1").innerHTML = holder;
    if (strzal == true) 
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "green";
        document.getElementById(element).style.color = "black";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

    } 
        else 
        {
            var element = "lit" + nr;
            document.getElementById(element).style.background = "red";
            document.getElementById(element).style.color = "black";
            document.getElementById(element).style.border = "3px solid #C00000";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute("onclick", ";");


            pudlo++;
            var obraz = "img/krok" + pudlo + ".png";
            document.getElementById("div3").innerHTML = '<img src="' + obraz + '" alt="" />';

        }



    if (holder == haslo) 
        {
            document.getElementById("wynik").innerHTML = "Wygrałeś!!!!";
        }




    if (pudlo >= 15) 
        {
            document.getElementById("wynik").innerHTML = "Przegrałeś, kliknij przycisk aby spróbować ponownie.";
        }


}