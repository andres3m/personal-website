import './App.css';
import Navbar from './Components/NavBar/navBar.js';
import ProfilePic from './Assets/profilePic.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section id="home">
        <div id="home-container">
          <div id="name-title-container">
            <span id="name">Andres Espin</span>
            <br/>
            <span id="job-title">Full stack Developer</span>
          </div>
          <img src={ProfilePic} id="my-pic" alt='Portrait of Andres'></img>
        </div>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>
        I'm Spanish based in Birmingham.
        I originally studied Electronics Engineering in Spain. 
        For the past 7 years I have worked with hardware in several industries like show event, automotive, marine and aerospace.
        I enjoyed the problem solving nature of my job and the possibilities of tech. But then I was attracted by the chance of use my skills to help thousands of users through software.
        So I switched careers and learnt coding full time at School of Code. To create a full stack app in a few weeks from no coding, confirmed that this is what I really want to do.
        My experience makes me aware of the possiblities that hard work, dedication and team work can take up to.
        Feel free to take a look into my portfolio and don't hesitate to contact me by email, Linkedin or Twitter.
        </p>
      </section>
      <section id="portfolio">
        <h1>Portfolio</h1>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac enim sit amet ipsum semper volutpat sed at metus. Ut maximus nunc mi, quis tempor est scelerisque at. Etiam tellus purus, consectetur ac orci eu, imperdiet mollis massa. Quisque vitae mauris sed enim posuere consectetur. Pellentesque cursus rhoncus dui ac malesuada. Curabitur vitae risus nec nibh scelerisque accumsan id in ipsum. Suspendisse ac orci ut urna sollicitudin pulvinar. Fusce egestas mattis dapibus. Nunc vulputate diam a feugiat aliquam. Fusce lobortis ex sed velit iaculis, ac aliquet nisi feugiat.

Mauris vel purus et sapien sollicitudin dictum in non augue. Cras eu sem metus. Donec quis cursus elit. Vestibulum nec faucibus purus. Curabitur consectetur erat nec auctor finibus. Cras in blandit nibh. Phasellus eu est eget leo venenatis convallis. Pellentesque consequat eu diam eget lacinia. Etiam non ex nunc. Donec convallis urna eu dolor sodales varius. Fusce ornare velit non elit ornare, sit amet mattis elit fringilla. Sed congue elementum libero eget elementum. Sed id feugiat velit. Suspendisse a molestie sem. Duis ac euismod nisi.

Curabitur nec velit at enim hendrerit imperdiet et vel ex. Morbi id erat ex. Ut eget justo a leo mollis ultrices luctus eu mauris. Cras vulputate pellentesque gravida. Nunc lectus libero, ornare nec nibh fermentum, eleifend volutpat tellus. Sed sit amet dui tempor risus finibus fringilla. Nullam scelerisque congue enim, porta tincidunt mi lacinia nec. Nullam tempor blandit vestibulum. Fusce vestibulum sed elit eget fermentum. Donec eget purus quis quam pharetra mollis. Aliquam et pellentesque nulla. Aenean vel odio interdum, consectetur mi sed, sagittis eros. Nullam a vulputate libero, id scelerisque augue. Morbi varius rutrum laoreet. Curabitur sit amet diam faucibus, mollis elit a, sagittis leo.

Proin ut quam ut sem maximus vehicula sed quis justo. Nunc eleifend euismod enim in maximus. Suspendisse facilisis vehicula augue eu mollis. Aliquam facilisis interdum dui ut pellentesque. Quisque tincidunt dapibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet nibh sit amet neque varius dapibus. Phasellus at tincidunt metus. Nam a dui id sapien efficitur lacinia eu ac orci. Nulla mattis nulla vitae fermentum rutrum. Nam sollicitudin turpis eu urna feugiat, et laoreet tortor condimentum. Suspendisse tincidunt lacus eget erat congue, vitae malesuada tellus viverra. Nulla sagittis eros ac vehicula congue.

