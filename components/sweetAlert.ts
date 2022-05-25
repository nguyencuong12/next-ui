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
      title: "Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        CartEvents.deleteItem(id);
        Swal.fire("Đã xóa sản phẩm khỏi giỏ hàng !", "", "success");
      }
    });
  },
};

export { SweetAlert };
