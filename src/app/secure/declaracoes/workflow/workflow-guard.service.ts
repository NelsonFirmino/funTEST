import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { WorkflowService } from './workflow.service';

@Injectable()
export class WorkflowGuard implements CanActivate {
    constructor(private router: Router, private workflowService: WorkflowService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const path: string = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    }

    verifyWorkFlow(path: any): boolean {
        const firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            const url = `/declaracoes/nova/${firstPath}`;
            this.router.navigate([url]);
            return false;
        }

        return true;
    }
}
