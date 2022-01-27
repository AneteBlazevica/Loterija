const vardi=["Sintija Kociņa", "Elza Lapiņa","Mārtiņš Krūmiņš","Liene Bērziņa", "Jānis Liepiņš"] // const, masīvi (nemainīgs)
const balvas=["Telefons","Dators","Krekls","Ceļojums","Pulkstenis"]
const naudaKopa=1000000; //kopējā summa
let uzvaretajuSkaits=5; //mainīgie attiecas uz vienu kādu sadaļu
let rindas = document.querySelector('.rindas');//atlasītājs
rindas.innerHTML = ' ';


for (let i = 0; i <uzvaretajuSkaits; i++){
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju

    let uzvaretajs = vardi[rand];//izvada konsolē
    rindas.innerHTML +=`
    <tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    </tr>`
}