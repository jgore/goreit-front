import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AccountService} from '../../../services/account-service';
import {Account} from '../../account';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() sellerAccount: Account;
  private sellerId: string;
  private paramsSubscription: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params: Params) => {
        this.sellerId = params.sellerId;
        console.log('route param id' + this.sellerId);

        this.accountService.getAccount(this.sellerId)
          .subscribe(apiAccount => {
            this.sellerAccount = apiAccount;
          });
      });

  }


}
