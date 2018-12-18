import { Component, OnInit,  } from '@angular/core';
import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Observable<any[]>;
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getData();
  }

  clickHandler() {
    this.notesService.createNote(this.content, this.title, this.author, this.category, this.image);
    this.content = '';
    this.title = '';
    this.author = '';
    this.category = '';
    this.image = '';

  }
}
