AFRAME.registerComponent( 'red-component', {
    init : function() {
        console.log('init red');

        const Context_AF = this;

        let tile = document.getElementById("red");

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click red');
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            tile.setAttribute('material', 'color:#FF2222')
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            tile.setAttribute('material', 'color:#FF0000')
        });
    }
});