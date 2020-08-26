import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Film } from '../webservices/models/film.model';

@Component({
  selector: 'app-modal-film',
  templateUrl: './modal-film.component.html',
  styleUrls: ['./modal-film.component.scss']
})
export class ModalFilmComponent implements OnInit {

  film: Film;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ModalFilmComponent>) { }

  ngOnInit(): void {
  }

}
