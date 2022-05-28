

function App() {
  return (
    <div classname="app">
      <Header text="Home" subtitle="test"/>
      <Header text="About" subtitle="testing"/>
    </div>
  );
}

const Header = (props) => {
  return (
    <>
    <h1>{props.text}</h1>
    <h2>{props.subtitle}</h2>
    </>
  );
};

export default App;
