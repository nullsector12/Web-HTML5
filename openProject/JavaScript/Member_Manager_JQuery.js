<script src = "http://code.jquery.com/jquery-1.12.4.min.js"></script>

$(document).ready(function () {

    $('#regitForm').submit(function () {
        var id = $('#userID').value();
        var pass = $('#userPass').value();
        var passC = $('#userPassC').value();
        var name = $('#name').value();

        if (id = '') {
            alert('이름을 입력해주세요.')
            $('#userID').focus();
            return false;
        } else if (pass = '') {
            alert('비밀번호를 입력해주세요.')
            return false;
        } else if (pass != passC) {
            alert('비밀번호가 일치하지 않습니다.')
        } else if (name = '') {
            alert('이름을 입력해주세요.')
        }




    });



});