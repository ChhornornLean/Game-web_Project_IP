const lists = document.querySelectorAll('.list')
const line = document.querySelector('.line123')
console.log(lists);
lists.forEach(li => {
    li.addEventListener('click',() => {
        const data_Header = li.getAttribute('data-Header')
        console.log(data_Header);
        if (data_Header == 'HOME') {
            line.style.setProperty('left', '7.5em')
        } else if (data_Header == 'ABOUT'){
            line.style.setProperty('left', '13em')
        } else if (data_Header == 'STORE'){
            line.style.setProperty('left', '18.5em')
        } else if (data_Header == 'NEWS'){
            line.style.setProperty('left', '24em')
        } else {
            line.style.setProperty('left', '29.5em')
        }
    }) 
})