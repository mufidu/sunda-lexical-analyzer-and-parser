function lexicalAnalyzer(sentence) {
    console.log(`====== Lexical Analyzer Result ======`);
    let inputString = sentence.toLowerCase() + '#'

    // initializations
    let alphabetList = 'abcdefghijklmnopqrstuvwxyz'
    let stateList = [
        'q0', 'q1', 'q2', 'q3', 'q4',
        'q5', 'q6', 'q7', 'q8', 'q9',
        'q10', 'q11', 'q12', 'q13', 'q14',
        'q15', 'q16', 'q17', 'q18', 'q19',
        'q20', 'q21', 'q22', 'q23', 'q24',
        'q25', 'q26', 'q27', 'q28', 'q29',
        'q30', 'q31', 'q32', 'q33', 'q34',
        'q35', 'q36', 'q37', 'q38'
    ]

    let transitionTable = {}

    for (let state of stateList) {
        for (let alphabet of alphabetList) {
            transitionTable[(`${state}, ${alphabet}`)] = 'error'
        }
        transitionTable[(`${state}, #`)] = 'error'
        transitionTable[(`${state}, ' '`)] = 'error'
    }

    // spaces before input string
    transitionTable['q0,  '] = 'q0'

    // update the transition table for the following token: aa
    transitionTable[('q0, a')] = 'q1'
    transitionTable[('q1, a')] = 'q2'

    transitionTable[('q2,  ')] = 'q3'
    transitionTable[('q2, #')] = 'accept'

    transitionTable[('q3,  ')] = 'q3'
    transitionTable[('q3, #')] = 'accept'

    // update the transition table for the following token: teteh
    transitionTable[('q0, t')] = 'q11'
    transitionTable[('q11, e')] = 'q12'
    transitionTable[('q12, t')] = 'q8'
    transitionTable[('q8, e')] = 'q9'
    transitionTable[('q10, h')] = 'q10'

    transitionTable[('q10,  ')] = 'q3'
    transitionTable[('q10, #')] = 'accept'

    // update the transition table for the following token: acuk
    transitionTable[('q0, a')] = 'q1'
    transitionTable[('q1, c')] = 'q4'
    transitionTable[('q4, u')] = 'q5'
    transitionTable[('q5, k')] = 'q6'

    transitionTable[('q6,  ')] = 'q3'
    transitionTable[('q6, #')] = 'accept'

    // update the transition table for the following token: kueh
    transitionTable[('q0, k')] = 'q7'
    transitionTable[('q7, u')] = 'q8'
    transitionTable[('q8, e')] = 'q9'
    transitionTable[('q9, h')] = 'q10'

    // update the transition table for the following token: meuli
    transitionTable[('q0, m')] = 'q34'
    transitionTable[('q34, e')] = 'q35'
    transitionTable[('q35, u')] = 'q36'
    transitionTable[('q36, l')] = 'q37'
    transitionTable[('q37, i')] = 'q38'

    transitionTable[('q38,  ')] = 'q3'
    transitionTable[('q38, #')] = 'accept'

    // update the transition table for the following token: hayang
    transitionTable[('q0, h')] = 'q18'
    transitionTable[('q18, a')] = 'q19'
    transitionTable[('q19, y')] = 'q20'
    transitionTable[('q20, a')] = 'q21'
    transitionTable[('q21, n')] = 'q22'
    transitionTable[('q22, g')] = 'q23'

    transitionTable[('q23,  ')] = 'q3'
    transitionTable[('q23, #')] = 'accept'

    // update the transition table for the following token: nyieun
    transitionTable[('q0, n')] = 'q28'
    transitionTable[('q28, y')] = 'q29'
    transitionTable[('q29, i')] = 'q30'
    transitionTable[('q30, e')] = 'q31'
    transitionTable[('q31, u')] = 'q32'
    transitionTable[('q32, n')] = 'q33'

    transitionTable[('q33,  ')] = 'q3'
    transitionTable[('q33, #')] = 'accept'

    // update the transition table for the following token: hape
    transitionTable[('q0, h')] = 'q18'
    transitionTable[('q18, a')] = 'q19'
    transitionTable[('q19, p')] = 'q24'
    transitionTable[('q24, e')] = 'q25'

    transitionTable[('q25,  ')] = 'q3'
    transitionTable[('q25, #')] = 'accept'

    // update the transition table for the following token: imah
    transitionTable[('q0, i')] = 'q26'
    transitionTable[('q26, m')] = 'q27'
    transitionTable[('q27, a')] = 'q9'
    transitionTable[('q9, h')] = 'q10'

    // update the transition table for the following token: sapedah
    transitionTable[('q0, s')] = 'q13'
    transitionTable[('q13, a')] = 'q14'
    transitionTable[('q14, p')] = 'q15'
    transitionTable[('q15, e')] = 'q16'
    transitionTable[('q16, d')] = 'q17'
    transitionTable[('q17, a')] = 'q9'
    transitionTable[('q10, h')] = 'q10'

    // transition for new token
    transitionTable[('q3, a')] = 'q1'
    transitionTable[('q3, i')] = 'q26'
    transitionTable[('q3, k')] = 'q7'
    transitionTable[('q3, t')] = 'q11'
    transitionTable[('q3, s')] = 'q13'
    transitionTable[('q3, h')] = 'q18'
    transitionTable[('q3, n')] = 'q28'
    transitionTable[('q3, m')] = 'q34'


    // lexical analysis
    let idxToken = 0
    let state = 'q0'
    let currentToken = ''
    for (let idx_char = 0; state != 'accept'; idx_char++) {
        let currentChar = inputString[idx_char]
        currentToken += currentChar
        state = transitionTable[(`${state}, ${currentChar}`)]
        if (state == 'q2' || state == 'q6' || state == 'q10' || state == 'q23' || state == 'q25' || state == 'q33' || state == 'q38') {
            idxToken += 1
            console.log(`Token ${idxToken}: ${currentToken} is valid`)
            currentToken = ''
        }
        if (state == 'error') {
            idxToken += 1
            console.log(`Token ${idxToken}: ${currentToken} is invalid!`)
            break
        }
    }

    // conclusion
    if (state == 'accept') {
        console.log(`Input ${sentence} is valid!`)
        return true
    } else {
        console.log(`Input ${sentence} is invalid!`)
        return false
    }
}

