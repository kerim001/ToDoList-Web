const inputBox  = document.getElementById("input-text")     
// HTML sayfasından input-text elemanını aldık
const ListContainer  = document.getElementById("list-container")    
//HTML sayfasından list-container elemanını aldık

function addTask(){                                 
    // addTask adında bir fonksiyon oluşturmamıza yarıyor
    if(inputBox.value==''){                         
        // bunun sayesinde karakter girmediğimiz durumda bize uyarı veren bir sistem oluşturduk
        alert("Herhangi bir şey yazmadınız!")               
        // sayfa üstünde çıkacak uyarı bu
    }
    else{                                           
        let li = document.createElement("li");      
        // Yeni bir <li> (list item) oluşturuluyor ve içeriği giriş kutusundan alınıyor
        li.innerHTML = inputBox.value;  // giriş kutusundan aldık ve eşitledik
        ListContainer.appendChild(li);              
        // Oluşturulan <li> elemanı list container'a ekleniyor
        let span = document.createElement("span");
        // span adlı bir eleman oluşturuyoruz ve buna span diyoruz
        span.innerHTML="\u00d7"
        //Oluşturulan <span> elementinin içeriği, kapama işaretini temsil eden bir Unicode karakteri olan "\u00d7" ile ayarlanıyor.
        li.appendChild(span)
        //  Bu satır, daha önce oluşturulan <li> elementine, içeriği kapama işareti olan <span> elementini ekler.
    }
    inputBox.value ="";                             
    // if ya da else işlemi bitince bu satıra geliyoruz ve kutucuğumuzdaki yazıyı sıfırlıyoruz
    saveData();     
    // kaydetme fonksiyonu uyguladık
}

function removeAll(){
   
    ListContainer.innerHTML = "";
    saveData();
}

function checkedAll() {
    const listItems = document.querySelectorAll("#list-container li");
    let isAllChecked = true;

    // Her bir öğenin sınıfını kontrol etmek için bir döngü kurulmalıdır
    listItems.forEach(item => {
        // Her bir öğenin sınıfını kontrol eder
        if (!item.classList.contains("checked")) {
            // Eğer herhangi bir öğe checked değilse, isAllChecked değişkenini false olarak ayarla 
            isAllChecked = false;
        }
        
    });

    // Eğer tüm öğeler checked durumdaysa, tüm öğeleri unchecked yap, aksi halde tüm öğeleri checked yap
    listItems.forEach(item => {
        if (isAllChecked) {
            item.classList.remove("checked");
        } else {
            item.classList.add("checked");
        }
    });

    saveData();
}

inputBox.addEventListener('keydown',function (event) { 
    if (event.key==='Enter'){addTask()} 
});

function removeSelected() {
    const listItems = document.querySelectorAll("#list-container li");

    listItems.forEach(item => {
        // Her bir öğenin sınıfını kontrol eder
        if (item.classList.contains("checked")) {
            // Eğer öğe "checked" durumdaysa, öğeyi kaldır
            item.remove();           
        }
        
    });
    varyok()
    saveData();
}

ListContainer.addEventListener("click",function(e){     
    // burada biz bir hedef belirliyoruz belirlediğimiz hedef noktalarına tıkladığımızda hangi işlemlerin olacağını
    if (e.target.tagName =="LI"){
        e.target.classList.toggle("checked");       
        // bunun sayesinde checked durumunu uyguladık belirlediğimiz containerdaki tablo elemanına

        saveData();         
        // kaydetme fonksiyonu uyguladık
    }
    else if(e.target.tagName=="SPAN"){
        alert("Tıkladığınız görevi siliyorsunuz!");                    
        // bunun sayesinde silmeden önce sayfa üstünde uyarı vermesini sağladık
      
        // InputEvent.addEventListener('keydown',function(event)){

        // }
       
        e.target.parentElement.remove();            
        // bunun sayesinde tıkladığımız alandaki belirlediğimiz containerdeki tabloyu kaldırdık
        saveData();         
        // kaydetme fonksiyonu uyguladık

    }
}, false)

function varyok(){
    console.log("tiklama");
    listItems = document.querySelectorAll("#list-container li");
        let isAllChecked = false;

        // Her bir öğenin sınıfını kontrol etmek için bir döngü kurulmalıdır
        listItems.forEach(item => {
        // Her bir öğenin sınıfını kontrol eder
        if (item.classList.contains("checked")) {
            // Eğer herhangi bir öğe checked ise, isAllChecked değişkenini true olarak ayarla
            isAllChecked = true;
        }
        
        });
        if (isAllChecked){ // eğer herhangi bir öğe checked ise buton görünsün
            var button4 = document.getElementById("button4");
            button4.style.display= "block";
        }
        else {          // eğer herhangi bir öğe checked değil ise görünmez yap
            var button4 = document.getElementById("button4");
            button4.style.display= "none";
        }
        var doc = document.documentElement;
        doc.addEventListener("click",varyok)
        
}

function saveData(){                
    // burası save data fonksiyonu bunun sayesinde set işlemini yapıyoruz
    localStorage.setItem("data",ListContainer.innerHTML)
}
function showTask(){                
    // burası show task fonksiyonu bunun sayesinde get işlemini yapıyoruz
    ListContainer.innerHTML = localStorage.getItem("data")
    
    varyok();
}
showTask();  
// sayfayı yenilediğimizde bütün kod denetlenecek sıra buna gelecek ve bizim set yaptığımız data get olacak bu fonk sayesinde         







