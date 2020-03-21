import { HttpHeaders } from '@angular/common/http';

export function httpOptions() {
 return {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
}
