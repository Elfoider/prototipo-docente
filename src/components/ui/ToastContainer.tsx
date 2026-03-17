import Toast from "./Toast";

interface ToastItem {
  id: string;
  message: string;
  type: "success" | "info" | "error";
}

interface ToastContainerProps {
  toasts: ToastItem[];
}

export default function ToastContainer({
  toasts,
}: ToastContainerProps) {
  return (
    <div className="fixed right-4 top-4 z-[100] space-y-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
        />
      ))}
    </div>
  );
}
