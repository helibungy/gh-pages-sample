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
        $('input[name="date2"]').datetimepicker({
            format: "d/m/Y H:m:s",
            allowTimes:[
              '11:00', '12:00', '13:00', '14:00',
              '15:00', '16:00', '17:00', '18:00', 
              '19:00', '20:00', '21:00', '22:00']
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `希望日：${date}\n人数：${number}\n氏名：${names}`;
        sendText(msg);

        return false;
    });
});
