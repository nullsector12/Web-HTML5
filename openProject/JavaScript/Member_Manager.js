// 새로운 정보를 입력받아 객체를 생성
function member(uId, uPass, uName){
    this.userID = uId;
    this.userPass = uPass;
    this.name = uName;

    this.getId = function(){
        return userID;
    }
    this.getPw = function(){
        return userPass;
    }
    this.getName = function(){
        return name;
    }
    this.setId = function(uId){
        userID = uId
    }
    this.setPw = function(uPass){
        userPass = uPass
    }
    this.setName = function(uName){
        name = uName
    }
};

var setJsdata;
var getJsdata = localStorage.getItem('memberInfo');
var memberJson = JSON.parse(getJsdata);

function saveInfo (){
    var setJsdata = JSON.stringify(memberJson);
    console.log(setJsdata)
    localStorage.setItem('memberInfo', setJsdata);

}

var form = document.getElementById("regitForm");


form.onsubmit = function () {
    var id = document.getElementById("userID");
    var pw = document.getElementById("userPass");
    var pwc = document.getElementById("userPassC");
    var un = document.getElementById("name");

    // 아이디가 입력되지 않았을 때
    if (id.value == '') {
        alert("아이디를 입력하세요");
        id.focus();
        return false;
    }

    //비밀번호가 입력되지 않았을 때
    if (pw.value == '') {
        alert("비밀번호를 입력하세요");
        pw.focus();
        return false;
    }

    //비밀번호와 비밀번호 확인이 일치하지 않을 때
    if (pw.value != pwc.value) {
        alert("입력한 비밀번호가 일치하지 않습니다. 다시 확인하세요.");
        pw.focus();
        pwc.focus();
        return false;
    }

    //이름이 입력되지 않았을 때
    if (un.value == '') {
        alert("이름을 입력하세요.");
        un.focus();
        return false;
    }

    memberJson.push(new member(id.value, pw,value, un.value));
    saveInfo();
    alert('저장완료');
    console.log(memberJson);


};