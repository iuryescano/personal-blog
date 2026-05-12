import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { CircleX } from "lucide-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export const Search = () => {
  const router = useRouter();
  const query = (router.query.q as string) || ""; // Obtém o valor da consulta de busca a partir dos parâmetros da URL, ou define como string vazia se não estiver presente

  const handleSearch = useCallback((event: React.FormEvent) => { //
    event.preventDefault(); // Evita o comportamento padrão do formulário

    if (query.trim()) { // Verifica se a consulta não está vazia
      router.push(`/blog?q=${encodeURIComponent(query)}`); // Redireciona para a página de resultados de busca com a consulta como parâmetro
    }
  }, [query, router]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {//push a nova URL com a consulta atualizada
      shallow: true, // Atualiza a URL sem recarregar a página
      scroll: false, // Evita o scroll para o topo da página
    });
  }

  const resetSearch = () => {
    router.push("/blog", undefined, {
      shallow: true, // Atualiza a URL sem recarregar a página
      scroll: false, // Evita o scroll para o topo da página
    });
  }

  return (
    <form className="relative group w-full md:w-60" onSubmit={handleSearch}>
      <SearchIcon 
        className={cn('text-gray-300 absolute left-3 top-1/2  -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300', query ? 'text-blue-300' : ' ')}
      />
      <input 
        type="text"
        value={query}
        placeholder="Buscar"
        onChange={handleQueryChange}
        className="w-full h-10 md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md 
        text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 
        focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm" 
      />

      {query && (
        <CircleX className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-3 text-gray-300" onClick={resetSearch}/>
      )}
    </form>
  );
}