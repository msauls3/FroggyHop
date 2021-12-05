document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const logsLeft = document.querySelectorAll('.log-left')
    const logsRight = document.querySelectorAll('.log-right')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const startBtn = document.querySelector('#button')
    const width = 9
    let currentIndex = 76
    let currentTime = 30
    let timerId
    squares[currentIndex].classList.add('froggyLily')


    //move the Frog
    function moveFroggy(e) {
        squares[currentIndex].classList.remove('froggyLog')
        squares[currentIndex].classList.remove('froggyLily')
        switch (e.keyCode) {
            case 37:
                if (currentIndex % width !== 0) currentIndex -= 1
                break
            case 38:
                if (currentIndex - width >= 0) currentIndex -= width
                break
            case 39:
                if (currentIndex % width < width - 1) currentIndex += 1
                break
            case 40:
                if (currentIndex + width < width * width) currentIndex += width
                break
            case 48:
                if (currentIndex - width >= 0) currentIndex -= width
                break
        }
        if ((currentIndex > 10 && currentIndex <= 18) || (currentIndex > 63 && currentIndex <= 71)) {
            squares[currentIndex].classList.add('froggyLog')
        } else if ((currentIndex > 27 && currentIndex <= 35) || (currentIndex > 45 && currentIndex <= 53)) {
            squares[currentIndex].classList.add('froggyLog')
        } else {
            squares[currentIndex].classList.add('froggyLily')
        }
        lose()
        win()
    }


    //move the logs
    function autoMoveLogs() {
        logsLeft.forEach(logLeft => moveLogLeft(logLeft))
        logsRight.forEach(logRight => moveLogRight(logRight))
    }

    //logs going left
    function moveLogLeft(logL) {
        switch (true) {
            case logL.classList.contains('l0'):
                logL.classList.remove('l0')
                logL.classList.add('l1')
                break
            case logL.classList.contains('l1'):
                logL.classList.remove('l1')
                logL.classList.add('l2')
                break
            case logL.classList.contains('l2'):
                logL.classList.remove('l2')
                logL.classList.add('l3')
                break
            case logL.classList.contains('l3'):
                logL.classList.remove('l3')
                logL.classList.add('l4')
                break
            case logL.classList.contains('l4'):
                logL.classList.remove('l4')
                logL.classList.add('l5')
                break
            case logL.classList.contains('l5'):
                logL.classList.remove('l5')
                logL.classList.add('l6')
                break
            case logL.classList.contains('l6'):
                logL.classList.remove('l6')
                logL.classList.add('l7')
                break
            case logL.classList.contains('l7'):
                logL.classList.remove('l7')
                logL.classList.add('l8')
                break
            case logL.classList.contains('l8'):
                logL.classList.remove('l8')
                logL.classList.add('l0')
        }
    }

    //logs going right
    function moveLogRight(logR) {
        switch (true) {
            case logR.classList.contains('l0'):
                logR.classList.remove('l0')
                logR.classList.add('l8')
                break
            case logR.classList.contains('l1'):
                logR.classList.remove('l1')
                logR.classList.add('l0')
                break
            case logR.classList.contains('l2'):
                logR.classList.remove('l2')
                logR.classList.add('l1')
                break
            case logR.classList.contains('l3'):
                logR.classList.remove('l3')
                logR.classList.add('l2')
                break
            case logR.classList.contains('l4'):
                logR.classList.remove('l4')
                logR.classList.add('l3')
                break
            case logR.classList.contains('l5'):
                logR.classList.remove('l5')
                logR.classList.add('l4')
                break
            case logR.classList.contains('l6'):
                logR.classList.remove('l6')
                logR.classList.add('l5')
                break
            case logR.classList.contains('l7'):
                logR.classList.remove('l7')
                logR.classList.add('l6')
                break
            case logR.classList.contains('l8'):
                logR.classList.remove('l8')
                logR.classList.add('l7')
                break
        }
    }

    //move the frog when its on the log moving left
    function moveWithLogLeft() {
        if ((currentIndex > 10 && currentIndex <= 18) || (currentIndex > 63 && currentIndex <= 71)) {
            squares[currentIndex].classList.remove('froggyLog')
            currentIndex -= 1
            squares[currentIndex].classList.add('froggyLog')
        }
    }

    //move the frog when its on the log moving right
    function moveWithLogRight() {
        if ((currentIndex > 27 && currentIndex <= 35) || (currentIndex > 45 && currentIndex <= 53)) {
            squares[currentIndex].classList.remove('froggyLog')
            currentIndex += 1
            squares[currentIndex].classList.add('froggyLog')
        }
    }

    //rules for frog to win
    function win() {
        if (squares[4].classList.contains('froggyLily')) {
            result.innerHTML = 'You Win!'
            //squares[currentIndex].classList.remove('froggyLily')
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFroggy)
        }
    }

    //rules for frog to lose
    function lose() {
        //wasn't registering time running out as part of the other if statement 
        if (currentTime === 0) {
            result.innerHTML = 'You Lost! Try Again?'
            if ((currentIndex > 10 && currentIndex <= 18) || (currentIndex > 63 && currentIndex <= 71)) {
                squares[currentIndex].classList.remove('froggyLog')
            } else if ((currentIndex > 27 && currentIndex <= 35) || (currentIndex > 45 && currentIndex <= 53)) {
                squares[currentIndex].classList.remove('froggyLog')
            } else {
                squares[currentIndex].classList.remove('froggyLily')
            }
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFroggy)
        }
        if ((squares[currentIndex].classList.contains('l0'))
            || (squares[currentIndex].classList.contains('l4'))
            || (squares[currentIndex].classList.contains('l5'))
            || (squares[currentIndex].classList.contains('l6'))
            || (squares[currentIndex].classList.contains('l7'))
            || (squares[currentIndex].classList.contains('l8'))
            || (squares[currentIndex].classList.contains('l9'))
        ) {
            result.innerHTML = 'You Lost! Try Again?'
            if ((currentIndex > 10 && currentIndex <= 18) || (currentIndex > 63 && currentIndex <= 71)) {
                squares[currentIndex].classList.remove('froggyLog')
                squares[currentIndex].classList.add('splash')
            } else if ((currentIndex > 27 && currentIndex <= 35) || (currentIndex > 45 && currentIndex <= 53)) {
                squares[currentIndex].classList.remove('froggyLog')
                squares[currentIndex].classList.add('splash')
            } else {
                squares[currentIndex].classList.remove('froggyLily')
                squares[currentIndex].classList.add('splash')
            }
            clearInterval(timerId)
            document.removeEventListener('keyup', moveFroggy)
        }
    }

    //all the functions that move pieces
    function movePieces() {
        currentTime--
        timeLeft.textContent = currentTime
        autoMoveLogs()
        moveWithLogLeft()
        moveWithLogRight()
        lose()
    }

    //to start, and pause the game
    startBtn.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId)
        } else {
            timerId = setInterval(movePieces, 1000)
            document.addEventListener('keyup', moveFroggy)
        }
    })

})
