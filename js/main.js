(function () {
    // 取得外層容器
    let chart = document.querySelector('.chart');
    // 製造空容器
    let fragment = document.createDocumentFragment();
    // 設定初始/結束的值
    let firstNum = 2;
    let lastNum = 9;

    // 計算有多少個chart
    for (var i = firstNum; i <= lastNum; i++) {
        // 建立DOM物件
        let numberChart = document.createElement('li');
        let numberList = document.createElement('ul');
        let numberTitle = document.createElement('li');
        let numberHeading = document.createElement('h2');

        // 賦予DOM物件Class名稱
        numberChart.className = "number_chart";
        numberList.className = "number_list";
        numberTitle.className = "number_title";

        // number_title
        numberHeading.appendChild(document.createTextNode(i));
        numberTitle.appendChild(numberHeading);

        // number_list
        numberList.appendChild(numberTitle);

        // 計算數學式，並append到li上
        for (var j = 1; j <= lastNum; j++) {
            //  number_formula
            let numberFormula = document.createElement('li');
            numberFormula.appendChild(document.createTextNode(`${i} x ${j} = ${i * j}`));
            numberList.appendChild(numberFormula);
        }

        //  number_chart
        numberChart.appendChild(numberList);

        //  組合成fragment，並放進容器中
        fragment.appendChild(numberChart);
        chart.appendChild(fragment);
    }
})();