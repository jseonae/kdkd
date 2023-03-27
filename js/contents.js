$(document).ready(function() {
        $('.select.type01, .select.type02').on('click', function (event) {
        $(this).toggleClass('on');
        });
        $('body').on('click', function (e) {
        if (!$('.select.type01, .select.type02').is(e.target) 
            && $('.select.type01, .select.type02').has(e.target).length === 0 
            && $('.on').has(e.target).length === 0
        ) {
            $('.select.type01, .select.type02').removeClass('on');
        }
        }); // select add class 'on'

        $('.std_list table td button').click(function() {
            var modal_id = $(this).attr('id');
            $('.modal' + '#' + modal_id).css({
                display: 'flex', 
            });
        })
        $('.btn_close').click(function() {
            $('.modal').css({
                display: 'none',
            });
        }) // modal
        
        $('#stageBtn').on('click', function (event) {
        $(this).toggleClass('on');
        $('.stage_nav .stage__wrap').toggleClass('on');
        $('.stage_nav .grap__wrap').toggleClass('off');
        });
    }); // 진행단계 네비게이션 박스 활성화