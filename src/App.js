import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }
  setNotes() {
    localStorage.setItem(this.state.noteText, true);
  }

  getNotes(){
    let toDo = localStorage.getItem(this.state.noteText);
    toDo = JSON.parse(toDo);
    console.log('Data')
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value })
  }

  addNote() {
    // if (this.state.noteText === '') { return }
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {

    }
  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr })
  }

  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
        deleteMethod={() => this.deleteNote(key)} />
    })

    return (
      <div className="container" >
        <div className="header">To Do App</div>

        <input type="text" placeholder="Type here..."
          ref={((input) => { this.textInput = input })}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        <div className="btn" onClick={this.addNote.bind(this) && this.setNotes.bind(this)}>+</div>

        {notes}
      </div>
    );
  }
}



export default App;
