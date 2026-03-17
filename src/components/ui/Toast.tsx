interface ToastProps {
    message: string;
    type?: "success" | "info" | "error";
  }
  
  export default function Toast({ message, type = "info" }: ToastProps) {
    const styles = {
      success: "bg-emerald-500 text-white",
      info: "bg-blue-600 text-white",
      error: "bg-rose-600 text-white",
    };
  
    return (
      <div
        className={`rounded-2xl px-4 py-3 text-sm font-medium shadow-xl ${styles[type]}`}
      >
        {message}
      </div>
    );
  }
  