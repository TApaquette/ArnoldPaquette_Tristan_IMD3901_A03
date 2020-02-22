AFRAME.registerComponent( 'yellow-component', {
    init : function() {
        console.log('init yellow');

        const Context_AF = this;
        let tile = document.getElementById("yellow");

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click yellow');
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            tile.setAttribute('material', 'color:#FFFF44')
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            tile.setAttribute('material', 'color:#FFFF00')
        });
    }
});