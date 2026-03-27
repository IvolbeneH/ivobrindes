"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  onSearch?: () => void;
};

export function SearchInput({ onSearch }: Props) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!search.trim()) return;

    router.push(`/search?q=${encodeURIComponent(search)}`);

    onSearch?.();
  };

  return (
    <div className="flex items-center justify-between rounded-2xl bg-zinc-100 px-5">
      <SearchIcon className="h-5 w-5 text-zinc-600" />

      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="w-full border-none p-3 text-sm text-zinc-800 outline-none placeholder:text-zinc-600"
      />
    </div>
  );
}
