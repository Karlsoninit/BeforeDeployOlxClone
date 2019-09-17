import axios from "axios";
export default {
  image: [],
  product: null,
  drawImage(img) {
    this.image.push(img);
  },
  getImage() {
    return this.image;
  },
  getProductObject() {
    return this.product;
  },
  setProductObject(obj) {
    this.product = obj;
  },
  refsDouble: {
    fileMult: document.querySelector("#fileMulti"),
    show: document.querySelector(".show"),
    box: document.querySelector(".box"),
    products: document.querySelector("#products"),
    search: document.querySelector(".search")
  },
  fetchAddFileToServer() {
    return axios
      .post(" http://localhost:3000/profile", this.getProductObject())
      .then(data => data.data);
  },
  searchForm(value) {
    return axios
      .get(`http://localhost:3000/profile?title=${value}`)
      .then(data => data.data);
  }
};