function parser(sentence) {
    console.log(`=========== Parser Result ===========`)
    let tokens = sentence.toLowerCase().split(' ')
    tokens.push('EOS')

    // symbol definition
    let nonTerminals = ['S', 'NN', 'VB']
    let terminals = ['aa', 'teteh', 'meuli', 'nyieun', 'hayang', 'kueh', 'imah', 'sapedah', 'hape', 'acuk'
    ]

    // parse table definition
    let parseTable = {}

    parseTable[('S, aa')] = ['NN', 'VB', 'NN']
    parseTable[('S, teteh')] = ['NN', 'VB', 'NN']
    parseTable[('S, acuk')] = ['NN', 'VB', 'NN']
    parseTable[('S, kueh')] = ['NN', 'VB', 'NN']
    parseTable[('S, imah')] = ['NN', 'VB', 'NN']
    parseTable[('S, sapedah')] = ['NN', 'VB', 'NN']
    parseTable[('S, hape')] = ['NN', 'VB', 'NN']
    parseTable[('S, hayang')] = ['error']
    parseTable[('S, nyieun')] = ['error']
    parseTable[('S, meuli')] = ['error']
    parseTable[('S, EOS')] = ['error']

    parseTable[('NN, aa')] = ['aa']
    parseTable[('NN, teteh')] = ['teteh']
    parseTable[('NN, acuk')] = ['acuk']
    parseTable[('NN, kueh')] = ['kueh']
    parseTable[('NN, imah')] = ['imah']
    parseTable[('NN, sapedah')] = ['sapedah']
    parseTable[('NN, hape')] = ['hape']
    parseTable[('NN, hayang')] = ['error']
    parseTable[('NN, nyieun')] = ['error']
    parseTable[('NN, meuli')] = ['error']
    parseTable[('NN, EOS')] = ['error']

    parseTable[('VB, aa')] = ['error']
    parseTable[('VB, teteh')] = ['error']
    parseTable[('VB, acuk')] = ['error']
    parseTable[('VB, kueh')] = ['error']
    parseTable[('VB, imah')] = ['error']
    parseTable[('VB, sapedah')] = ['error']
    parseTable[('VB, hape')] = ['error']
    parseTable[('VB, hayang')] = ['hayang']
    parseTable[('VB, nyieun')] = ['nyieun']
    parseTable[('VB, meuli')] = ['meuli']
    parseTable[('VB, EOS')] = ['error']

    // stack initialization
    let stack = []
    stack.push('#')
    stack.push('S')

    // input reading initialization
    let idxToken = 0
    let symbol = tokens[idxToken]

    // parsing
    while (stack.length > 0) {
        let top = stack[stack.length - 1]
        console.log(`Top: ${top}`)
        console.log(`Symbol: ${symbol}`)
        if (terminals.includes(top)) {
            console.log(`${top} is a terminal`)
            if (top == symbol) {
                stack.pop()
                idxToken += 1
                symbol = tokens[idxToken]
                if (symbol == 'EOS') {
                    console.log(`Stack: ${stack}`)
                    stack.pop()
                }
            } else {
                console.log('Error')
                break
            }
        } else if (nonTerminals.includes(top)) {
            console.log(`${top} is a non-terminal`)
            if (parseTable[(`${top}, ${symbol}`)] && parseTable[(`${top}, ${symbol}`)][0] != 'error') {
                stack.pop()
                let pushed_symbol = parseTable[(`${top}, ${symbol}`)]
                for (let i = pushed_symbol.length - 1; i >= 0; i--) {
                    stack.push(pushed_symbol[i])
                }
            } else {
                console.log('Error')
                break
            }
        } else {
            console.log('Parsing error')
            break
        }
        console.log(`Stack: ${stack}\n`)
    }

    // conclusion
    if (symbol == 'EOS' && stack.length == 0) {
        console.log(`Input ${sentence} is accepted!`)
        return true
    } else {
        console.log(`Input ${sentence} is rejected! Check your grammar!`)
        return false
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const formInput = document.querySelector('#input');
    const lexicalResult = document.querySelector('#lexical');
    const parserResult = document.querySelector('#parser');
    const details = document.querySelector('#details');

    const onSubmit = async (event) => {
        event.preventDefault();
        const input = formInput.value;
        console.clear()

        lexicalResult.innerHTML = '';
        parserResult.innerHTML = '';
        details.innerHTML = '';

        // Show spinner for 1.5 seconds
        lexicalResult.innerHTML = '<img src="assets/138.gif" alt="loading..." style="width: 35px; height: 35px;">';

        setTimeout(() => {
            if (lexicalAnalyzer(input)) {
                lexicalResult.innerHTML = `<p>\"${input}\" is accepted by lexical analyzer,</p>`;
            } else {
                lexicalResult.innerHTML = `<p>\"${input}\" is rejected by lexical analyzer,</p>`;
            }

            // Show spinner for 1.5 seconds
            parserResult.innerHTML = '<img src="assets/138.gif" alt="loading..." style="width: 35px; height: 35px;">';
            setTimeout(() => {
                if (!lexicalAnalyzer(input)) {
                    parserResult.innerHTML = `<p>...and obviously also rejected by the parser,</p>`;
                } else {
                    if (parser(input)) {
                        parserResult.innerHTML = `<p>...and also accepted by the parser.</p>`;
                    } else {
                        parserResult.innerHTML = `<p>...but unfortunately is rejected by the parser.</p>`;
                    }
                }

                setTimeout(() => {
                    details.innerHTML = `<p>For more details, open your console in DevTools (ctrl+shift+i)</p>`;
                }, 500);
            }, 1500);
        }, 1500);
    }

    const button = document.querySelector('button');
    button.addEventListener('click', onSubmit);
});
