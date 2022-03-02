let base = [{
  name: "Ivancheg",
  age: "Age 22",
  img: "https://st2.depositphotos.com/4431055/7495/i/600/depositphotos_74950191-stock-photo-men-latin-american-and-hispanic.jpg",
  profession: "Profession: It-specialist",
  resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
},
{
  name: "Idai",
  age: "Age 19",
  img: "https://www.komarov.design/content/images/2020/11/image-4.jpeg ",
  profession: "Profession: It-specialist",
  resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
},
{
  name: "Clara",
  age: "Age 19",
  img: "https://bigpicture.ru/wp-content/uploads/2018/12/100faces00.jpg",
  profession: "Profession: front-end specialist",
  resume: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est, alias laboriosam voluptatem neque fugit quasi quos sit obcaecati magnam! Dolor dolorem consequuntur quas cupiditate eos voluptates quae nemo esse!"
},
]
let container = document.querySelector("#container")
container.style.display = "flex";
base.forEach((item) => {
let div = document.createElement("div")
div.style.width = "270px";
div.style.border = "2px solid gray"
div.style.borderRadius = `20px`;
div.style.margin = "10px";
let article = document.createElement("article")
article.style.margin = "10px"
let imgs = document.createElement("img")
imgs.style.minWidth = '198px'
imgs.style.height = '198px'
imgs.style.borderRadius = '50%'
imgs.style.display = "block"
imgs.style.margin = "0 24px"
let person = document.createElement("h2");
person.style.textAlign = "center"
let ages = document.createElement("span")
let pro = document.createElement("h4")
let para = document.createElement("p")
imgs.setAttribute('src', item.img)
let name = item.name;
let age = item.age;
let profession = `${item.profession }, `;
let resume = `${item.resume}, `;
person.append(name);
imgs.append();
ages.append(age);
pro.append(profession);
para.append(resume);
article.append(imgs, person, ages, pro, para);
div.append(article);
container.append(div);

})