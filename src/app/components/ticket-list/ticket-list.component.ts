import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../service/ticket.service';
import { Ticket } from '../../model/ticket.model';


@Component({
  selector: 'ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit 
{
	ticketList: Ticket[] = [];

	constructor(private service: TicketService) { }

	ngOnInit(): void {
		// Get all tickets data when component loaded successfully
		this.getTicketList();
	}

	getTicketList(){
		this.service.getTickets().subscribe({
			next: (resp) => {
				this.ticketList = resp.data
			}
		});
	}
}
