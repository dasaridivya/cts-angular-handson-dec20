import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'result'
})
export class findresult implements PipeTransform {
    transform(value: number, ) {
        if(value <36) 
            return "fail";
            else if(value>36 && value<60)
            return "pass";
        else 
            return 'firstclass';
    }
}