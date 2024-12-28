import Card from "./Card"
import Counter from "./Counter"
import ProductList from "./ProductList"
import Profile from "./Profile"

const App = () => {
  let users = [
    {
      img: "https://thumbs.dreamstime.com/z/relaxing-ginger-cat-hammock-sunset-tropical-beach-paradise-wearing-sunglasses-relaxes-stunning-348790734.jpg",
      role: "full stack",
      height: "400px",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/09/19/20/39/cat-7466429_640.jpg",
      role: "backend",
      height: "400px",
      width: "500px",
    },
    {
      img: "https://cdn.pixabay.com/photo/2022/09/19/20/39/cat-7466429_640.jpg",
      role: "backend",
      height: "400px",
      width: "500px",
    },

    {
      img: "https://cdn.pixabay.com/photo/2022/09/19/20/39/cat-7466429_640.jpg",
      role: "backend",
      height: "400px",
      width: "500px",
    },
  ]
  return (
    <div>
      <h1>App</h1>
      <Counter initial={10} />
      <Counter initial={20} />
      <Counter initial={30} />
      <Card title="camera" image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" price="200" />
      <Card title="camera" image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" price="200" />
      <Profile img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbK2ZR4mdtMrLWCxgRFTOvR-wvDGiNKveLv86puGGHnGfNbAzhzHQSo7VyBzmpoSMajI&usqp=CAU" role="Full Stack"/>
      <ProductList/>
    </div>
  )
}

export default App