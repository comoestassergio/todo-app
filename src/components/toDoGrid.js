const grid = {
    render: function(){
        this.gridDiv = document.createElement('div')
        this.gridDiv.classList.add('content__todo-grid')

        return this.gridDiv
    },

    addThings: function(...things){
        things.forEach(thing => {
            const gridItem = document.createElement('div')
            gridItem.classList.add('todo-grid__item')
            this.gridDiv.appendChild(gridItem)
        })
    }
}

export default grid