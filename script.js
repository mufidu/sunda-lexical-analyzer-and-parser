function lexical_analyzer(sentence) {
    let input_string = sentence.toLowerCase() + '#'

    // initializations
    let alphabet_list = 'abcdefghijklmnopqrstuvwxyz'
    let state_list = [
        'q0', 'q1', 'q2', 'q3', 'q4',
        'q5', 'q6', 'q7', 'q8', 'q9',
        'q10', 'q11', 'q12', 'q13', 'q14',
        'q15', 'q16', 'q17', 'q18', 'q19',
        'q20', 'q21', 'q22', 'q23', 'q24',
        'q25', 'q26', 'q27', 'q28', 'q29',
        'q30', 'q31', 'q32', 'q33', 'q34',
        'q35', 'q36', 'q37', 'q38'
    ]

    let transition_table = {}

    for (let state of state_list) {
        for (let alphabet of alphabet_list) {
            transition_table[(`${state}, ${alphabet}`)] = 'error'
        }
        transition_table[(`${state}, #`)] = 'error'
        transition_table[(`${state}, ' '`)] = 'error'
    }

    for (const key of Object.keys(transition_table)) {
        console.log(key + ":" + transition_table[key])
    };

    // spaces before input string
    transition_table['q0', ' '] = 'q0'

    // update the transition table for the following token: aa
    transition_table[('q0', 'a')] = 'q1'
    transition_table[('q1', 'a')] = 'q2'

    transition_table[('q2', ' ')] = 'q3'
    transition_table[('q2', '#')] = 'accept'

    transition_table[('q3', ' ')] = 'q3'
    transition_table[('q3', '#')] = 'accept'

    // update the transition table for the following token: teteh
    transition_table[('q0', 't')] = 'q11'
    transition_table[('q11', 'e')] = 'q12'
    transition_table[('q12', 't')] = 'q8'
    transition_table[('q8', 'e')] = 'q9'
    transition_table[('q10', 'h')] = 'q10'

    transition_table[('q10', ' ')] = 'q3'
    transition_table[('q10', '#')] = 'accept'

    // update the transition table for the following token: acuk
    transition_table[('q0', 'a')] = 'q1'
    transition_table[('q1', 'c')] = 'q4'
    transition_table[('q4', 'u')] = 'q5'
    transition_table[('q5', 'k')] = 'q6'

    transition_table[('q6', ' ')] = 'q3'
    transition_table[('q6', '#')] = 'accept'

    // update the transition table for the following token: kueh
    transition_table[('q0', 'k')] = 'q7'
    transition_table[('q7', 'u')] = 'q8'
    transition_table[('q8', 'e')] = 'q9'
    transition_table[('q9', 'h')] = 'q10'

    // update the transition table for the following token: meuli
    transition_table[('q0', 'm')] = 'q34'
    transition_table[('q34', 'e')] = 'q35'
    transition_table[('q35', 'u')] = 'q36'
    transition_table[('q36', 'l')] = 'q37'
    transition_table[('q37', 'i')] = 'q38'

    transition_table[('q38', ' ')] = 'q3'
    transition_table[('q38', '#')] = 'accept'

    // update the transition table for the following token: hayang
    transition_table[('q0', 'h')] = 'q18'
    transition_table[('q18', 'a')] = 'q19'
    transition_table[('q19', 'y')] = 'q20'
    transition_table[('q20', 'a')] = 'q21'
    transition_table[('q21', 'n')] = 'q22'
    transition_table[('q22', 'g')] = 'q23'

    transition_table[('q23', ' ')] = 'q3'
    transition_table[('q23', '#')] = 'accept'

    // update the transition table for the following token: nyieun
    transition_table[('q0', 'n')] = 'q28'
    transition_table[('q28', 'y')] = 'q29'
    transition_table[('q29', 'i')] = 'q30'
    transition_table[('q30', 'e')] = 'q31'
    transition_table[('q31', 'u')] = 'q32'
    transition_table[('q32', 'n')] = 'q33'

    transition_table[('q33', ' ')] = 'q3'
    transition_table[('q33', '#')] = 'accept'

    // update the transition table for the following token: hape
    transition_table[('q0', 'h')] = 'q18'
    transition_table[('q18', 'a')] = 'q19'
    transition_table[('q19', 'p')] = 'q24'
    transition_table[('q24', 'e')] = 'q25'

    transition_table[('q25', ' ')] = 'q3'
    transition_table[('q25', '#')] = 'accept'

    // update the transition table for the following token: imah
    transition_table[('q0', 'i')] = 'q26'
    transition_table[('q26', 'm')] = 'q27'
    transition_table[('q27', 'a')] = 'q9'
    transition_table[('q9', 'h')] = 'q10'

    // update the transition table for the following token: sapedah
    transition_table[('q0', 's')] = 'q13'
    transition_table[('q13', 'a')] = 'q14'
    transition_table[('q14', 'p')] = 'q15'
    transition_table[('q15', 'e')] = 'q16'
    transition_table[('q16', 'd')] = 'q17'
    transition_table[('q17', 'a')] = 'q9'
    transition_table[('q10', 'h')] = 'q10'

    // transition for new token
    transition_table[('q3', 'a')] = 'q1'
    transition_table[('q3', 'i')] = 'q26'
    transition_table[('q3', 'k')] = 'q7'
    transition_table[('q3', 't')] = 'q11'
    transition_table[('q3', 's')] = 'q13'
    transition_table[('q3', 'h')] = 'q18'
    transition_table[('q3', 'n')] = 'q28'
    transition_table[('q3', 'm')] = 'q34'


    // lexical analysis
    let idx_token = 0
    let state = 'q0'
    let current_token = ''
    for (let idx_char = 0; state != 'accept'; idx_char++) {
        let current_char = input_string[idx_char]
        current_token += current_char
        state = transition_table[(`${state}, ${current_char}`)]
        if (state == 'q2' || state == 'q6' || state == 'q10' || state == 'q23' || state == 'q25' || state == 'q33' || state == 'q38') {
            idx_token += 1
            current_token = ''
        }
        if (state == 'error') {
            idx_token += 1
            break
        }
    }

    // conclusion
    if (state == 'accept') {
        return true
    } else {
        return false
    }
}

