import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesService } from '../notes/notes.service';

@Component({
  selector: 'show-note',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class ShowNoteComponent implements OnInit {
  notes: Observable<any[]>;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getData();
  }

}
