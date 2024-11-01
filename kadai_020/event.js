const btn =document.getElementById('btn');
const parentList = document.getElementById('parent-list');
btn.addEventListener('click', () => {
    const childList = document.createElement('h2');
    childList.textContent = 'ボタンをクリックしました';
    parentList.appendChild(childList);
});