function countCharacters() {
    let input = document.getElementById("inputText").value;
    let count = input.length;
    document.getElementById("charCount").innerText = count + " ký tự";
}