import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from './user.service';
import { Street, Role } from './user';

@Pipe({ name: 'streetVEO' })
export class StreetVEOPipe implements PipeTransform {
  transform(users: Role[]) {
    return users.filter(user => user.role == 2 );
  }
}

@Pipe({ name: 'userStreet' })
export class UserStreetPipe implements PipeTransform {
  transform(users: Street[]) {
    return users.filter(user => user.street_id == 2 );
  }
}