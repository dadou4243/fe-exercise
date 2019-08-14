import Vue from 'vue';

export const ClickOutside = {
  priority: 700,
  bind(el, binding, vnode) {
    console.log('el:', el);
    let self = this;
    // console.log('hi');
    // this.event = function(event) {
    //   console.log('event:', event);
    //   // console.log('emitting event');
    //   self.vm.$emit(self.expression, event);
    // };
    // this.el.addEventListener('click', this.stopProp);
    // document.body.addEventListener('click', this.event);
  },

  unbind() {
    // console.log('unbind');
    // this.el.removeEventListener('click', this.stopProp);
    // document.body.removeEventListener('click', this.event);
  },
  stopProp(event) {
    // event.stopPropagation();
  }
};
