//表格数据滚动
(function(){
    $(function(){
        //创建定时器
        var dsq = setInterval(moveTable,50);
        // 数据滚动
        function moveTable(){
        let $tables = $(".mytable");    //获取table
        $.each($tables, function(i, table){
            var tbody = table.lastElementChild; //获取tbody
            var tbody_trs = tbody.children; //获取所有tr
            tbody.style.top = parseInt(tbody.style.top) - 1 + "px"; //每次调用函数移动距离
           //判断是否为数据结尾
            if(parseInt(tbody.style.top) < -((tbody_trs.length-3)*tbody_trs[0].offsetHeight)){
                tbody.style.top = 0;
            }
        });
        //移入停止
        $(".mytable").on("mouseenter", "tbody", function(){
            clearInterval(dsq)
            dsq = null;
        });
        //移出滚动
        $(".mytable").on("mouseleave", "tbody", function(){
            if(dsq == null){
                dsq = setInterval(moveTable, 50)
            }
        });

    }   
    })
})()