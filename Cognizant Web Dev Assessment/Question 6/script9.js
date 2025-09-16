document.getElementById('textInput').addE
ventListener('input', function(e) {
const digits = e.target.value.replace(/\D/g,
'');
document.getElementById('digitCount').text
Content = digits.length;
});