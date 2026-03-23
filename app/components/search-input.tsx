import { SearchIcon } from "lucide-react";

export function SearchInput() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-zinc-100 px-5">
      <SearchIcon className="h-5 w-5 text-zinc-600" />
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="w-[28rem] border-none p-3 text-zinc-800 outline-none placeholder:text-zinc-600"
      />
    </div>
  );
}
