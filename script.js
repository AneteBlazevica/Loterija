const vardi=["Sintija Kociņa", "Elza Lapiņa","Mārtiņš Krūmiņš","Liene Bērziņa", "Jānis Liepiņš"] // const, masīvi (nemainīgs)
const balvas=["Telefons","Dators","Krekls","Ceļojums","Pulkstenis"]
const naudaKopa=1000000; //kopējā summa
let uzvaretajuSkaits=5; //mainīgie attiecas uz vienu kādu sadaļu
let rand= Math.random()*5 //Nejauši izvēlēsies 5 cilvēkus
rand=Math.floor(rand); //noapaļo uz leju
console.log(vardi[rand]); //izvada konsolē