const images = document.querySelectorAll(".galery img");
const main = document.querySelector("main");
const body = document.querySelector("body");

function showImage(){
    images.forEach(img =>{
        img.addEventListener("click", ()=>{

            const imageName = img.attributes.src.value;
            const card = 
            `<div class="zoom-image">
                <img src="${imageName}" alt="Galery image">
    
                <div class="card-info">
                    <div class="info-user">
                        <i class="fa-solid fa-user"></i>
                        <p>WeeklyGalery</p>
                        
                    </div>
        
                    <i class="fa-regular fa-heart"></i>
        
                    <i class="fa-solid fa-x" id="close"></i>
                </div>
            </div>`;
            main.insertAdjacentHTML("beforeend", card);
            body.classList.add("no-scroll");

            const zoomImage = document.querySelector(".zoom-image");
            const close = document.getElementById("close");

            close.onclick = function(){
                zoomImage.remove();
                body.classList.remove("no-scroll");
            }
            
            
        })
    });
}

showImage();

