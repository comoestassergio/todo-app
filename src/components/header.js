const headerEl = {
    render: function(){
        this.header = document.createElement('header')
        this.h1 = document.createElement('h1')

        this.h1.classList.add('logo')
        this.h1.textContent = 'theToDoApp'

        this.header.appendChild(this.h1)

        return this.header
    },

    setLogo: function(name){
        this.h1.textContent = name
    }
}

export default headerEl
