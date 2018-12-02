document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/pig.png" id="pig">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="img/orange.png" id="orange">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj">0</div>');
var orange = document.getElementById('orange');
var pig = document.getElementById('pig');
var scoreObj = document.getElementById('scoreObj');
var score = 0;
var mouseListener = function(event){mouseMoveFunc(event)};
document.addEventListener("mousemove", mouseListener);
spawnOrange();

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

pig.style.position = 'fixed';
orange.style.position = 'fixed';
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72+"pt";
setScore(0);