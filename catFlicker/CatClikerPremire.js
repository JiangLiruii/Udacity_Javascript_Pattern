/*=====Model=====*/
let model = {
    currentCat: null,
    cats: [{
        clickCount: 0,
        name: 'cat1',
        imgSrc: 'cat1.jpg',
    },
    {
        clickCount: 0,
        name: 'cat2',
        imgSrc: 'cat2.jpg',
    },
    {
        clickCount: 0,
        name: 'cat3',
        imgSrc: 'cat3.jpg',
    },
    {
        clickCount: 0,
        name: 'cat4',
        imgSrc: 'cat4.jpg',
    },
    {
        clickCount: 0,
        name: 'cat5',
        imgSrc: 'cat5.jpg',
    }]
};
/*=====Octopus=====*/
let octopus = {
    init: function () {
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    },
    incrementCounter: function () {
        model.currentCat.clickCount += 1;
        catView.render();
    },
    getCats: function () {
        return model.cats;
    },
    setCurrentImg: function(cat) {
        model.currentCat = cat;
    },
    getCurrentCat: function() {
        return model.currentCat;
    }
};
/*=====View=====*/
let catListView = {
    init: function () {
        this.catListElem = document.getElementById('catlist');
        this.render();
    },
    render: function () {
        let i, elem,
            cats = octopus.getCats(), 
            max = cats.length;
        this.catListElem.innerHTML = '';
        for (i = 0; i < max; i += 1) {
            elem = document.createElement('button');
            elem.textContent = cats[i].name;
            elem.addEventListener('click',(function(cat){
                return function(){
                    octopus.setCurrentImg(cat);
                    catView.render();
                };
            })(cats[i]));
            this.catListElem.appendChild(elem);
        }
    }
};

let catView = {
    init: function () {
        this.imgElem = document.getElementById('catImg');
        this.nameElem = document.getElementById('catClick');
        this.render();
    },
    render: function () {
        let cat = octopus.getCurrentCat();
        this.imgElem.src = cat.imgSrc;
        this.imgElem.addEventListener('click', octopus.incrementCounter);
        this.nameElem.innerText = cat.name +' ' + cat.clickCount;
    }
};
octopus.init();
