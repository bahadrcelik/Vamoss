
const searchForm = document.querySelector(".search-form");  
const navbar = document.querySelector(".navbar");


//! buttons

const searchBtn = document.querySelector("#search-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click" , function(){
     searchForm.classList.toggle("active");
     document.addEventListener("click" , function(e){
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove("active");
        }
     });    
});

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
      if (
        !e.composedPath().includes(menuBtn) &&
        !e.composedPath().includes(navbar)
      ) {
        navbar.classList.remove("active");
      }
    });
  });


// Arama kutusu ve gösterilecek alanı seç
const searchInput = document.querySelector('.search-input');
const allBoxes = document.querySelectorAll('.box'); // Tüm kutuları seç


// Her tuşa basıldığında arama işlevini çalıştır
searchInput.addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase(); // Arama kutusundaki metni küçük harfe çevir

    // Tüm kutuları gizle
    allBoxes.forEach(box => {
        box.style.display = 'none';
    });

    // Eşleşen kutuları göster
    allBoxes.forEach(box => {
        const boxText = box.textContent.toLowerCase(); // Kutu içeriğini küçük harfe çevir
        if (boxText.includes(searchText)) {
            box.style.display = 'block';
        }
    });
});



