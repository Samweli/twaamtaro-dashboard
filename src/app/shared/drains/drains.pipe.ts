import { Pipe, PipeTransform } from '@angular/core';
import { DrainsService } from './drains.service';
import { Drain, Clean, Help } from './drain';

@Pipe({ name: 'dirtyDrains' })
export class DirtyDrainsPipe implements PipeTransform {
  transform(allDrains: Clean[]) {
    return allDrains.filter(drain => !drain.cleared);
  }
}

@Pipe({ name: 'cleanDrains' })
export class CleanDrainsPipe implements PipeTransform {
  transform(allDrains: Clean[]) {
    return allDrains.filter(drain => drain.cleared);
  }
}

@Pipe({ name: 'helpDrains' })
export class HelpDrainsPipe implements PipeTransform {
  transform(allDrains: Help[]) {
    return allDrains.filter(drain => drain.need_help);
  }
}