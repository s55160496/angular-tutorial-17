import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlert(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'OK',
    });
  }

  AlertError(title: string, text: string, icon: any){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  AlertConfirm(title: string, text: string, onConfirm: () => void, onCancel?: () => void) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        // Execute the onConfirm callback if 'Yes' is clicked
        onConfirm();
      } else if (result.isDismissed && onCancel) {
        // Execute the onCancel callback if 'No' is clicked
        onCancel();
      }
    });
  }
}
