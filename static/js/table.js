//表格数据滚动
$(function () {
    //创建定时器
    var dsq = setInterval(moveTable,50);
    // 数据滚动
    function moveTable() {
        let $tables = $(".mytable");    //获取table
        $.each($tables, function (i, table) {
            var $tbody = $(table).children("tbody") //获取tbody
            var $tbody_trs = $tbody.children("tr"); //获取所有tr
            var showNum = $(table).parent().height()/35;    //获取表格区高度，计算可展示多少行
            $tbody.css("top", parseInt($tbody.css("top")) - 2); //每次调用函数移动距离
            //判断是否为数据结尾
            if (parseInt($tbody.css("top")) < -(($tbody_trs.length - parseInt(showNum)-1) * parseInt($tbody_trs.eq(0).css("height")))) {
                $tbody.css("top","32.3px");
            }
        });
        //移入停止
        $(".mytable").on("mouseenter", "tbody", function () {
            clearInterval(dsq)
            dsq = null;
        });
        //移出滚动
        $(".mytable").on("mouseleave", "tbody", function () {
            if (dsq == null) {
                dsq = setInterval(moveTable, 50)
            }
        });

    }
})
