const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [

  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus omnis, accusantium tenetur, aliquid animi adipisci qui illo cum fugiat quidem eius voluptate quas velit veniam. Tempore voluptatibus fugit nisi tempora temporibus? Aspernatur quae facere veritatis minima fugiat cupiditate accusamus reiciendis dolorem, quod porro reprehenderit quo molestiae magnam! Cumque, sit.",
  },
  {
    name: 'BB',
    position: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus omnis, accusantium tenetur, aliquid animi adipisci qui illo cum fugiat quidem eius voluptate quas velit veniam. Tempore voluptatibus fugit nisi tempora temporibus? Aspernatur quae facere veritatis minima fugiat cupiditate accusamus reiciendis dolorem, quod porro reprehenderit quo molestiae magnam! Cumque, sit.",
  },
  {
    name: 'CC',
    position: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus omnis, accusantium tenetur, aliquid animi adipisci qui illo cum fugiat quidem eius voluptate quas velit veniam. Tempore voluptatibus fugit nisi tempora temporibus? Aspernatur quae facere veritatis minima fugiat cupiditate accusamus reiciendis dolorem, quod porro reprehenderit quo molestiae magnam! Cumque, sit.",
  },
  {
    name: 'AA',
    position: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus omnis, accusantium tenetur, aliquid animi adipisci qui illo cum fugiat quidem eius voluptate quas velit veniam. Tempore voluptatibus fugit nisi tempora temporibus? Aspernatur quae facere veritatis minima fugiat cupiditate accusamus reiciendis dolorem, quod porro reprehenderit quo molestiae magnam! Cumque, sit.",
  }, 
]

let idx = 1

function updateTestimonial() {
 const {name, position , photo, text} = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
