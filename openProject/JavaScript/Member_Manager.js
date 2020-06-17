var Members = new Array();

var form = document.getElementById("regitForm");


form.onsubmit = function () {
    var userID = document.getElementById("userID");
    var userPass = document.getElementById("userPass");
    var userPassC = document.getElementById("userPassC");
    var name = document.getElementById("name");

    // 아이디가 입력되지 않았을 때
    if (userID.value == '') {
        alert("아이디를 입력하세요");
        userID.focus();
        return false;
    }

    //비밀번호가 입력되지 않았을 때
    if (userPass.value == '') {
        alert("비밀번호를 입력하세요");
        userPass.focus();
        return false;
    }

    //비밀번호와 비밀번호 확인이 일치하지 않을 때
    if (userPass.value != userPassC.value) {
        alert("입력한 비밀번호가 일치하지 않습니다. 다시 확인하세요.");
        userPass.focus();
        userPassC.focus();
        return false;
    }

    //이름이 입력되지 않았을 때
    if (name.value == '') {
        alert("이름을 입력하세요.");
        name.focus();
        return false;
    }

    Members.push(new Member(userID, userPass, name));
    alert('저장완료');
    console.log(userID);


};