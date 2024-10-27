import { Loader } from "lucide-react";

export default function AdminSpinner() {
    return(
    <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    )
}