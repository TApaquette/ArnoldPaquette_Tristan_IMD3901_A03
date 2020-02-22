AFRAME.registerComponent( 'green-component', {
    init : function() {
        console.log('init green');

        const Context_AF = this;
        let tile = document.getElementById("green");

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click green');
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            tile.setAttribute('material', 'color:#44FF44')
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            tile.setAttribute('material', 'color:#00FF00')
        });
    }
});