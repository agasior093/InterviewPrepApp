import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.authService.setAuthentication(params['token']);
      this.initUserInfo();
    });
  }

  private initUserInfo() {
    this.userService.getUserInfo().subscribe(payload => {
      this.authService.setLoggedUserInfo(payload);
      this.router.navigate(['/profile']);
    });
  }

}
