function getVocals() {
    const sentence = getSentence();
    const foundVowels = searchVocals(sentence);
    const uniqueVowels = deleteDuplicity(foundVowels);
    return uniqueVowels.join(',');
}

function getSentence() {
    const sentence = document.getElementById('sentenceInput').value;
    return sentence.toLowerCase();
}

function deleteDuplicity(list) {
    return [...new Set(list)];
}

function searchVocals(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = [];

    for (let char of sentence) {
        if (vowels.includes(char)) {
            foundVowels.push(char);
        }
    }

    return foundVowels;
}

function processSentence() {
    const result = getVocals();
    document.getElementById('result').textContent = `Found vowels: ${result}`;
}