new Vue({
    el: '#app',
    data: {
        playerHeath: 100,
        monsterHeath: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHeath = 100;
            this.monsterHeath = 100;
            this.turns = []
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHeath -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monters for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monstterAttack();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHeath -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Monster hits Player for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monstterAttack();
        },
        monstterAttack: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHeath -= this.calculateDamage(5, 12);
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
        },
        heal: function () {
            if (this.playerHeath <= 90) {
                this.playerHeath += 10;
            } else {
                this.playerHeath = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player Heal + 10 '
            });
            this.monstterAttack();
        },
        giveUp: function () {
            if (confirm("Are you give up ? ")) {
                this.gameIsRunning = false;
                this.turns = []
            }
           
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHeath <= 0) {
                if (confirm('You won ! New game ?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHeath <= 0) {
                if (confirm('You lost ! New game ?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    },
});