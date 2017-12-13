new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(3, 10);
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(3, 12);
            this.checkWin();
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        calculateDamage: function (min, max) {
            return Math.min(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});