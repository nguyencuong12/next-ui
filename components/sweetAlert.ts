import Swal from "sweetalert2";
import CartEvents from "../utils/storage";

let SweetAlert = {
  onSuccess: (mainTitle: string) => {
    return Swal.fire({
      position: "center",
      icon: "success",
      title: mainTitle,
      showConfirmButton: false,
      timer: 1500,
    });
  },
  onConfirmDelete: (id: string) => {
    return Swal.fire({
      title: "Do you want to delete this item ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        CartEvents.deleteItem(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  },
};

export { SweetAlert };
