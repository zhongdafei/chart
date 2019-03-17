window.onload = function () {

    initHeight(100);
    initChart();
    initTab();
    initTable();
    // initPopup();
}
// 初始化footer高度，由窗口高度减去header高度，height为传入得header高度值
function initHeight(height) {
    // console.log(window.innerHeight);
    var footer = document.getElementById("footer");
    var main = document.getElementById("main");
    var hei = window.innerHeight - height + 'px';
    footer.style.height = hei;
    main.style.height = hei;
}
// 初始化弹窗效果
function initPopup() {
    var aBtns = document.querySelectorAll("#menu .list li");
    // 弹窗元素
    var popup = document.querySelector("#popup");
    // 内容数组
    var arr = ["aaa", "bbb", "ccc"];
    // 循环添加dom事件，移入显示，移除隐藏。
    for (let i = 0; i < aBtns.length; i++) {
        aBtns[i].onmouseover = function () {
            popup.innerHTML = arr[i];
            popup.style.display = "block";
        }
        aBtns[i].onmouseout = function () {
            popup.style.display = "none";
        }
    }
}
// 初始化图表
function initChart() {
    var chart = document.querySelector("#chart");
    echarts.init(chart).setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
}
// 初始化内容块
function initTab() {
    var aBtns = document.querySelectorAll("#menu .list li");
    var aCons = document.querySelectorAll("#main .content");

    for (let i = 0; i < aBtns.length; i++) {
        aBtns[i].onclick = function() {
            for (let j = 0; j < aCons.length; j++) {
                aCons[j].style.display = "none";
            }
            aCons[i].style.display = "block";
        }
    }
}

function initTable() {
    var root = document.querySelector("#table tbody");
    // 遍历数据中的每一个对象
    getData().forEach(element => {
        tr = document.createElement('tr');
        // 获取对象中的每个属性，插入到td元素中
        for (let val in element) {
            td = document.createElement('td');
            // 设置节点的内容为对象的属性值
            td.innerHTML = element[val];
            tr.appendChild(td);
        }
        // 将每一行tr插入到tbody中
        root.appendChild(tr);
    });
}

function getData() {
    return [
        {
            number: '080908161233',
            name: '张三',
            age: 21,
            sex: '男',
            tel: '18380978765'
        },
        {
            number: '080908161233',
            name: '张三',
            age: 21,
            sex: '男',
            tel: '18380978765'
        },
        {
            number: '080908161233',
            name: '张三',
            age: 21,
            sex: '男',
            tel: '18380978765'
        },
        {
            number: '080908161233',
            name: '张三',
            age: 21,
            sex: '男',
            tel: '18380978765'
        }
    ];
}

