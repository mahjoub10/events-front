import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';

// CENTRLIZED SERVICE TO DISPLAY AlERTS
@Injectable()
export class AlertService {

    // INITIATE CONSTRUCTOR
    constructor(private toastr: ToastsManager) {

    }

    /**
     * Show toastr success message.
     */
    public alertSuccess(title: string, message: string): Promise<Toast> {
        return this.toastr.success(message, title, {});
    }

    /**
     * Show toastr info message.
     */
    public alertInfo(title: string, message: string): Promise<Toast> {
        return this.toastr.info(message, title, {});
    }

    /**
     * Show toastr warning message.
     */
    public alertWarning(title: string, message: string): Promise<Toast> {
        return this.toastr.warning(message, title, {});
    }

    /**
     * Show toastr error message.
     */
    public alertError(title: string, message: string): Promise<Toast> {
        return this.toastr.error(message, title, {});
    }

    setViewContainerRef(vRef: ViewContainerRef): void {
        this.toastr.setRootViewContainerRef(vRef);
    }

}
