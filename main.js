// a. Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+','-','*','/') qebul edir.
//  Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.

// eded(prompt(),prompt(),prompt());

// function eded(a,b,c) {
//     switch (c) {
//         case "+":
//             alert(a+b)
//             break;
//         case "-":
//             alert(a-b)
//             break;
//         case "*":
//             alert(a*b)
//             break;
//         case "/":
//             alert(a/b)
//             break;
//         default:
//             alert("Yanlisdi")
//             break;
//     }
// }
// ilk iki alertde ededi qeyd edin sonra ise operator


// b.Methodlar yaradirsiz. Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir),
//  ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). Methodlarin adi eyni olmalıdır.

// inputName(prompt("Adinizi qeyd edin:"), prompt("Soyadinizi qeyd edin:"), prompt("Ata adinizi qeyd edin:"));

// function inputName(name, surname, fathersName) {

//     if (surname === "" && fathersName === "") {
//         alert(name);
//     } else if (fathersName === "") {
//         alert(surname + ' ' + name);
//     } else {
//         alert(name[0] + '.' + surname + ' ' + fathersName);
//     }
// }


// c. 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen,
//  100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.

function num(a) {
    var count=0;
    if (a>0 && a<50) {
        for (let i = 1; i <= a; i++) {
            if(i%3===0){
                count++;
            }
        }
    }
    else if (a>50 && a<100){
        for (let i = 1; i <= a; i++) {
            if(i%5===0) {
                count++;
            }
        }
    }
    else {
        for (let i = 1; i <= a; i++) {
            if(i%8===0){
                count++;
            }
        }
    }
    return count;
}
alert(num(prompt()))