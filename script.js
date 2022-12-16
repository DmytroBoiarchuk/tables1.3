function DataTable(config, data) {
    //create header and default N%
    let newTable = document.createElement("table");
    document.getElementById(config.parent.slice(1, config.parent.length)).appendChild(newTable);
    let tHead = document.createElement("thead");
    newTable.appendChild(tHead);
    let tr = document.createElement("tr");
    tHead.appendChild(tr);
    let th = document.createElement("th");
    tr.appendChild(th);
    let number = document.createTextNode("№");
    th.appendChild(number);
    //
    for (let i = 0; i < config.columns.length; i++) {
        let newTh = document.createElement("th");
        let value = document.createTextNode(config.columns[i].title);
        tr.appendChild(newTh);
        newTh.appendChild(value);
    }
    let tBody = document.createElement("tbody");
    newTable.appendChild(tBody);
    for (let j = 0; j < data.length; j++) {
        let tr2 = document.createElement("tr");
        tBody.appendChild(tr2);
        let newTh = document.createElement("th");
        let valueN = document.createTextNode(`${j + 1}`);
        tr2.appendChild(newTh);
        newTh.appendChild(valueN);
        for (let i = 0; i < config.columns.length; i++) {
            let newTh2 = document.createElement('th');
            let valueTh = document.createTextNode(data[j][config.columns[i].value])
            newTh2.appendChild(valueTh);
            tr2.appendChild(newTh2);
        }
    }
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
        {title: 'Размер ноги', value: 'length'},

    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12, length: 45},
    {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15, length: 25},
    {id: 30052, name: 'Илюха', surname: 'Иванов', age: 19, length: 'Нет информации'},

    {id: 30053, name: 'Дима', surname: 'Степкин', age: 77, length: 50},

    {id: 30054, name: 'Игорь', surname: 'Пупкин', age: 14000, length: 999},

];

DataTable(config1, users);

var table = new Tabulator("#example-table", {
    data: users,
    layout:"fitColumns",
    columns: [
        { title: "Имя", field: "name"},
        { title: "Фамилия", field: "age"},
        {title: "Возраст", field: "surname"},
        {title: "Размер ноги", field: "length"}],

});
