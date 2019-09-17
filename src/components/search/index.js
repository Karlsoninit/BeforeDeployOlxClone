import services from "../../board";

const handleSubmit = evt => {
  console.log(evt.target.value);
  services.searchForm(evt.target.value).then(console.log);
};

services.refsDouble.search.addEventListener("change", handleSubmit);
