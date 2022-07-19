$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
    $(function () {
        //flatpickr($('input[name="date2"]'), {"locale":"ja","enableTime":true,"plugins":[new confirmDatePlugin({})]});
        $.datetimepicker.setLocale('ja');
        $('input[name="reservation_date"]').datetimepicker({
            format: "Y/m/d H:i",
            allowTimes:[
              '11:00', '12:00', '13:00', '14:00',
              '15:00', '16:00', '17:00', '18:00', 
              '19:00', '20:00', '21:00', '22:00']
        });
    });

    // 参加人数分の氏名欄を生成
    //$('#form-number').click(function () {
    //    $('#form-name').empty();
    //    var num = $('input[name="number"]:checked').val();
    //    for (i = 0; i < num; i++) {
    //        $('#form-name').append(
    //            `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
    //        );
    //    }
    //});

    // 送信
    $('form').submit(function () {
        //var type = $('.mt-3[name="type"]').val();
        var type = $(".mt-3[name='type']").text();
        var date = $('input[name="reservation_date"]').val();
        var number = $('input[name="student_number"]').val();
        var name = $('input[name="student_name"]').val();
        //$('#form-name').children().each(function (i, elm) {
        //    names += $(elm).val() + '、';
        //})
        //names = names.slice(0, -1);
        var msg;
        if(type == "予約確認") {
            msg = `種別::${type}\n生徒さん番号::${number}\nお名前(姓)::${name}`;
        } else {
            msg = `種別::${type}\n予約日::${date}\n生徒さん番号::${number}\nお名前(姓)::${name}`;
        }
        sendText(msg);

        return false;
    });
});
