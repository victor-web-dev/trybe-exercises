



//1 questao
// let n1 = "****************";
// for(let i = 0;i<6; i++){
//     console.log(n1);
// }

//2 questao
//let n2 = "*";
// for(let i=0;i<5;i++){
//     console.log(n2);
//     n2 += "*";
    
// }

//3 questao

// let n3 = '';

// for(let i = 0; i<5; i++){
//     let vazio = '';
//     n3 += '*'
//     for(let j = 5-i; j > 0; j--){
//         vazio += ' ';
//     }
    
//     console.log(vazio + n3);
// }


// questao 4
let n4 = '';

for(let i = 0; i<5; i++){
    let vazio = '';
    n4 += '*';
    for(let j = 5-i; j > 0; j--){
        vazio += ' ';
    }
    
    console.log(vazio + n4);
    n4 += '*';
}