function parser(sentence) {
    let tokens = sentence.toLowerCase().split(' ')
    tokens.push('EOS')

    // symbol definition
    let non_terminals = ['S', 'NN', 'VB']
    let terminals = ['aa', 'teteh', 'meuli', 'nyieun', 'hayang', 'kueh', 'imah', 'sapedah', 'hape', 'acuk'
    ]

    // parse table definition
    let parse_table = {}

    parse_table[('S', 'aa')] = ['NN', 'VB', 'NN']
    parse_table[('S', 'teteh')] = ['NN', 'VB', 'NN']
    parse_table[('S', 'acuk')] = ['NN', 'VB', 'NN']
    parse_table[('S', 'kueh')] = ['NN', 'VB', 'NN']
    parse_table[('S', 'imah')] = ['NN', 'VB', 'NN']
    parse_table[('S', 'sapedah')] = ['NN', 'VB', 'NN']
    parse_table[('S', 'hape')] = ['NN', 'VB', 'NN']
    parse_table[('S', 'hayang')] = ['error']
    parse_table[('S', 'nyieun')] = ['error']
    parse_table[('S', 'meuli')] = ['error']
    parse_table[('S', 'EOS')] = ['error']

    parse_table[('NN', 'aa')] = ['aa']
    parse_table[('NN', 'teteh')] = ['teteh']
    parse_table[('NN', 'acuk')] = ['acuk']
    parse_table[('NN', 'kueh')] = ['kueh']
    parse_table[('NN', 'imah')] = ['imah']
    parse_table[('NN', 'sapedah')] = ['sapedah']
    parse_table[('NN', 'hape')] = ['hape']
    parse_table[('NN', 'hayang')] = ['error']
    parse_table[('NN', 'nyieun')] = ['error']
    parse_table[('NN', 'meuli')] = ['error']
    parse_table[('NN', 'EOS')] = ['error']

    parse_table[('VB', 'aa')] = ['error']
    parse_table[('VB', 'teteh')] = ['error']
    parse_table[('VB', 'acuk')] = ['error']
    parse_table[('VB', 'kueh')] = ['error']
    parse_table[('VB', 'imah')] = ['error']
    parse_table[('VB', 'sapedah')] = ['error']
    parse_table[('VB', 'hape')] = ['error']
    parse_table[('VB', 'hayang')] = ['hayang']
    parse_table[('VB', 'nyieun')] = ['nyieun']
    parse_table[('VB', 'meuli')] = ['meuli']
    parse_table[('VB', 'EOS')] = ['error']

    // stack initialization
    let stack = []
    stack.push('#')
    stack.push('S')

    // input reading initialization
    let idx_token = 0
    let symbol = tokens[idx_token]

    // parsing
    while (stack.length > 0) {
        let top = stack[stack.length - 1]
        if (top in terminals) {
            if (top == symbol) {
                stack.pop()
                idx_token += 1
                symbol = tokens[idx_token]
                if (symbol == 'EOS') {
                    stack.pop()
                }
            } else {
                console.log('error')
                break
            }
        } else if (top in non_terminals) {
            if (parse_table[(top, symbol)][0] != 'error') {
                stack.pop()
                let pushed_symbol = parse_table[(top, symbol)]
                for (let i = pushed_symbol.length - 1; i >= 0; i--) {
                    stack.push(pushed_symbol[i])
                }
            } else {
                console.log('error')
                break
            }
        } else {
            console.log('error')
            break
        }
        console.log('isi stack: ', stack, '\n')
    }

    // conclusion
    if (symbol == 'EOS' && stack.length == 0) {
        return true
    } else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const formInput = document.querySelector('#input');
    const lexicalResult = document.querySelector('#lexical');
    const parserResult = document.querySelector('#parser');

    const onSubmit = async (event) => {
        event.preventDefault();
        const input = formInput.value;

        lexicalResult.innerHTML = '';
        parserResult.innerHTML = '';

        // Show spinner for 1.5 seconds
        lexicalResult.innerHTML = '<img src="assets/138.gif" alt="loading..." style="width: 35px; height: 35px;">';

        setTimeout(() => {
            if (lexical_analyzer(input)) {
                lexicalResult.innerHTML = `<p>\"${input}\" is accepted by lexical analyzer,</p>`;
            } else {
                lexicalResult.innerHTML = `<p>\"${input}\" is rejected by lexical analyzer,</p>`;
            }

            // Show spinner for 1.5 seconds
            parserResult.innerHTML = '<img src="assets/138.gif" alt="loading..." style="width: 35px; height: 35px;">';
            setTimeout(() => {
                if (parser(input)) {
                    parserResult.innerHTML = `<p>...and accepted by the parser.</p>`;
                } else {
                    parserResult.innerHTML = `<p>...and rejected by the parser.</p>`;
                }
            }, 1500);
        }, 1500);
    }

    const button = document.querySelector('button');
    button.addEventListener('click', onSubmit);
});
