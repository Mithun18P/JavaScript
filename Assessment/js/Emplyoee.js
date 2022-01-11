let arr = [{
    FirstName: 'mithun',
    LastName: 'p',
    UserName: 'mithun p',
    Password: '123@mith',
    Address: '2/1, 10th b cross',
    Contact: '9164510512'
}, {
    FirstName: 'prajwal',
    LastName: 'r',
    UserName: 'prajwal',
    Password: '123@praj',
    Address: '3/3, 10th b cross',
    Contact: '123456789'
}];

let arremp = [{ EID: '123', Name: 'Mithun', Salary: '10000', Dept: 'HR', Skill: 'JAVA' }];
console.log(arremp);

let date = new Date();

function view() {
    for (const i in arremp) {
        document.getElementById('emp').innerHTML = 'EID:{arremp[i].EID}';
    }
}

function addrow() {
    let a = arr.length;
    for (let i = 0; i < arr.length; i++) {
        arr[a] = {};
    }
}
function setemp() {
    addrow();
    let b = arr.length;
    arr[b - 1].FirstName = document.getElementById('fn').value;
    arr[b - 1].LastName = document.getElementById('ln').value;
    arr[b - 1].UserName = document.getElementById('un').value;
    arr[b - 1].Password = document.getElementById('pass').value;
    arr[b - 1].Address = document.getElementById('add').value;
    arr[b - 1].Contact = document.getElementById('phno').value;
    loc();
}

function loc() {
    localStorage.setItem('empData', JSON.stringify(arr));
    let data = JSON.parse(localStorage.getItem('empData'));
    alert('employee Details added');
    console.log(data);
    location.href = "http://127.0.0.1:5500/Thoughtfocus_login%20_page.html";
}

let a = JSON.parse(localStorage.getItem('empData'));
console.log(a);

function login() {
    let count = 0;
    for (let i in a) {
        count++;
        if (a[i].UserName == document.getElementById('user').value && a[i].Password == document.getElementById('password').value) {
            console.log(a);
            count--;
            alert('login is sucessfull');
            location.href = "http://127.0.0.1:5500/Emp-Home.html";
        }
    }
    if (count == a.length) {
        alert('InValid UserName or Password');
    }
}

function clr() {
    document.getElementById('ref').click();
}
function reset() {
    document.getElementById('reset').click();
}

function addemp() {
    let a = arremp.length;
    for (let i = 0; i < arremp.length; i++) {
        arremp[a] = {};
    }
    let q = document.getElementById('eid').value;
    let b = document.getElementById('name').value;
    let c = document.getElementById('sal').value;
    let d = document.getElementById('dept').value;
    let e = document.getElementById('ski').value;
    if (q !== "" && b !== "" && c !== "" && d !== "" && e !== "") {
        arremp[a].EID = q;
        arremp[a].Name = b;
        arremp[a].Salary = c;
        arremp[a].Dept = d;
        arremp[a].Skill = e;
        console.log(arremp);
        localStorage.setItem('empData2', JSON.stringify(arremp));
        alert('Data added successfully');
        view();
    }
    else {
        alert('enter all fileds');
    }
}
function view() {
    var tabledata="";
    let data2 = JSON.parse(localStorage.getItem('empData2'));
for (const j of data2) {
    tabledata+="<tr>";
    for (let  i in j) {
        tabledata="<td>"+j[i]+"</td>";
    }
    tabledata+="</tr>";
}
document.getElementById('table1').innerHTML=tabledata;
}

function vis() {
    document.getElementById('vis').style.visibility = "visibile !important";
}
function getdate() {
    let a = document.getElementById('date');
    a.innerHTML = (date.getDate() + ' / ' + date.getDay() + 1 + ' / ' + date.getUTCFullYear());
}

function yr() {
    let b = document.getElementById('year');
    b.innerHTML = date.getFullYear();
}