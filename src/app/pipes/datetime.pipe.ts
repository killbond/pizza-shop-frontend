import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return moment(value).format('DD.MM.YYYY HH:mm:ss');
  }

}
