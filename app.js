// Moi en tant qu'utilisateur je voudrais pouvoir au choix "additioner", 
// "soustraire", "multiplier" ou "diviser" 2 nombres.

// *faire le pseudo code
// *faire le code en JS (sequentiel)
// *faire le code en JS (refactoriser en fonction)
// *integrer les messages d'erreurs

// a := n
// b := n
// result := n
// result := a + b


let result = 0;

function calcul(e) {
    
    let userquerya = Number(document.getElementById('a').value);
    let userquery = document.getElementById('userquery').value;
    let userqueryb = Number(document.getElementById('b').value);
    let affichage = document.getElementById('results');

    if(userquery === "+"){

        result = userquerya + userqueryb;
        affichage.innerHTML = result;
        console.log(result)
        
    }
    else if(userquery === "-"){

        result = userquerya - userqueryb;
        affichage.innerHTML = result;

    }
    else if(userquery === "x"){

        result = userquerya * userqueryb;
        affichage.innerHTML = result;
     
    }
    else if(userquery === "/"){

        result = userquerya / userqueryb;
        affichage.innerHTML = result;

    }
    else{
        console.log("error")
    }
    e.preventDefault()
};

document.getElementById('test').addEventListener("click",calcul);






































// TURNING A STRING INTO A TABLE AND REVERSE IT
// function reverseString(str) {
//     str = str.split(" ").reverse().join("")
//     console.log(str)
//     document.getElementById('results').innerHTML = str;
// };

// const string = "string de test :)"

// reverseString(string);

// VERIFIER SI UN MOT EST PALINDROME
// function palindrome(str) {
//     let strMin = str.toLowerCase();

//     if(strMin.split("").reverse().join("") === strMin) {
//         console.log("yes")
//         document.getElementById('results').innerHTML = `${strMin} est un mot palindrome`;
//     }
//     else {
//         document.getElementById('results').innerHTML = `${strMin} n'est pas un mot palindrome`;
//     }
// }

// const string = "awawa";

// palindrome(string);

//TROUVER LE MOT LE PLUS LONG
// function longestString(str) {
//     let splitStr = str.split(" ");
    
//     for(let i = 0; i < splitStr.length; i++){
//         console.log(splitStr[i].length)
//     }
// };

// const string = "je suis une phrase random mdr topestkek";

// longestString(string);



// function nombreCarre(nombre) {
//     nombre *= nombre
//     console.log(nombre)
//     let result = document.getElementById('results')
//     result.innerHTML = nombre
// }

// nombreCarre(12);

// function catAge(age) {
//     if(age<=8){
//         console.log("you are a coincoin")
//     }
//     else if (age>=9 && age<=11) {
//         console.log("you are a canard")
//     }
//     else {
//         console.log("cadet")
//     }
// };

// catAge(9)


// for(let i=10; i<=10; i++){
//     console.log("hello world " +i)
// }

// let nb = 0
// while(nb<10){
//     nb++;
//     console.log("hello world " +nb)
// }
  


// function calculMoyenne(table) {
//     let b = table.length,
//         c = 0, i;
//     for (i = 0; i < b; i++){
//       c += Number(table[i]);
//     }
//     console.log(c/b)
//   }
  
//   calculMoyenne([8,10,4,12,14]);





// let notes = [8,10,4,12,14]
// let totalNotes = 0
// let moyenne = 0
 
// function calculMoyenne(notes){
//     for(i=0; i<notes.length;i++) {
//         totalNotes = totalNotes + notes[i]
//         let moyenne = totalNotes / notes.length
//         console.log(moyenne)

//         if(moyenne>=9) {
//             console.log("gg wp")
//         }
//         else{
//             console.log("back to school")
//         }
//     }
// }

// calculMoyenne(notes);


// let romainTab = [10,8,6,4,7]
// let julienTab = [9,14,6,12,8]
// let adrienTab = [4,14,15,16,7]
// let romMoyenne = 0;
// let julMoyenne = 0;
// let adriMoyenne = 0;

// function moyenneNote(tableau){
//     let total = 0;
//     for( i=0; i<tableau.length ;i++){   
//         total = total + tableau[i]
//     }
//     return total / tableau.length;
// }

// function passage(moyenne) {
//     if(moyenne <= 10){
//         console.log("go back")
//     }
//     else{
//         console.log("gg")
//     }
// }

// romMoyenne = moyenneNote(romainTab);
// let romain = passage(romMoyenne);
// console.log(romMoyenne);

// julMoyenne = moyenneNote(julienTab);
// julien = passage(julMoyenne);
// console.log(julMoyenne);

// adriMoyenne = moyenneNote(adrienTab);
// julien = passage(adriMoyenne);
// console.log(adriMoyenne);

// let bill_alice = [21,20,18,17,8]; 
// let bill_honk = [21,20,18,17,8,21,20,18,17,8];
// let total_panier_alice = 0;

// function facture(tablo) {

//     let prix_total = 0;

//     for(i=0;i<tablo.length;i++) {
    
//         prix_total = prix_total + tablo[i];
        
//     }

//     return prix_total

// }

// function tva(a) {

//    const tva = 0.2;
//    let add_tva = 0

//     add_tva = a * tva

//     a = a + add_tva

//     return a
   

// }

// total_panier_alice = facture(bill_alice);
// // console.log(total_panier_alice);
// total_panier_alice = tva(total_panier_alice)
// //console.log(total_panier_alice);

// total_panier_honk = facture(bill_honk);
// // console.log(total_panier_honk);
// total_panier_honk = tva(total_panier_honk);
// // console.log(total_panier_honk);
















