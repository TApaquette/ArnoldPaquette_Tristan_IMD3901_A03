AFRAME.registerComponent( 'blue-component', {
    init : function() {
        console.log('init blue');

        const Context_AF = this;
        let tile = document.getElementById("blue");

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click blue');
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            tile.setAttribute('material', 'color:#2222FF')
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            tile.setAttribute('material', 'color:#0000FF')
        });
    }
});