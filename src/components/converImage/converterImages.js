import services from "../../board";

function handleFileSelect(evt) {
  let file = evt.target.files;

  let f;
  for (let i = 0; (f = file[i]); i++) {
    if (!f.type.match("image.*")) {
      alert("Image only please....");
    }
    let reader = new FileReader();

    reader.onload = (function(theFile) {
      return function(e) {
        let span = document.createElement("span");
        span.innerHTML = [
          '<img class="thumb" title="',
          escape(theFile.name),
          '" src="',
          e.target.result,
          '" />'
        ].join("");
        const imgAdded = {
          image: e.target.result
        };
        services.drawImage(e.target.result);
      };
    })(f);
    reader.readAsDataURL(f);
  }
}

services.refsDouble.fileMult.addEventListener("change", handleFileSelect);
