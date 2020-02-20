AFRAME.registerComponent( 'button-component', {
    init : function() {
        console.log('init component');

        const Context_AF = this;
        Context_AF.originalScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x * 1.1, Context_AF.originalScale.y * 1.1, Context_AF.originalScale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x, Context_AF.originalScale.y, Context_AF.originalScale.z);
        });
    }
});