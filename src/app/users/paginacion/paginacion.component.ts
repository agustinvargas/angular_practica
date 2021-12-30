import { DecimalPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Albums } from 'src/app/interfaces/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss'],
})
export class PaginacionComponent implements OnInit {
  constructor(private userSvc: UsersService) {}

  displayedColumns: string[] = ['userId', 'id', 'title'];

  albumsData!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.userSvc.getAlbums().subscribe({
      next: (list) => {
        this.albumsData = new MatTableDataSource(list);
        this.albumsData.sort = this.sort;
        this.albumsData.paginator = this.paginator;

        // PARA TRADUCIR
        this.paginator._intl.getRangeLabel = (
          page: number,
          pageSize: number,
          length: number
        ) => {
          const start = page * pageSize + 1;
          const end = (page + 1) * pageSize;
          return `${start} - ${end} de ${length}`;
        };
        this.paginator._intl.itemsPerPageLabel = 'Items por página';
        this.paginator._intl.nextPageLabel = 'Próxima página';
        this.paginator._intl.previousPageLabel = 'Anterior página';
        this.paginator._intl.lastPageLabel = 'Última página';
        this.paginator._intl.firstPageLabel = 'Primera página';
      },

      // itemsPerPageLabel
      // nextPageLabel
      // previousPageLabel
      // firstPageLabel
      // lastPageLabel
      // getRangeLabel
    });
  }

  // albums!: Albums[];
  // pageSlice!: Albums[];
  // defaulItemPerPage: number = 10;

  // ngOnInit(): void {
  //   this.userSvc.getAlbums().subscribe({
  //     next: (album) => {
  //       this.albums = album;
  //       this.pageSlice = this.albums.slice(0, this.defaulItemPerPage);
  //     },
  //     error: (err) => alert(err),
  //     complete: () => console.log('Completado'),
  //   });
  // }

  // onPageChange(evt: PageEvent) {
  //   console.log(evt);
  //   const startIndex = evt.pageIndex * evt.pageSize;
  //   let endIndex = startIndex + evt.pageSize;
  //   if (endIndex > this.albums.length) {
  //     endIndex = this.albums.length;
  //   }

  //   this.pageSlice = this.albums.slice(startIndex, endIndex);
  // }
}
