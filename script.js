var timer = 15;
var intervalid;

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj">0</div>');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="helloText">Нажмите enter, чтобы начать игру</div>');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="timerObj"></div>');
var helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = "center";
helloText.style.fontSize = 72+"pt";
var orange = document.getElementById('orange');
orange.style.display = 'none';
var pig = document.getElementById('pig');
pig.style.display = 'none';
var scoreObj = document.getElementById('scoreObj');
var score = 0;
scoreObj.style.display = 'none';
var timerObj = document.getElementById('timerObj');
timerObj.style.textAlign = "center";
timerObj.style.fontSize = 72+"pt";
timerObj.style.display = 'none';
var enterListener = function(event){startGame(event)};
document.addEventListener("keydown", enterListener);
var mouseListener = function(event){mouseMoveFunc(event)};
document.addEventListener("mousemove", mouseListener);
spawnOrange();

function startGame(event){
	if (event.keyCode ==13){
		score = 0;
		setScore(0);

		helloText.style.display = 'none';
		scoreObj.style.display = 'block';
		orange.style.display = 'block';
		pig.style.display = 'block';

		document.removeEventListener('keydown', enterListener);
		document.addEventListener('mousemove', mouseListener);

		spawnOrange();

		timerObj.style.display = 'block';
		timer = 15;
		setTimer(timer);

		intervalid = setInterval(function(){
			cntdwn();
		}, 1000);
	}
}

function mouseMoveFunc(event){
	pig.style.left=event.clientX - 64 + 'px';
	pig.style.top=event.clientY - 64 + 'px';
	checkCollision();
}

function checkCollision(){
	console.log();
	if(Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft, 2) + Math.pow(pig.offsetTop - orange.offsetTop, 2)) < 128)
	{
		spawnOrange();
		score+=5;
		setScore(score);
	}
}

function spawnOrange(){
	orange.style.left=Math.random()*(window.innerWidth-128) + 'px';
	orange.style.top=Math.random()*(window.innerHeight-128) + 'px';
}

function setScore(scoreToSet){
	scoreObj.innerHTML = "Очки: "+scoreToSet;
}

function setTimer(timeToSet){
	console.log(timer);
	timerObj.innerHTML = "Время: "+ timeToSet;
}

function cntdwn(){
	timer-=1;
	setTimer(timer);
	if (timer==0){
		clearInterval(intervalid);
		document.removeEventListener('mousemove', mouseListener);
		helloText.innerHTML = "Игра окончена. Ваш счёт: "+ score+ ". <br> Чтобы начать игру заново, нажмите enter.";
		helloText.style.display = 'block';
		pig.style.display = 'none';
		orange.style.display = 'none';
		scoreObj.style.display = 'none';
		timerObj.style.display = 'none';
		document.addEventListener("keydown", enterListener);
	}
}

pig.style.position = 'fixed';
orange.style.position = 'fixed';
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72+"pt";
setScore(0);