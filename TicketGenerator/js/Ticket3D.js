
const wrapper = $(".wrapper")
const ticket = $(".ticket")

const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

wrapper.addEventListener('mousemove', event => {
     ticket.style.transition = `none`
    const {offsetX , offsetY} =  event;
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;
     ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
});
wrapper.addEventListener('mouseleave', event => {
    ticket.style.transition = `transform  .4s ease-in-out`
     ticket.style.transform = `rotateX( 0deg) rotateY(0deg)`
});
