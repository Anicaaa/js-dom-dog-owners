console.log(data);

// WRITE YOUR CODE BELOW!

// ---- Part 1 ---- //
const dogListUl = document.querySelector(".dogs-list");
for (let i = 0; i < data.length; i++) {
  const dogs = data[i];
  const dogListLi = document.createElement("li");
  dogListLi.setAttribute("class", "dogs-list__button");
  dogListLi.innerHTML = dogs.name;
  dogListUl.append(dogListLi);

  dogListLi.addEventListener("click", function () {
    console.log("Clicked dog:", dogs);

    const removeNoDogForm = document.querySelector(".main__dog-section");
    removeNoDogForm.remove();
    console.log(removeNoDogForm);

    //Create Section Tag
    const mainDog = document.createElement("section");
    mainDog.setAttribute("class", "main__dog-section");

    //create h2
    const dogNameH2 = document.createElement("h2");
    dogNameH2.setAttribute("class", "name-dog");
    dogNameH2.innerHTML = dogs.name;
    mainDog.append(dogNameH2);

    //create img
    const dogImg = document.createElement("img");
    dogImg.setAttribute("class", "dog-img");
    dogImg.src = dogs.image;
    mainDog.append(dogImg);

    //create main dog section
    const dogDesc = document.createElement("div");
    mainDog.append(dogDesc);

    //Create h3
    const dogBioH3 = document.createElement("h3");
    dogBioH3.innerText = "Bio";
    mainDog.append(dogBioH3);

    //create p
    const dogParaEl = document.createElement("p");
    dogParaEl.innerHTML = dogs.bio;
    mainDog.append(dogParaEl);

    //create p tag "is naughty? yes!"
    const isGoodBoy = document.createElement("p");
    isGoodBoy.innerText = "Is naughty? " + dogs.isGoodDog;
    mainDog.append(isGoodBoy);

    //create button
    const dogButton = document.createElement("button");
    dogButton.setAttribute("class", "main__dog-section__btn");
    dogButton.innerText = "Good dog!";
    mainDog.append(dogButton);

    //Link the main section with mainDof section
    const main = document.querySelector(".main");
    main.append(mainDog);

    /*let changeDogForm = 7;

  const addButton = document.querySelector(".dogs-list__button--add");
  addButton.addEventListener("click", function () {
    changeDogForm++;
  });*/
  });
}
