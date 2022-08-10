const navEl = {
    render: function(){
        this.nav = document.createElement('nav')
        this.ul = document.createElement('ul')
        this.ul.classList.add('nav__ul')

        this.createListItems('Today', 'This Week')

        this.nav.appendChild(this.ul)

        return this.nav
    },

    createListItems: function(...names){
        names.forEach(name => {
            const li = document.createElement('li')
            li.classList.add('nav__ul-li')
            li.textContent = name
            navEl.ul.appendChild(li)
        })
    }
}

export default navEl