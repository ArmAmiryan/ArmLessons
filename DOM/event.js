// const drop = document.getElementById('drop');
//     drop.addEventListener('mousedown', (e) => {
//       e.preventDefault();
//       const { pageX, pageY } = e
//       const coords = {
//         x: pageX,
//         y: pageY,
//       };

//       const shift = {
//         left: coords.x - drop.offsetLeft,
//         top: coords.y - drop.offsetTop,
//       }

//       const onMouseMove = e => {
//         e.preventDefault();
//         drop.style.left = e.pageX - shift.left + 'px'
//         drop.style.top = e.pageY - shift.top + 'px'
//       }
      
//       const onMouseUp = e => {
//         e.preventDefault();
//         document.removeEventListener('mousemove', onMouseMove)
//         document.removeEventListener('mouseup', onMouseUp);
//       }

//       document.addEventListener('mousemove', onMouseMove)
//       document.addEventListener('mouseup', onMouseUp);
//     })