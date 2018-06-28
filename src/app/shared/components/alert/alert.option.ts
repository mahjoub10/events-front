
import { ToastOptions } from 'ng2-toastr/ng2-toastr';

// CUSTOM OPTION FOR TOASTR
export class AlertOption extends ToastOptions {
    animate = 'flyRight';
    newestOnTop = false;
    showCloseButton = true;
    positionClass = 'toast-top-right';
}