Curabitur sit amet purus interdum, tincidunt metus non, rutrum elit. Sed vitae ipsum ac erat pellentesque varius. Nullam diam arcu, interdum a ornare eu, rutrum ac erat. Suspendisse placerat, justo in maximus viverra, nibh ipsum rhoncus nibh, at pharetra urna magna eget lacus. Cras id enim vitae leo mattis vehicula. Duis mollis metus ut risus rutrum, ultricies posuere quam ullamcorper. Integer eu eros nulla. In nec sollicitudin eros. Duis sed congue arcu.
</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac enim sit amet ipsum semper volutpat sed at metus. Ut maximus nunc mi, quis tempor est scelerisque at. Etiam tellus purus, consectetur ac orci eu, imperdiet mollis massa. Quisque vitae mauris sed enim posuere consectetur. Pellentesque cursus rhoncus dui ac malesuada. Curabitur vitae risus nec nibh scelerisque accumsan id in ipsum. Suspendisse ac orci ut urna sollicitudin pulvinar. Fusce egestas mattis dapibus. Nunc vulputate diam a feugiat aliquam. Fusce lobortis ex sed velit iaculis, ac aliquet nisi feugiat.

Mauris vel purus et sapien sollicitudin dictum in non augue. Cras eu sem metus. Donec quis cursus elit. Vestibulum nec faucibus purus. Curabitur consectetur erat nec auctor finibus. Cras in blandit nibh. Phasellus eu est eget leo venenatis convallis. Pellentesque consequat eu diam eget lacinia. Etiam non ex nunc. Donec convallis urna eu dolor sodales varius. Fusce ornare velit non elit ornare, sit amet mattis elit fringilla. Sed congue elementum libero eget elementum. Sed id feugiat velit. Suspendisse a molestie sem. Duis ac euismod nisi.

Curabitur nec velit at enim hendrerit imperdiet et vel ex. Morbi id erat ex. Ut eget justo a leo mollis ultrices luctus eu mauris. Cras vulputate pellentesque gravida. Nunc lectus libero, ornare nec nibh fermentum, eleifend volutpat tellus. Sed sit amet dui tempor risus finibus fringilla. Nullam scelerisque congue enim, porta tincidunt mi lacinia nec. Nullam tempor blandit vestibulum. Fusce vestibulum sed elit eget fermentum. Donec eget purus quis quam pharetra mollis. Aliquam et pellentesque nulla. Aenean vel odio interdum, consectetur mi sed, sagittis eros. Nullam a vulputate libero, id scelerisque augue. Morbi varius rutrum laoreet. Curabitur sit amet diam faucibus, mollis elit a, sagittis leo.

Proin ut quam ut sem maximus vehicula sed quis justo. Nunc eleifend euismod enim in maximus. Suspendisse facilisis vehicula augue eu mollis. Aliquam facilisis interdum dui ut pellentesque. Quisque tincidunt dapibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet nibh sit amet neque varius dapibus. Phasellus at tincidunt metus. Nam a dui id sapien efficitur lacinia eu ac orci. Nulla mattis nulla vitae fermentum rutrum. Nam sollicitudin turpis eu urna feugiat, et laoreet tortor condimentum. Suspendisse tincidunt lacus eget erat congue, vitae malesuada tellus viverra. Nulla sagittis eros ac vehicula congue.

Curabitur sit amet purus interdum, tincidunt metus non, rutrum elit. Sed vitae ipsum ac erat pellentesque varius. Nullam diam arcu, interdum a ornare eu, rutrum ac erat. Suspendisse placerat, justo in maximus viverra, nibh ipsum rhoncus nibh, at pharetra urna magna eget lacus. Cras id enim vitae leo mattis vehicula. Duis mollis metus ut risus rutrum, ultricies posuere quam ullamcorper. Integer eu eros nulla. In nec sollicitudin eros. Duis sed congue arcu.
</p>
      </section>
    </div>
  );
}

export default App;
