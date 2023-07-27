import Notes from "./components/Notes/Notes";
function App() {
  const notes =[
    {
      id:1,
      text:'This is a note 1'
    },
    {
      id:2,
      text:'This is a note 2'
    },
    {
      id:3,
      text:'This is a note 3'
    },
  ];
  return (
    <div>
      <Notes notes={notes}/>
    </div>
  );
}

export default App;
