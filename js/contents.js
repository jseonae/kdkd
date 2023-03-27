$(document).ready(function() {
        $('.select.type01, .select.type02, .select.type03').on('click', function (event) {
        $(this).toggleClass('on');
        });
        $('body').on('click', function (e) {
        if (!$('.select.type01, .select.type02, .select.type03').is(e.target) 
            && $('.select.type01, .select.type02, .select.type03').has(e.target).length === 0 
            && $('.on').has(e.target).length === 0
        ) {
            $('.select.type01, .select.type02, .select.type03').removeClass('on');
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

    var ctx = document.getElementById("chartType01");
    var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: ["30","20","10","10"],
            backgroundColor: ["#4D8DE7", "#F0F6FC","#929EA9","#eee"]
        }]
    }
    }); // 진단결과 한글해득비율 차트

    $('#step1').click(function(){
        if($("input:checkbox[id='step1']") .prop("checked")) {
        $("input:checkbox[name='step_all_1']") .prop("checked" , true);
        } else {                                                         
        $("input:checkbox[name='step_all_1']") .prop("checked", false);
        }
    });

    $('#step2').click(function(){
        if($("input:checkbox[id='step2']") .prop("checked")) {  
        $("input:checkbox[name='step_all_2']") .prop("checked" , true); 
        } else {                                                         
        $("input:checkbox[name='step_all_2']") .prop("checked", false); 
        }
    });

    $('#step3').click(function(){
        if($("input:checkbox[id='step3']") .prop("checked")) {
        $("input:checkbox[name='step_all_3']") .prop("checked" , true);
        } else {                                                         
        $("input:checkbox[name='step_all_3']") .prop("checked", false);
        }
    }); // checkbox 전체선택