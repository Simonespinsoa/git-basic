const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const player = {
    x: 50,
    y: 50,
    size: 30,
    color: 'blue',
    speed: 5
};

const player2 = {
    x: 100,
    y: 100,
    size: 30,
    color: 'green',
    speed: 5
};

const enemy = {
    x:300,
    y:300,
    size: 30,
    color: 'red',
    dx: 2,
    dy: 2
};

let score = 0;
let lives = 3;
let gameOver = false;

function drawBox(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    clearCanvas();
    drawBox(player.x, player.y, player.size, player.color);
    drawBox(player2.x, player2.y, player2.size, player2.color); 
    drawBox(enemy.x, enemy.y, enemy.size, enemy.color);
}

function updateEnemy(){
    enemy.x += enemy.dx;
    enemy.y += enemy.dy;

    if (enemy.x <= 0 || enemy.x + enemy.size >= canvas.width) {
        enemy.dx *= -1; // Reverse direction on x-axis
    }
    if (enemy.y <= 0 || enemy.y + enemy.size >= canvas.height) {
        enemy.dy *= -1; // Reverse direction on y-axis
    }
}

function checkCollisionBox(a, b) {
    
    return (
        a.x < b.x + b.size &&
        a.x + a.size > b.x &&
        a.y < b.y + b.size &&
        a.y + a.size > b.y
    );
}

function checkCollisions() {
    // Azul come verde
    if (checkCollisionBox(player, player2)) {
        score++;
        document.getElementById('score').textContent = score;
        
        player2.x = Math.random() * (canvas.width - player2.size);
        player2.y = Math.random() * (canvas.height - player2.size);
    }
    
        // Verde come azul
        if (checkCollisionBox(player, player2)) {
            loseLife();
            player.x = canvas.width / 2 - player.size / 2;
            player.y = canvas.height / 2 - player.size / 2;
            // Reposiciona el verde en un lugar aleatorio
            player2.x = Math.random() * (canvas.width - player2.size);
            player2.y = Math.random() * (canvas.height - player2.size);
            return; // Evita que sume puntos si el verde te come
        }
        // Azul come rojo
        if (checkCollisionBox(player, enemy)) {
            score++;
            document.getElementById('score').textContent = score;
            enemy.x = Math.random() * (canvas.width - enemy.size);
            enemy.y = Math.random() * (canvas.height - enemy.size);
            enemy.dx *= 1.05;
            enemy.dy *= 1.05;
        }
    }
    


function update(){
    if (gameOver) return;

    draw();
    updateEnemy();
    checkCollisions();

    if (player.x < 0 || player.x + player.size > canvas.width ||
        player.y < 0 || player.y + player.size > canvas.height) {
        loseLife();
        player.x = canvas.width / 2;
        player.y = canvas.height / 2;
    }
}

document.addEventListener('keydown', (e) => {
    if (gameOver) return;

    switch (e.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
});

function resetGame() {
    score = 0;
    lives = 3;
    player.x = 50;
    player.y = 50;

    enemy.dx = 2;
    enemy.dy = 2;
    update();
}

function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
