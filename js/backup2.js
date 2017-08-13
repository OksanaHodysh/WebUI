(function() {

    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];
    var isEdited;

	(function init() {
		var head = document.getElementsByTagName('head')[0];
	    var meta = document.createElement('meta');
	    meta.setAttribute('name', 'viewport');
	    meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
	    head.insertBefore(meta, head.children[1]);

	    var h2 = document.createElement('h2');
	    h2.innerHTML = 'Front-End Lab Students';
	    h2.setAttribute('class', 'text-center');

	    var div = document.createElement('div');
	    div.setAttribute('class', 'table-responsive');
	    div.appendChild(drawTable(students));

	    var parent = document.getElementById('container');
	    parent.appendChild(h2);
	    parent.appendChild(drawForm());
	    parent.appendChild(div);
	})();

	function drawForm() {
        //create form and form elements
	    var myForm = document.createElement('form');
	    myForm.setAttribute('id', 'myForm');
	    myForm.setAttribute('method', 'post');
	    myForm.setAttribute('autocomplete', 'off');

	    var divName = document.createElement('div');
	    divName.setAttribute('class', 'col-sm-6 form-group');
	    var label = document.createElement('label');
	    label.setAttribute('for', 'firstname');
	    label.setAttribute('class', 'control-label');
	    label.innerHTML = 'First Name';
	    var div = document.createElement('div');
	    var input = document.createElement('input');
	    input.setAttribute('type', 'text');
	    input.setAttribute('class', 'form-control input-sm');
	    input.setAttribute('name', 'firstname');
	    input.setAttribute('id', 'firstname');
	    input.setAttribute('required', '');
	    div.appendChild(input);
	    divName.appendChild(label);
	    divName.appendChild(div);

	    var divSurname = divName.cloneNode(true);
	    var surnameLabel = divSurname.getElementsByTagName('label')[0];
	    surnameLabel.setAttribute('for', 'lastname');
	    surnameLabel.innerHTML = 'Last Name';
	    var surname = divSurname.getElementsByTagName('input')[0];
	    surname.setAttribute('name', 'lastname');
	    surname.setAttribute('id', 'lastname');

	    var divEmail = divName.cloneNode(true);
	    var emailLabel = divEmail.getElementsByTagName('label')[0];
	    emailLabel.setAttribute('for', 'email');
	    emailLabel.innerHTML = 'Email';
	    var email = divEmail.getElementsByTagName('input')[0];
	    email.setAttribute('type', 'email');
	    email.setAttribute('name', 'email');
	    email.setAttribute('id', 'email');

	    var divProfile = divName.cloneNode(true);
	    var profileLabel = divProfile.getElementsByTagName('label')[0];
	    profileLabel.setAttribute('for', 'profile');
	    profileLabel.innerHTML = 'Profile Picture';
	    var profile = divProfile.getElementsByTagName('input')[0];
	    profile.setAttribute('type', 'url');
	    profile.setAttribute('name', 'profile');
	    profile.setAttribute('id', 'profile');
	    profile.setAttribute('pattern', '^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$');
	    profile.setAttribute('title', 'Only .jpg, .jpeg, .png and .gif file extensions are allowed.');

	    var divSkills = divName.cloneNode(true);
	    divSkills.setAttribute('class', 'col-sm-12 form-group');
	    var skillsLabel = divSkills.getElementsByTagName('label')[0];
	    skillsLabel.setAttribute('for', 'skills');
	    skillsLabel.innerHTML = 'Skills';
	    var skills = divSkills.getElementsByTagName('input')[0];
	    skills.setAttribute('name', 'skills');
	    skills.setAttribute('id', 'skills');
	    skills.setAttribute('pattern', '^[a-zA-Z0-9., ]+[^,.]$');
	    skills.setAttribute('title', 'Skills should be comma separated values.');

	    var divSave = document.createElement('div');
	    divSave.setAttribute('class', 'col-xs-6 col-sm-offset-3 col-sm-3 col-md-offset-4 col-md-2 form-group');
	    var save = document.createElement('input');
	    save.setAttribute('type', 'submit');
	    save.setAttribute('value', 'Save');
	    save.setAttribute('id', 'save');
	    save.setAttribute('class', 'btn btn-primary btn-block');
	    divSave.appendChild(save);

	    var divCancel = document.createElement('div');
	    divCancel.setAttribute('class', 'col-xs-6 col-sm-3 col-md-2 form-group');
	    var cancel = document.createElement('input');
	    cancel.setAttribute('type', 'reset');
	    cancel.setAttribute('value', 'Cancel');
	    cancel.setAttribute('id', 'cancel');
	    cancel.setAttribute('class', 'btn btn-primary btn-block');
	    divCancel.appendChild(cancel);
        //make form span several rows
	    var rowOne = document.createElement('div');
	    rowOne.setAttribute('class', 'row');
	    rowOne.appendChild(divName);
	    rowOne.appendChild(divSurname);

	    var rowTwo = rowOne.cloneNode(false);
	    rowTwo.appendChild(divEmail);
	    rowTwo.appendChild(divProfile);

	    var rowThree = rowOne.cloneNode(false);
	    rowThree.appendChild(divSkills);

	    var rowFour = rowOne.cloneNode(false);
	    rowFour.appendChild(divSave);
	    rowFour.appendChild(divCancel);

	    myForm.appendChild(rowOne);
	    myForm.appendChild(rowTwo);
	    myForm.appendChild(rowThree);
	    myForm.appendChild(rowFour);
	    return myForm;
    }
	
    function drawTable(arr) {
    	//create table
        var table = document.createElement('table');
        table.setAttribute('class', 'table table-hover');
        //create table header and populate it
        var header = table.createTHead();
        header.setAttribute('id', 'tableHeadings');
        var headerRow = header.insertRow(0);
        var columnNames = ['Student', 'Email', 'Profile Picture', 'Skills', 'Controls'];
        for (var i = 0; i < columnNames.length; i++) {
        	var th = document.createElement('th');
        	th.setAttribute('class', 'text-center');
            if (i === 2 || i === 4) {
                th.innerHTML = columnNames[i];
            } else {
        	    th.innerHTML = columnNames[i] + '&nbsp;' + '<span class="glyphicon glyphicon-sort"></span>';
            }
        	headerRow.appendChild(th);
        }
        //create tbody and populate it
        var tblBody = table.createTBody();
        tblBody.setAttribute('id', 'studentsList');
        if(arr.length) {   
            for (var i = 0; i < arr.length; i++) {
            	var tr = tblBody.insertRow(i);
                tr.innerHTML = formTableRow(arr[i]);
            }
        }
        return table;
    }

    function formTableRow(obj) {
        var source = obj.img || 'http://babakunyho.eu/img/default-no-image.png';
        var row = '<td>' + obj.name + ' ' + obj.lastName + '</td>';
        row += '<td>' + obj.email + '</td>';
        row += '<td>' + '<img src=' + source + ' class="img-responsive img-rounded" style="max-width: 200px; max-height: 350px;" alt="Profile Picture">' + '</td>';
        // row += '<td><div style="background: url(' + source + ') no-repeat center center; background-size: cover; width: 200px; height: 200px;"></div></td>';
        row += '<td>' + obj.skills.join(', ') + '</td>';
        row += '<td><div class="row text-center"><div class="col-md-offset-2 col-md-4 edit"><button class="btn btn-default"><span class="glyphicon glyphicon-edit"></span></button></div><div class="col-md-4 trash"><button class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button></div></div></td>';
        return row;
    }

    document.getElementById('tableHeadings').addEventListener('click', tableHeadClickHandler);
    var ascStudent = 1;
    var ascEmail = 1;
    var ascSkills = 1;
    function tableHeadClickHandler(e) {
        //define which cell was clicked, find out its index
        var target = e.target || e.srcElement;
        var thClicked = target;
        while (thClicked.tagName !== "TH") {
            thClicked = thClicked.parentNode;
        }
        var cellIndex = thClicked.cellIndex;
        if(cellIndex === 2 || cellIndex === 4) return;
        var dir;
        if (cellIndex === 0) {
            ascStudent *= -1;
            ascEmail = 1;
            ascSkills = 1;
            dir = ascStudent;
        } else if (cellIndex === 1) {
            ascStudent = 1;
            ascEmail *= -1;
            ascSkills = 1;
            dir = ascEmail;
        } else {
            ascStudent = 1;
            ascEmail = 1;
            ascSkills *= -1;
            dir = ascSkills;
        }
        sortTable(cellIndex, dir);
    }

    function sortTable(column, dir) {
        var tbody = document.getElementById('studentsList');
        var rows = [].slice.call(tbody.rows)
        .sort(function(rowA, rowB) {
            return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? -1 * dir : dir;
        });
        rows.forEach((row) => tbody.append(row));
    }

    document.getElementById('studentsList').addEventListener('click', tableBodyClickHandler);

    function tableBodyClickHandler(e) {
        //define which element was clicked, find out the tr element it belongs to and tr index inside tbody element
    	var target = e.target || e.srcElement;
    	var tdClicked = target;
    	var trClicked = target.parentNode;
    	while (trClicked.tagName !== "TR") {
    		trClicked = trClicked.parentNode;
    	}
    	var rowIndex = trClicked.sectionRowIndex;
        //check if target is not a button and if not, then alert corresponding student name and surname
        //otherwise, perform editing or removing logic accordingly
    	if(target.tagName !== 'BUTTON' && target.parentNode.tagName !== 'BUTTON') {
    	    alert(trClicked.cells[0].innerHTML);
        } else if (target.classList.contains('glyphicon-edit') || (target.firstChild && target.firstChild.classList.contains('glyphicon-edit'))) {
        	isEdited = rowIndex;
        	document.getElementById('firstname').value = students[rowIndex].name;
        	document.getElementById('lastname').value = students[rowIndex].lastName;
        	document.getElementById('email').value = students[rowIndex].email;
        	document.getElementById('profile').value = students[rowIndex].img;
        	document.getElementById('skills').value = students[rowIndex].skills.join(', ');
        } else if (target.classList.contains('glyphicon-trash') || (target.firstChild && target.firstChild.classList.contains('glyphicon-trash'))) {
        	students.splice(rowIndex, 1);
        	this.deleteRow(rowIndex);
        }
    }

    document.getElementById('myForm').addEventListener('submit', function(e) {
    	e.preventDefault();
    	if (isEdited) {
    		var editedStudent = students[isEdited];
    		editedStudent.name = document.getElementById('firstname').value;
    		editedStudent.lastName = document.getElementById('lastname').value;
    		editedStudent.img = document.getElementById('profile').value;
    		editedStudent.email = document.getElementById('email').value;
    		editedStudent.skills = document.getElementById('skills').value.split(',');
    		var oldRow = document.getElementById('studentsList').rows[isEdited];
    		var newRow = document.createElement('tr');
            newRow.innerHTML = formTableRow(editedStudent);
            document.getElementById('studentsList').replaceChild(newRow, oldRow);
            this.reset();
    		isEdited = undefined;
    	}
    	else {
    		var newStudent = {};
    		newStudent.name = document.getElementById('firstname').value;
    		newStudent.lastName = document.getElementById('lastname').value;
    		newStudent.img = document.getElementById('profile').value;
    		newStudent.email = document.getElementById('email').value;
    		newStudent.skills = document.getElementById('skills').value.split(',');
    		students.push(newStudent);
    		var tr = document.getElementById('studentsList').insertRow(-1);
            tr.innerHTML = formTableRow(newStudent);
            this.reset();
    	}
    })
})();