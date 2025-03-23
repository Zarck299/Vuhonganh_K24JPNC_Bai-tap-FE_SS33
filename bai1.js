//Khai báo biến cấu trúc HTML và rom
let pass = document.getElementById("passWord");
let iconShow = document.getElementById("iconShow");
//B3: Kiểm tra khi click vào iconshow type chuyển của input
//->sử dụng if-else để ktra password
    //pass.type = password => pass.type = text
    //pass.type = text => pass.type = text
iconShow.addEventListener("click", function  () {
    if(pass.type === "password"){
        pass.type = "text";
    } else{
        pass.type = "password";
    }
})