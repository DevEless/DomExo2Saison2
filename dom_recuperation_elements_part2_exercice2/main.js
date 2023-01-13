let h3Child = document.getElementsByTagName('div')[0]
console.log(h3Child.firstElementChild)

let niv3 = document.getElementsByTagName('div')[0].children
console.log(niv3[5])

let niv3Pre = document.getElementsByTagName('div')[0].children
console.log(niv3Pre[4])

let petitPara = document.getElementsByTagName('p')[0]
console.log(petitPara.nextElementSibling)

let elements = document.querySelectorAll(".important");
console.log(elements[0].parentNode);
console.log(elements[1].parentNode);
console.log(elements[2].parentNode);

let impo2 = document.getElementsByClassName('listElement').firstElementChild
console.log(impo2)

let importantElements = document.querySelectorAll(".important");
let lastImportantElement = importantElements[importantElements.length-1];
console.log(lastImportantElement.nextSibling);

console.log(document.getElementsByTagName('span')[document.getElementsByTagName('span').length-1].parentElement.previousElementSibling)

console.log(document.getElementsByTagName('span')
[document.getElementsByTagName('span').length-1].firstElementChild.parentElement)

let element = document.querySelector(".grandParagraphe");
console.log(element);

let lis = document.getElementsByTagName("li");
for (let i = 0; i < lis.length; i++) {
  console.log(lis[i]);
}




