/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
/*=====Model=====*/
let studentsModel ={
    totalDay: 12,
    name: ['Slappy the Frog', 
        'Lilly the Lizard', 
        'Paulrus the Walrus', 
        'Gregory the Goat', 
        'Adam the Anaconda'],
};
/*=====Octopus=====*/
let octopus = {
    init: function () {
        let i, max, inputs;
        listView.init();
        inputs = document.getElementsByTagName('input');
        for (i = 0, max = inputs.length; i < max; i += 1) {
            inputs[i].addEventListener('click',listView.refresh);
        }
    },
    getDays: function () {
        console.log(studentsModel.totalDay);
        return studentsModel.totalDay;
    },
    getName: function () {
        console.log(studentsModel.name);
        return studentsModel.name;
    },
};
/*=====View=====*/
let listView = {
    init: function () {
        let i, j, th, tr, td,
            max = octopus.getDays(),
            titleParent = document.getElementById('name-title'),
            lastChild = titleParent.lastChild,
            nameLen = octopus.getName().length;
            contentParent = document.getElementsByTagName('tbody')[0];
            for (i = 0; i < max + 2; i += 1) {
                th = document.createElement('th');
                if (i === max + 1) {
                    th.innerText = 'Missed Days';
                } else if (i === 0) {
                    th.innerText = 'Name';
                } 
                else {
                    th.innerText = i;
                }
                titleParent.insertBefore(th, lastChild);
            }
        for (j = 0; j < nameLen; j += 1) {
            tr = document.createElement('tr');
            tr.className = 'student';
            for (i = 0; i < max + 2; i += 1) {
                td = document.createElement('td');
                if (i === 0) {
                    td.className = 'name-col';
                    td.innerText = octopus.getName()[j];
                } else if (i === max + 1) {
                    td.className = 'missed-col';
                    td.innerText = 0;
                } 
                else {
                    td.className = 'attend-col';
                    td.innerHTML = '<input type="checkbox">';
                }
                tr.appendChild(td);
            }
            contentParent.appendChild(tr);
        }
        this.refresh();
    },
    refresh: function () {
        let i, j, max, max1, elemChecked, count, count1, missedClass, student;
        missedClass = document.getElementsByClassName( 'missed-col');
        students = document.getElementsByClassName('student');
        max = missedClass.length;
        for (i = 0; i < max; i += 1) {
            count1 = 0;
            count = missedClass[i];
            elemChecked = students[i].getElementsByTagName('input');
            for (j = 0, max1 = elemChecked.length; j < max1; j += 1) {
                if (elemChecked[j].checked) {
                    count1 += 1;
                }
            }
            console.log(octopus.getDays());
            count.innerText = octopus.getDays() - count1;
        }
    }
};
octopus.init();