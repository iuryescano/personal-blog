import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export const Search = () => {
  const router = useRouter();
  const q = router.query.q as string;
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((event: React.FormEvent) => { //
    event.preventDefault(); // Evita o comportamento padrão do formulário

    if (query.trim()) { // Verifica se a consulta não está vazia
      router.push(`/blog?q=${encodeURIComponent(query)}`); // Redireciona para a página de resultados de busca com a consulta como parâmetro
    }
  }, [query, router]);

  useEffect(() => { // Sincroniza o estado da consulta com o parâmetro de consulta na URL
    setQuery(q) // Atualiza o estado da consulta com o valor do parâmetro de consulta na URL
  }, [q]) // Sempre que o parâmetro de consulta 'q' na URL mudar, o estado 'query' será atualizado para refletir essa mudança. Isso garante que o campo de busca mostre a consulta atual mesmo quando o usuário navega para trás ou para frente no histórico do navegador.

  return (
    <form className="relative" onSubmit={handleSearch}>
      <SearchIcon className="text-gray-300 absolute left-3 top-1/2  -translate-y-1/2 h-4 w-4  transition-colors duration-200"/>
      <input 
        type="text"
        placeholder="Buscar"
        onChange={(event) => setQuery(event.target.value)}
        className="h-10 w-72 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md 
        text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 
        focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm" 
      />
    </form>
  );
}