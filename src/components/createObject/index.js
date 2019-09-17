import services from "../../board";
const handleSubmit = evt => {
  evt.preventDefault();
  console.log(evt.target.elements);
  const [title, descriptions, phone] = evt.target.elements;

  const product = {
    title: title.value,
    descriptions: descriptions.value,
    phone: phone.value,
    image: services.getImage(),
    data: [new Date().getDate(), new Date().getHours()]
  };

  services.setProductObject(product);

  services.fetchAddFileToServer().then(data => {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div><p>${data.title}</p><img src='${data.image[0]}'/></div>`
    );
  });

  console.log(product);
};

services.refsDouble.products.addEventListener("submit", handleSubmit);
