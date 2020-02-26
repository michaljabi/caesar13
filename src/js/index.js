import '../scss/style.scss';
import caesar from './caesar';

const rotSelect = document.querySelector('.rot-select--js');
const inputText = document.querySelector('.input-text--js');
const outputText = document.querySelector('.output-text--js');
const rotOptions = [
	...Array(26).keys()
];

rotOptions.forEach(option => {
	const newOption = document.createElement('option');
	newOption.value = option;
	newOption.text = option;
	if (option === 13) newOption.selected = true;
	rotSelect.add(newOption);
});

function runCaesar(e) {
	if (e.key === 'Enter') {
		const rot = rotSelect.options[rotSelect.selectedIndex].value;

		if (inputText.value !== '') {
			console.log(caesar(inputText.value, rot));
			outputText.textContent = caesar(inputText.value, rot);
		}
	}
}

inputText.addEventListener('keyup', runCaesar);
