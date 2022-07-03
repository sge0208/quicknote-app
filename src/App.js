import React, { Component } from "react";
import { Container } from "@material-ui/core";
import DisplayNotes from "./pages/DisplayNotes";
import AddNote from "./pages/AddNote";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomepage: true,
      notes: [ /* Data not shown to save space */ ],
    };
  }

  deleteNote = (note) => {
    this.setState((state) => {
      return {
        notes: state.notes.filter((n) => n.id !== note.id),
      };
    });
  };

  changePage = () => {
    this.setState((state) => {
      return {
        showHomepage: !state.showHomepage,
      };
    });
  };


  render() {
    const { notes, showHomepage } = this.state;
    return (
        <Container>
          {showHomepage ? (
              <DisplayNotes
                  notes={notes}
                  deleteNote={this.deleteNote}
                  changePage={this.changePage}
              />
          ) : (
              <AddNote changePage={this.changePage} />
          )}
        </Container>
    );
  }


}

export default App;



