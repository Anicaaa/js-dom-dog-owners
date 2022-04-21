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
    //Create Section Tag
    const mainDog = document.createElement("section");
    mainDog.setAttribute("class", "main__dog-section");

    //create h2
    const dogNameH2 = document.createElement("h2");
    dogNameH2.setAttribute("class", "name-dog");
    dogNameH2.innerText = dogs.name;
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

    //create em "is naughty?"
    const em = document.createElement("em");
    em.innerText = "is naughty?";
    mainDog.append(em);

    //create p tag
    const goodDog = document.createElement("p");
    goodDog.innerText = dogs.isGoodDog;
    mainDog.append(goodDog);

    //create button
    const dogButton = document.createElement("button");
    dogButton.innerText = "Good dog!";
    mainDog.append(dogButton);

    //Link the main section with mainDog section
    const main = document.querySelector(".main");
    main.append(mainDog);

    const removeNoDogForm = document.querySelector(".main__dog-section");
    removeNoDogForm.remove();
    console.log(removeNoDogForm);

    // ---- Part 2 ---- //
    const addButton = document.querySelector(".dogs-list__button--add");
    addButton.addEventListener("click", function () {
      mainDog.innerHTML = "";

      const h2 = document.createElement("h2");
      h2.innerText = "Add a new Dog";
      mainDog.append(h2);

      const form = document.createElement("form");
      form.setAttribute("class", "form");

      //create a label for name
      const labelName = document.createElement("label");
      labelName.innerText = "Dog's name";
      form.append(labelName);

      const inputText = document.createElement("input");
      inputText.setAttribute("type", "text");
      inputText.setAttribute("id", "name");
      inputText.setAttribute("id", "name");
      inputText.setAttribute("name", "name");
      inputText.setAttribute("placeholder", "Name");
      form.append(inputText);

      //create a label for url
      const labelUrl = document.createElement("label");
      labelUrl.innerText = "Dog's picture";
      form.append(labelUrl);

      const inputUrl = document.createElement("input");
      inputUrl.setAttribute("type", "url");
      inputUrl.setAttribute("id", "image");
      inputUrl.setAttribute("name", "image");
      inputUrl.setAttribute("placeholder", "URL");
      form.append(inputUrl);

      //create a label for bio
      const labelBio = document.createElement("label");
      labelBio.innerText = "Dog's bio";
      form.append(labelBio);

      const textArea = document.createElement("textarea");
      textArea.setAttribute("rows", "5");
      textArea.setAttribute("id", "bio");
      textArea.setAttribute("name", "bio");
      textArea.setAttribute("placeholder", "Bio");
      form.append(textArea);

      const submitButton = document.createElement("input");
      submitButton.setAttribute("type", "submit");
      submitButton.setAttribute("id", "submit");
      submitButton.setAttribute("name", "submit");
      submitButton.setAttribute("value", "Let's add a dog!");
      submitButton.setAttribute("class", "form__button");
      form.append(submitButton);

      //Link the mainDog section with the form
      mainDog.append(form);

      // ---- Part 2 Add new Dog ---- //
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        //event.target[0]; //name
        //event.target[1]; //image
        //event.target[2]; //bio
        const newDog = document.createElement("li");
        newDog.setAttribute("class", "dogs-list__button");
        newDog.innerText = event.target[0].value;
        dogListUl.insertBefore(newDog, dogListUl.children[1]);

        // when clicked, show dog info in this section
        newDog.addEventListener("click", () => {
          // clear the html
          main.innerHTML = "";

          // create elements
          const h2 = document.createElement("h2");
          h2.innerText = event.target[0].value;
          main.append(h2);

          const img = document.createElement("img");
          img.setAttribute("src", event.target[1].value);
          img.setAttribute("alt", "");
          main.append(img);

          const div = document.createElement("div");
          div.setAttribute("class", "main__dog-section__desc");
          main.append(div);

          const h3 = document.createElement("h3");
          h3.innerText = "Bio";
          div.append(h3);

          const p1 = document.createElement("p");
          p1.innerText = event.target[2].value;
          div.append(p1);

          const p2 = document.createElement("p");
          main.append(p2);

          const em = document.createElement("em");
          em.innerText = "is naughty?";
          p2.append(em);

          let strText;
          if (!dogs.isGoodDog) {
            str = " Yes!";
          } else {
            str = " No!";
          }

          const strTextTwo = document.createTextNode(" Yes!");
          p2.appendChild(strTextTwo);

          const dogbutton = document.createElement("button");
          dogbutton.innerText = "Good dog!";
          main.append(dogbutton);
        });
      });
    });
  });
}
